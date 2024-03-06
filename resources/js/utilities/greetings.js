const exec = require("child_process").exec;

console.log("🌀 Finalizando o projeto...");

const removeGreetingsFiles = 'rm -rf resources/sass/pages/_greetings.scss';
const removeGreetingsScssImport = 'sed -i \'/greetings/d\' resources/sass/frontend.scss';
const removeAllGreetingsUsages = removeGreetingsFiles + '&&' + removeGreetingsScssImport;

exec(removeAllGreetingsUsages, function (error, stdout) {

  console.log(stdout);

  if (error) {
    console.error(error);
    return;
  }

  console.log("✅ Limpeza de boas-vindas concluída.");

  console.log("🌀 Iniciando build...");

  exec('npm run dev', function (error, stdout) {

    console.log(stdout);

    if (error) {
      console.error(error);
      return;
    }

    console.log("✅ Build concluído.");

    console.log("🌀 Iniciando critical...");

    exec('npm run prod', function (error, stdout) {

      console.log(stdout);

      if (error) {
        console.error(error);
        return;
      }

      console.log("✅ Critical concluído.");
    });
  });
});
