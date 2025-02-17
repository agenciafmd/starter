import fs, { writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { createRequire } from 'module';

async function generateManifest() {

  try {

    const viteManifest = getViteManifest();
    const themeColorProject = await getThemeColor();

    const manifest = {
      name: 'Starter',
      short_name: 'Starter',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: themeColorProject,
      orientation: 'portrait-primary',
      icons: generateIcons(viteManifest),
    };

    const outputPath = resolve('public/manifest.json');

    writeFileSync(outputPath, JSON.stringify(manifest, null, 2), 'utf8');
    console.log(`✅  PWA manifest successfully generated! File path: ${ outputPath }`);

  } catch (error) {

    console.error(`⚠️  Oops! Something went wrong while generating the manifest: ${error.message}`);
  }
}

function getViteManifest() {

  const require = createRequire(import.meta.url);
  const manifestPath = resolve('public/build/manifest.json');

  if (!existsSync(manifestPath)) {

    throw new Error(`Manifest não encontrado em ${ manifestPath }. Certifique-se de que o Build tenha sido executado.`);
  }

  return require(manifestPath);
}

function generateIcons(viteManifest) {

  const icons = [
    {
      src: 'resources/images/icons/mstile-150x150.webp',
      type: 'image/webp',
      sizes: '150x150',
      purpose: 'maskable any',
    },
    {
      src: 'resources/images/icons/mstile-150x150.png',
      type: 'image/png',
      sizes: '150x150',
      purpose: 'maskable any',
    },
    {
      src: 'resources/images/icons/icon-192x192.webp',
      type: 'image/webp',
      sizes: '192x192',
      purpose: 'maskable any',
    },
    {
      src: 'resources/images/icons/icon-192x192.png',
      type: 'image/png',
      sizes: '192x192',
      purpose: 'maskable any',
    },
    {
      src: 'resources/images/icons/icon-512x512.webp',
      type: 'image/webp',
      sizes: '512x512',
      purpose: 'maskable any',
    },
    {
      src: 'resources/images/icons/icon-512x512.png',
      type: 'image/png',
      sizes: '512x512',
      purpose: 'maskable any',
    },
  ];

  return icons.map(icon => {

    const fileName = icon.src.split('/').pop();
    const hashedFile = viteManifest[`resources/images/icons/${ fileName }`];

    if (hashedFile) {

      icon.src = `build/${ hashedFile.file }`;
    }

    return icon;
  });
}

function getThemeColor() {

  return new Promise((resolve) => {
    const colorTokensFilePath = './resources/scss/frontend/tokens/_color-tokens.scss';

    fs.readFile(colorTokensFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
      }

      const primaryColorVariableName = getStringInFile(
          data,
          '$ds-primary',
          ' $',
          ';',
      );
      const primaryColorVariableHexadecimal = getStringInFile(
          data,
          primaryColorVariableName,
          '#',
          ';',
      );

      resolve(primaryColorVariableHexadecimal);
    });
  });
}

function getStringInFile(file, keyword, initialSelector, finalSelector) {

  const lines = file.split('\n');

  let occurrences = [];

  lines.forEach((line) => {
    if (line.includes(keyword)) {
      const indexOfHexaInitial = line.indexOf(initialSelector);
      const indexOfHexaEnd = line.indexOf(finalSelector, indexOfHexaInitial);

      occurrences.push(line.substring(indexOfHexaInitial, indexOfHexaEnd)
          .trim());
    }
  });

  return occurrences[0];
}

generateManifest();
