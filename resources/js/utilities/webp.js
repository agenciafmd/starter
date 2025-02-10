import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

imagemin(['./resources/images/*.{jpg,png}'], {
  destination: './resources/images/',
  plugins: [
    imageminWebp({
      //   quality: 90
      //   ,
      //   resize: {
      //     width: 1000,
      //     height: 0
      //   }
    }),
  ],
}).then(() => {
  console.log('✅  WebP images converted successfully');
});