const cv = require('opencv');
const COLOR = [0, 0, 255];

const finalCrop = {width: 300, height: 300};

cv.readImage('./images/faces.jpeg', (err, im) => {
  im.detectObject(cv.FACE_CASCADE, {}, (err, faces) => {
    const faceAreas = faces.map(face => {
      im.rectangle([face.x, face.y], [face.width, face.height], COLOR, 2);
      return face.width * face.height;
    });
    const maxFaceIndex = faceAreas.indexOf(Math.max(...faceAreas));
    const cropFace = faces[maxFaceIndex];
    const cropX = cropFace.x + (finalCrop.width / 2);
    const cropY = cropFace.y + (finalCrop.height / 2);
    console.log(`cropX: ${cropX}, cropY: ${cropY}`);
    im.save('./images/out.jpg');
  })
});
