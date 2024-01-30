require('dotenv').config();
const exec = require("child_process").exec;
const fs = require("fs");

let HTMLPagesFiles = fs.readdirSync('packages/agenciafmd/frontend/src/resources/views/html');

let allReportsPerPage = [];

console.log("🌀 Iniciando lighthouse...");

function formatPageArrayFiles() {
  
  const unwantedPagesFiles = [
    'internal',
    'master',
    'partials',
    'template',
    'web-vitals',
    'tema'
  ];
  
  HTMLPagesFiles = HTMLPagesFiles.map(page => page.replace('.blade.php', ''))
    .filter(page => !unwantedPagesFiles.includes(page));
}

formatPageArrayFiles();

function convertToPercentage(number) {
  return Math.round(number * 100)
}

function scoreStatus(score) {
  
  const scoreConvertedToPercentage = convertToPercentage(score);
  
  let reportComplete = {
    score: scoreConvertedToPercentage,
    status: ''
  }
  
  const status = {
    dangerous: scoreConvertedToPercentage <= 25,
    warning: 25 < scoreConvertedToPercentage <= 50,
    info: 50 < scoreConvertedToPercentage <= 80,
    success: 80 < scoreConvertedToPercentage
  }
  
  if (status.dangerous) {
    reportComplete.status = 'dangerous';
  }
  
  if (status.warning) {
    reportComplete.status = 'warning';
  }
  
  if (status.info) {
    reportComplete.status = 'info';
  }
  
  if (status.success) {
    reportComplete.status = 'success';
  }
  
  return reportComplete;
}

function generateReports() {
  return new Promise((resolve) => {
    
    const createLighthouseReportFolder = 'rm -rf ./public/web-vitals/ && mkdir -p ./public/web-vitals';
    const createLighthouseReportJSONFolder = 'rm -rf ./resources/web-vitals/ && mkdir -p ./resources/web-vitals';
    
    exec(`${createLighthouseReportFolder} && ${createLighthouseReportJSONFolder}`, function (error, stdout) {
      
      console.log(stdout);
      
      if (error) {
        console.error(error);
        return;
      }
      
      HTMLPagesFiles.forEach((page, index) => {
        
        const projectURL = `${process.env.APP_URL}/html/${page}`;
        const chromeFlags = '--headless --no-sandbox';
        const reportPath = `./public/web-vitals/${page}`;
        
        const runLighthouse = `lighthouse ${projectURL} --chrome-flags="${chromeFlags}" --output='json,html' --output-path=${reportPath}`;
        
        exec(runLighthouse, function (error, stdout) {
          
          console.log(stdout);
          
          if (error) {
            console.error(error);
            return;
          }
          
          fs.readFile(`${reportPath}.report.json`, "utf8", (error, data) => {
            if (error) {
              console.log(error);
              return;
            }
            
            const report = JSON.parse(data).categories;
            const reportComplete = {
              pageName: page,
              categories: {
                performance: {
                  label: 'Performance',
                  score: scoreStatus(report.performance.score).score,
                  status: scoreStatus(report.performance.score).status
                },
                accessibility: {
                  label: 'Acessibilidade',
                  score: scoreStatus(report.accessibility.score).score,
                  status: scoreStatus(report.accessibility.score).status
                },
                bestPractices: {
                  label: 'Melhores Práticas',
                  score: scoreStatus(report['best-practices'].score).score,
                  status: scoreStatus(report['best-practices'].score).status
                },
                seo: {
                  label: 'SEO',
                  score: scoreStatus(report.seo.score).score,
                  status: scoreStatus(report.seo.score).status
                },
                pwa:{
                  label: 'PWA',
                  score: scoreStatus(report.pwa.score).score,
                  status: scoreStatus(report.pwa.score).status
                },
              }
            }
            
            allReportsPerPage.push(reportComplete);
            
            const hasAllReports = index === (HTMLPagesFiles.length - 1);
            
            if (hasAllReports) {
              resolve(allReportsPerPage);
            }
          });
        });
      });
    });
  });
}

generateReports().then((resolve) => {
  
  fs.writeFile('./resources/web-vitals/web-vitals.json', JSON.stringify(resolve), (err) => {
    
    if (err) {
      console.log(err);
      return
    }
    
    console.log(`✅ Reports adicionados com sucesso.`);
  });
})