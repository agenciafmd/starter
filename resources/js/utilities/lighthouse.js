require('dotenv').config();
const exec = require("child_process").exec;
const fs = require("fs");
const inquirer = require('inquirer');
const path = require("path");

const environmentsSetup = {
  local: {
    id: 'local',
    domain: `${process.env.APP_URL}`,
    pagesPathToAudit: 'packages/agenciafmd/frontend/src/resources/views/html'
  },
  homologation: {
    id: 'dev',
    domain: `https://${path.basename(process.cwd()).replace(/-/g, "")}.fmd.dev`,
    pagesPathToAudit: 'packages/agenciafmd/frontend/src/resources/views/html'
  },
}

let HTMLPagesFiles = fs.readdirSync('packages/agenciafmd/frontend/src/resources/views/html');

let allReportsPerPage = [];

console.log("🌀 Iniciando lighthouse...");

function formatPageArrayFiles() {
  
  const unwantedPagesFiles = [
    'internal',
    'master',
    'partials',
    'create-page-template',
    'web-vitals',
    'tema',
    'critical-path-demo',
    'offline'
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

function generateReports(environment) {
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
        
        const projectURL = `${environment.domain}/html/${page}`;
        const chromeFlags = '--headless --no-sandbox';
        const reportPath = `./public/web-vitals/${page}-${environment.id}`;
        
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

const environmentsPromptQuestion = inquirer.prompt([
  {
    type: 'checkbox',
    name: 'environmentsSelected',
    message: 'Deseja rodar a auditoria em quais ambientes?',
    choices: ['Local', 'Homologação'],
  }
]);

environmentsPromptQuestion.then(environments => {
  
  const environmentsSelected = environments.environmentsSelected;
  
  if (environmentsSelected.includes('Local')) {
    generateReports(environmentsSetup.local).then((resolveReports) => {
      
      fs.writeFile(`./resources/web-vitals/web-vitals-${environmentsSetup.local.id}.json`, JSON.stringify(resolveReports), (err) => {
        
        if (err) {
          console.log(err);
          return
        }
        
        console.log(`✅ Reportes de ${environmentsSetup.local.domain} adicionados com sucesso.`);
      });
    });
  }
  
  if (environmentsSelected.includes('Homologação')) {
    generateReports(environmentsSetup.homologation).then((resolveReports) => {
      
      fs.writeFile(`./resources/web-vitals/web-vitals-${environmentsSetup.homologation.id}.json`, JSON.stringify(resolveReports), (err) => {
        
        if (err) {
          console.log(err);
          return
        }
        
        console.log(`✅ Reportes de ${environmentsSetup.homologation.domain} adicionados com sucesso.`);
      });
    });
  }
})
