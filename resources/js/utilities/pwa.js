require('dotenv').config();
const fs = require('fs');

console.log("🌀 Capturando informações do PWA...");

function getThemeColor() {
  
  return new Promise((resolve) => {
    const colorTokensFilePath = './resources/sass/frontend/tokens/_color-tokens.scss';
    
    fs.readFile(colorTokensFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
      }
      
      const primaryColorVariableName = getStringInFile(data, '$ds-primary', ' $', ';');
      const primaryColorVariableHexadecimal = getStringInFile(data, primaryColorVariableName, '#', ';');
      
      resolve(primaryColorVariableHexadecimal);
    });
  })
}

function getStringInFile(file, keyword, initialSelector, finalSelector) {
  
  const lines = file.split('\n');
  
  let occurrences = [];
  
  lines.forEach((line) => {
    if (line.includes(keyword)) {
      const indexOfHexaInitial = line.indexOf(initialSelector);
      const indexOfHexaEnd = line.indexOf(finalSelector, indexOfHexaInitial);
      
      occurrences.push(line.substring(indexOfHexaInitial, indexOfHexaEnd).trim());
    }
  })
  
  return occurrences[0];
}

getThemeColor().then((themeColor) => {
  
  const pwa = {
    name: process.env.APP_NAME,
    short_name: process.env.APP_NAME,
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: themeColor,
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/images/mstile-150x150.webp',
        type: 'image/webp',
        sizes: '150x150',
        purpose: 'maskable any'
      },
      {
        src: '/images/mstile-150x150.png',
        type: 'image/png',
        sizes: '150x150',
        purpose: 'maskable any'
      },
      {
        src: '/images/icon-192x192.webp',
        type: 'image/webp',
        sizes: '192x192',
        purpose: 'maskable any'
      },
      {
        src: '/images/icon-192x192.png',
        type: 'image/png',
        sizes: '192x192',
        purpose: 'maskable any'
      },
      {
        src: '/images/icon-512x512.webp',
        type: 'image/webp',
        sizes: '512x512',
        purpose: 'maskable any'
      },
      {
        src: '/images/icon-512x512.png',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'maskable any'
      }
    ]
  }
  
  const pwaString = JSON.stringify(pwa, null, 2); // O segundo parâmetro é para a formatação e o terceiro é a quantidade de espaços de indentação

  const manifestFilePath = './resources/js/pwa/manifest.json';

  fs.writeFile(manifestFilePath, pwaString, 'utf8', (err) => {
    if (err) {
      console.error('Erro ao escrever no arquivo JSON:', err);
      return;
    }
    console.log('✅ As informaçõe do PWA foram inseridas no manifest com sucesso!');
  });
});
