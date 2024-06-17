const fs = require('fs');
const webpackPath = 'webpack.mix.js';

let HTMLPagesFiles = fs.readdirSync('packages/agenciafmd/frontend/src/resources/views/html');

function formatPageArrayFiles() {

  const unwantedPagesFiles = [
    'internal',
    'master',
    'partials',
    'create-page-template',
    'tema'
  ];

  HTMLPagesFiles = HTMLPagesFiles.map(page => page.replace('.blade.php', ''))
    .filter(page => !unwantedPagesFiles.includes(page))
    .map((page) => ({url: page, template: page}));
}

function URLsTemplate() {

  const template = JSON.stringify(HTMLPagesFiles)
    .replace('[{','[\n{')
    .replaceAll('},','},\n')
    .replace('}]','}\n\t\t\t\t]')
    .replaceAll('{', '\t\t\t\t\t\t{');

  return `urls: ${template},\n\t\t\t\t`;
}

function dataToBeReplacedInWebpack() {
  const webpackFile = fs.readFileSync(webpackPath, { encoding: 'utf8', flag: 'r' });
  const URLsToReplace = webpackFile.substring(webpackFile.search('urls:'), webpackFile.search('// fmd:criticalPath'));

  return webpackFile.replace(URLsToReplace, URLsTemplate());
}

formatPageArrayFiles();

fs.writeFile(webpackPath, dataToBeReplacedInWebpack(), (err) => {

  if (err) {
    console.log(err);
    return
  }

  console.log(`✅ As páginas do /HTML foram adicionadas ao ${webpackPath} com sucesso.`);
});
