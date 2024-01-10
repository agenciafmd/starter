require('dotenv').config();
const exec = require("child_process").exec;

const date = new Date();

const projectURL = process.env.APP_URL;
const chromeFlags = '--headless --no-sandbox';
const reportDate = [date.getDate(), (date.getMonth() + 1), date.getFullYear(), (date.getHours() + 'h'), (date.getMinutes() + 'm')].join('-');
const reportPath = `./resources/lighthouse/lighthouse-report-${reportDate}.html`;
const createLighthouseReportFolder = 'mkdir -p ./resources/lighthouse';
const runLighthouse = `lighthouse ${projectURL} --chrome-flags="${chromeFlags}" --output-path=${reportPath}`;

console.log("🌀 Iniciando lighthouse...");
exec(`${createLighthouseReportFolder} && ${runLighthouse}`, function (error, stdout) {

  console.log(stdout);

  if (error) {
    console.error(error);
    return;
  }

  console.log("✅ Auditoria concluída.");
});
