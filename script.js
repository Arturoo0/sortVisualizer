
var randomButton = document.querySelector("#randomize");
var solveButton = document.querySelector("#solve")
var canvas = document.querySelector("canvas")
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var SOLVE_STATE = false;
var currentList;

let animQueue = new animationQueue();

randomButton.onclick = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  currentList = genList(10);
  drawList(currentList);
  SOLVE_STATE = false;
}

solveButton.onclick = () => {
  if (SOLVE_STATE == false){
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawList(bubbleSort(currentList));
    SOLVE_STATE = true;
  }
}
