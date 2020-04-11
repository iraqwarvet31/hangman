import { 
  drawHangmanPost, 
  drawHangmanBody,
  drawHead,
  drawBody,
  drawLeftArm,
  drawRightArm,
  drawLeftLeg,
  drawRightLeg,
  drawLeftEye,
  drawRightEye,
  drawMouth
} from './canvas.js';

import { topics, hateMessages } from './categories.js';

const title = document.querySelector('h1');
const childTitle = document.querySelector('h6');
const start = document.querySelector('.start');
const restart = document.querySelector('.restart');
const divUserGuesses = document.querySelector('.user-input');
const btnInfo = document.querySelectorAll('.btn-info');
const message = document.querySelector('.message');

// Hangman post is shown when site is loaded
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 10;
drawHangmanPost();
drawHangmanBody();

// Disable buttons
btnInfo.forEach(function(currentBtn) {
  currentBtn.disabled = true;
  currentBtn.style.backgroundColor = "#106370";
  currentBtn.style.border = "none";
})


// Create empty array to store letters of the answser
// Count variable to be used to count number of guesses
let letters = [];
let drawFunctions = [
  drawHead,
  drawBody,
  drawLeftArm,
  drawRightArm,
  drawLeftLeg,
  drawRightLeg,
  drawLeftEye,
  drawRightEye,
  drawMouth
]
let guessCount = 0;

// Game starts when 'start' button is clicked
let startGame = function() {
  startRestartGame();
}

let clickedLetter = function(event) {
  // count number of occurences in letters array
  let numberOfLetters = function(arr) {
    return arr.reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
  }
  let letterCount = numberOfLetters(letters);

  // disable button
  this.disabled = true;
  this.style.backgroundColor = "#106370";
  this.style.border = "none";
  // selector for user guesses
  const userGuessBtns = document.querySelectorAll('.underscore');
  let clickedBtn = this;
  
  // if a single letter is found show letter
  if (letters.includes(this.textContent) && letterCount[this.textContent] === 1) {
    for (let i = 0; i < userGuessBtns.length; i++) {
      if (userGuessBtns[i].textContent === clickedBtn.textContent) {
        guessCount++;
        userGuessBtns[i].classList.remove('hide-letters');
        if (guessCount === letters.length) {
          message.textContent = '*** YOU WON!!!! ***'
        }
        break;
      }
    }
    // if more than one letter is found show the letters
  } else if (letters.includes(this.textContent) && letterCount[this.textContent] > 1) {
    guessCount += letterCount[this.textContent];
    for (let i = 0; i < letters.length; i++) {
      if (letterCount[letters[i]] > 1) {
        for (let i = 0; i < userGuessBtns.length; i++) {
          if (userGuessBtns[i].textContent === clickedBtn.textContent) {
            userGuessBtns[i].classList.remove('hide-letters');
            if (guessCount === letters.length) {
              console.log('*** YOU WON!!!! ***');
            }
          }
        }
        
      }
    }

  // when user clicks a letter
    // show letter and remove from array
    // otherwise show hateful message and draw head

  } else {
    for (let i = 0; i < drawFunctions.length; i++) {
      drawFunctions[i]();
      drawFunctions.shift();
      message.textContent = getRandomItem(hateMessages)

      if (drawFunctions.length === 0) {
        btnInfo.forEach(function(currentBtn) {
          message.textContent = '*** You lose!! Try again ***'
          currentBtn.disabled = true;
          currentBtn.style.backgroundColor = "#106370";
          currentBtn.style.border = "none";
        })
      }
      break;
    }
  }
}

let restartGame = function(event) {
  letters = [];
  drawFunctions = [
    drawHead,
    drawBody,
    drawLeftArm,
    drawRightArm,
    drawLeftLeg,
    drawRightLeg,
    drawLeftEye,
    drawRightEye,
    drawMouth
  ]
  this.disabled = false;
  this.style.border = "none";
  message.textContent = "";

  let userLetters = document.querySelectorAll('.underscore');
  userLetters.forEach(function(currentBtn) {
    divUserGuesses.removeChild(currentBtn);
  })
  
  startRestartGame();
}

// Event listeners
start.addEventListener('click', startGame, false);
restart.addEventListener('click', restartGame, false);

btnInfo.forEach(function(currentBtn) {
  currentBtn.addEventListener('click', clickedLetter);
});


// functions
function getRandomTopic(obj) {
  let keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)]
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function startRestartGame() {
  // Enable the guess buttons
  btnInfo.forEach(function(currentBtn) {
    currentBtn.disabled = false;
    currentBtn.style.backgroundColor = "#17a2b8";
    currentBtn.style.border = "none";
  })
  // Clear hangman person
  ctx.clearRect(140, 85, 120, 300)
  // Get random category and answer
  let topic = getRandomTopic(topics)
  let answer = getRandomItem(topics[topic]);
  // Display the category at the top of page
  title.innerHTML = 'Category: ';
  childTitle.innerHTML = `- ${topic}`;
  

  for (let i = 0; i < answer.length; i++) {
    // place all letters into letters array
    letters.push(answer[i]);
    // disable start button when clicked
    start.disabled = 'true';
    // When new game starts, show number of letters to guess
    // Make letters invisilble to user
    const underScoreItem = document.createElement('button');
    underScoreItem.textContent = `${answer[i]}`;
    underScoreItem.classList.add('hide-letters');
    divUserGuesses.appendChild(underScoreItem);
    underScoreItem.classList.add('underscore');
  }
}



// (function () {
//   var lastTime = 0;
//   var vendors = ['ms', 'moz', 'webkit', 'o'];
//   for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
//       window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
//       window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
//   }

//   if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
//       var currTime = new Date().getTime();
//       var timeToCall = Math.max(0, 16 - (currTime - lastTime));
//       var id = window.setTimeout(function () {
//           callback(currTime + timeToCall);
//       },
//       timeToCall);
//       lastTime = currTime + timeToCall;
//       return id;
//   };

//   if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
//       clearTimeout(id);
//   };
// }());


// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");
// ctx.lineCap = "round";

// // variable to hold how many frames have elapsed in the animation
// var t = 1;

// define the path to plot
// var vertices = [];
// vertices.push({
//   x: 1,
//   y: 100
// });
// vertices.push({
//   x: 100,
//   y: 400
// });

// // draw the complete line
// ctx.lineWidth = 1;
// // tell canvas you are beginning a new path
// ctx.beginPath();
// // draw the path with moveTo and multiple lineTo's
// ctx.moveTo(100, 50);
// ctx.lineTo(200, 1)
// // stroke the path
// ctx.stroke();


// // set some style
// ctx.lineWidth = 5;
// ctx.strokeStyle = "black";
// // calculate incremental points along the path
// var points = calcWaypoints(vertices);
// // extend the line from start to finish with animation
// animate(points);


// // calc waypoints traveling along vertices
// function calcWaypoints(vertices) {
//   var waypoints = [];
//   for (var i = 1; i < vertices.length; i++) {
//       var pt0 = vertices[i - 1];
//       var pt1 = vertices[i];
//       var dx = pt1.x - pt0.x;
//       var dy = pt1.y - pt0.y;
//       for (var j = 0; j < 100; j++) {
//           var x = pt0.x + dx * j / 100;
//           var y = pt0.y + dy * j / 100;
//           waypoints.push({
//               x: x,
//               y: y
//           });
//       }
//   }
//   return (waypoints);
// }


// function animate() {
//   if (t < points.length - 1) {
//       requestAnimationFrame(animate);
//   }
//   // draw a line segment from the last waypoint
//   // to the current waypoint
//   ctx.beginPath();
//   ctx.moveTo(points[t - 1].x, points[t - 1].y);
//   ctx.lineTo(points[t].x, points[t].y);
//   ctx.stroke();
//   // increment "t" to get the next waypoint
//   t++;
// }