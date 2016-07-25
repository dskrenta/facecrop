const cv = require('opencv');
const COLOR = [0, 0, 255];

cv.readImage('./images/mona.png', (err, im) => {
  im.detectObject(cv.FACE_CASCADE, {}, (err, faces) => {
    console.log(faces);
    faces.map(face => {
      im.rectangle([face.x, face.y], [face.width, face.height], COLOR, 2);
    });
    im.save('./images/out.jpg');
  })
});
