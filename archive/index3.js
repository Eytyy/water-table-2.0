const canvas = document.getElementById('canvasEl');
const ctx = canvas.getContext('2d');

// Point of transform origin
ctx.arc(300, 300, 5, 0, 2 * Math.PI);
ctx.fillStyle = 'blue';
ctx.fill();

// Non-rotated rectangle
ctx.fillStyle = 'gray';
ctx.fillRect(100, 0, 80, 20);

// Rotated rectangle
ctx.rotate(45 * Math.PI / 180);
ctx.fillStyle = 'red';
ctx.fillRect(200, 100, 80, 20);

// Reset transformation matrix to the identity matrix
// ctx.setTransform(a, b, c, d, e, f);
// a (m11) Horizontal scaling. A value of 1 results in no scaling.
// b (m12) Vertical skewing.
// c (m21) Horizontal skewing.
// d (m22) Vertical scaling. A value of 1 results in no scaling.
// e (dx) Horizontal translation (moving).
// f (dy) Vertical translation (moving).

ctx.setTransform(1, 0, 0, 1, 0, 0);

// Non-rotated rectangle
ctx.fillStyle = 'gray';
ctx.fillRect(80, 60, 140, 30);

ctx.translate(150, 75);
ctx.arc(0, 0 , 20, 0, Math.PI * 2);
ctx.rotate(Math.PI / 2);
ctx.translate(-150, -75);
ctx.fillStyle = 'red';
ctx.fillRect(80, 60, 140, 30);