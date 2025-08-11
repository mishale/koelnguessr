const fs = require('fs');
const path = require('path');

const imageFolderPath = './assets/imgs'; 
const imageArrayPath = './assets/imagesData.js';

const imageFileNames = fs.readdirSync(imageFolderPath).filter(file => file.endsWith('.jpg'));

const imagesData = imageFileNames.map((imageName, index) => ({
  id: index + 1,
  src: `/imgs/${imageName}`,
  alt: `Bild ${index + 1}`,
}));

const output = `const imagesData = ${JSON.stringify(imagesData)};\n\nexport default imagesData;`;

fs.writeFileSync(imageArrayPath, output);

console.log('Bildarray erstellt.');
