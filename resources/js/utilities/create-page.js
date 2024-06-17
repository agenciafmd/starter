const childProcess = require("child_process");
const inquirer = require('inquirer');
const fs = require('fs');

function createBladePHPPage(pageName) {
  
  const pagePath = `packages/agenciafmd/frontend/src/resources/views/html/${pageName}.blade.php`;
  
  const templateFile = fs.readFileSync('packages/agenciafmd/frontend/src/resources/views/html/create-page-template.blade.php', 'utf8');
  const pageTemplate = templateFile.replaceAll('<!--fmd:pageName-->', pageName);
  
  childProcess.exec(`touch ${pagePath}`, function (error, stdout) {
    
    if (error) {
      console.error(error);
      return;
    }
    
    fs.writeFile(pagePath, pageTemplate, (err) => {
      
      if (err) {
        console.log(err);
        return
      }
      
      console.log(`✅ ${pageName}.blade.php criada com sucesso.`);
    });
  });
}

function createStylePage(stylePageName) {
  
  const pagePath = `resources/sass/pages/_${stylePageName}.scss`;
  const importNewStylePageInFrontendSCSS = `echo -n '@import "pages/${stylePageName}";' >> resources/sass/frontend.scss`;
  
  childProcess.exec(`touch ${pagePath} && ${importNewStylePageInFrontendSCSS}`, function (error, stdout) {
    
    if (error) {
      console.error(error);
      return;
    }
    
    console.log(`✅ ${stylePageName}.scss criada e importada com sucesso.`);
  });
}

const page = inquirer.prompt([
  {
    message: 'Qual o nome da nova página?',
    type: 'input',
    name: 'name',
  }
]);

page.then(page => {
  
  let pageName = page.name;
  
  const stylePageQuestion = inquirer.prompt([
    {
      message: `Deseja criar uma folha de estilos SCSS exclusiva para a ${pageName}?`,
      type: 'confirm',
      name: 'name',
    }
  ]);
  
  stylePageQuestion.then(stylePageQuestion => {
    
    const hasStylePage = stylePageQuestion.name;
    
    if (!hasStylePage) {
      createBladePHPPage(pageName);
      return;
    }
    
    const stylePage = inquirer.prompt([
      {
        message: 'Como deseja nomear sua página de estilo?',
        type: 'input',
        name: 'name',
      }
    ]);
    
    stylePage.then(stylePage => {
      createBladePHPPage(pageName);
      createStylePage(stylePage.name);
    })
  });
});
