import fs from 'fs/promises';
import path from 'path';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const getConfigWebpPlugin = () => imageminWebp({

  quality: 100,
});

const convertImages = async (sourceDir, destinationDir) => {

  try {

    await imagemin([`${ sourceDir }/*.{jpg,png}`], {

      destination: destinationDir,
      plugins: [getConfigWebpPlugin()],
    });

    console.log(`✅  Images Converted Successfully in ${ sourceDir }`);
  } catch (error) {

    console.error(`❌  Error converting images in ${ sourceDir }`, error);
  }
};

const getDirectories = async (sourceDir) => {

  try {

    const entries = await fs.readdir(sourceDir, { withFileTypes: true });
    return entries
        .filter(entry => entry.isDirectory())
        .map(entry => path.join(sourceDir, entry.name));
  } catch (error) {

    console.error(`❌  Error reading directories in ${ sourceDir }`, error);
    return [];
  }
};

const processDirectories = async () => {

  const baseDir = './resources/images';

  await convertImages(baseDir, baseDir);

  const directories = await getDirectories(baseDir);

  for (const dir of directories) {
    await convertImages(dir, dir);
  }
};

processDirectories()
    .then(() => {
      console.log('✅  Images Converted Successfully!');
    })
    .catch(error => {
      console.error('❌  Error processing directories:', error);
    });