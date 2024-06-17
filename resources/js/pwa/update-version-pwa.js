const fs = require('fs');
const UglifyJS = require('uglify-js');
const serviceWorkResourcePath = 'resources/js/pwa/service-worker.js';
const serviceWorkPublicPath = 'public/service-worker.js';

function dataToBeReplacedInServiceWork() {

  const serviceWorkResource = UglifyJS.minify(fs.readFileSync(
      serviceWorkResourcePath,
      { encoding: 'utf8', flag: 'r' },
  ));

  const data = serviceWorkResource.code.replace(
      new RegExp(`fmd:versionPWA`, 'g'),
      Date.now(),
  );

  fs.writeFile(serviceWorkPublicPath, data, (err) => {

    if (err) {

      console.log(err);
      return;
    }

    console.log(`✅ Service-work adicionado`);
  });

}


dataToBeReplacedInServiceWork();
