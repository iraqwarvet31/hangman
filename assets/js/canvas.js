const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 10;

function drawHangmanPost() {
  // hangman base
  ctx.beginPath();
  ctx.moveTo(100, 50);
  ctx.lineTo(100, 400);
  ctx.stroke();

  // hangman post
  ctx.beginPath();
  ctx.moveTo(1, 401);
  ctx.lineTo(250, 401);
  ctx.stroke();

  // hangman top
  ctx.beginPath();
  ctx.moveTo(100, 50);
  ctx.lineTo(200, 50);
  ctx.stroke();

  // hangman noose
  ctx.beginPath();
  ctx.moveTo(197, 50);
  ctx.lineTo(197, 90);
  ctx.stroke();
}

function drawHangmanBody() {
  // hangman head
  ctx.beginPath();
  ctx.arc(200, 125, 35, 0, Math.PI * 2, true);
  ctx.stroke();

  // Draw hangman left eye
  ctx.beginPath();
  ctx.moveTo(190, 115);
  ctx.arc(190, 115, 5, 0, Math.PI * 2, true);  // Left eye
  ctx.stroke();

  // draw hangman right eye
  ctx.beginPath();
  ctx.arc(210, 115, 5, 0, Math.PI * 2, true); // right eye
  ctx.stroke();

  // draw hangman mouth
  ctx.beginPath();  
  ctx.arc(200, 125, 20, 0, Math.PI, false);  // mouth
  ctx.stroke();

  // hangman body
  ctx.beginPath();
  ctx.moveTo(197, 160);
  ctx.lineTo(197, 250);
  ctx.stroke();

  // hangman left leg
  ctx.beginPath();
  ctx.moveTo(197, 250);
  ctx.lineTo(150, 320);
  ctx.stroke();

  // hangman right leg
  ctx.beginPath();
  ctx.moveTo(197, 250);
  ctx.lineTo(237, 320);
  ctx.stroke();

  // hangman right arm
  ctx.beginPath();
  ctx.moveTo(197, 190);
  ctx.lineTo(250, 160);
  ctx.stroke();

  // hangman left arm
  ctx.beginPath();
  ctx.moveTo(197, 190);
  ctx.lineTo(144, 165);
  ctx.stroke();
}

const drawHead = function() {
  // hangman head
  ctx.beginPath();
  ctx.arc(200, 125, 35, 0, Math.PI * 2, true);
  ctx.stroke();
}

const drawBody = function() {
  // hangman body
  ctx.beginPath();
  ctx.moveTo(197, 160);
  ctx.lineTo(197, 250);
  ctx.stroke();
}

const drawLeftLeg = function() {
  // hangman left leg
  ctx.beginPath();
  ctx.moveTo(197, 250);
  ctx.lineTo(150, 320);
  ctx.stroke();
}

const drawRightLeg = function() {
  // hangman right leg
  ctx.beginPath();
  ctx.moveTo(197, 250);
  ctx.lineTo(237, 320);
  ctx.stroke();
}

const drawLeftArm = function() {
  // hangman left arm
  ctx.beginPath();
  ctx.moveTo(197, 190);
  ctx.lineTo(144, 165);
  ctx.stroke();
}

const drawRightArm = function() {
  // hangman right arm
  ctx.beginPath();
  ctx.moveTo(197, 190);
  ctx.lineTo(250, 160);
  ctx.stroke();
}

const drawLeftEye = function() {
  ctx.beginPath();
  ctx.moveTo(190, 115);
  ctx.arc(190, 115, 5, 0, Math.PI * 2, true);  // Left eye
  ctx.stroke();
}

const drawRightEye = function() {
  ctx.beginPath();
  ctx.arc(210, 115, 5, 0, Math.PI * 2, true); // right eye
  ctx.stroke();
}

const drawMouth = function() {
  ctx.beginPath();  
  ctx.arc(200, 125, 20, 0, Math.PI, false);  // mouth
  ctx.stroke();
}

export {
  drawHangmanBody, 
  drawHangmanPost,
  drawHead,
  drawBody,
  drawLeftLeg,
  drawRightLeg,
  drawLeftArm,
  drawRightArm,
  drawLeftEye,
  drawRightEye,
  drawMouth
};