const childProcess = require("child_process");

console.log("🌀 Finalizando o projeto...");

const removeGreetingsFiles = 'rm -rf resources/sass/pages/_greetings.scss';
const removeGreetingsScssImport = 'sed -i \'/greetings/d\' resources/sass/frontend.scss';
const removeAllGreetingsUsages = removeGreetingsFiles + '&&' + removeGreetingsScssImport;

childProcess.exec(removeAllGreetingsUsages, function (error, stdout) {

  console.log(stdout);

  if (error) {
    console.error(error);
    return;
  }

  console.log("✅ Limpeza de boas-vindas concluída.");

  console.log("🌀 Iniciando build...");
  
  childProcess.exec('npm run dev', function (error, stdout) {

    console.log(stdout);

    if (error) {
      console.error(error);
      return;
    }

    console.log("✅ Build concluído.");

    console.log("🌀 Iniciando critical...");
    
    childProcess.exec('npm run prod', function (error, stdout) {

      console.log(stdout);

      if (error) {
        console.error(error);
        return;
      }

      console.log("✅ Critical concluído.");
    });
  });
});
