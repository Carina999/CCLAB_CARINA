let i = 0;
i=i+2;
// alert(i);
// alert("20");
let roundButton =  document.getElementById("roundButton");
roundButton.addEventListener("click",roundButtonClick);
function roundButtonClick(){
  // elem.style.backgroundColor = 'green';
  let rectElem = document.getElementById('rect');
  rectElem.style.borderRadius = "50px";

}



function say(what){
  // alert(what)
  // fill(0);
  // ellipse(mouseX,mouseY,20,20);

// // 111find the element we want to manipulate
// let elem = document.getElementById('lyrics');
// // console.log(elem);
//
// // 222create a new element to be added
// let newElem = document.createElement('p');
//
// // 2.5change the element's content
// newElem.innerHTML = what;
//
// //3 add the new element to our lyrics
// elem.appendChild(newElem);

//
// let elem = document.getElementById('heading');
// if(what == "better"){
//   // background-color (in css)
//   elem.style.backgroundColor = "rgb(255,0,0)";
// }else if (what == "faster"){
//   elem.style.backgroundColor = 'green';
//
// }








// let rect = document.getElementById("rect")
// let rectElem =document.getElementById("rect")
//
// if(what == "better"){
//   // background-color (in css)
//   // elem.style.backgroundColor = "rgb(255,0,0)";
//   rectElem.style.borderRadius = "0px";
// }else if (what == "faster"){
//   // elem.style.backgroundColor = 'green';
//   rectElem.style.borderRadius = "50px";
// }



}

let radius = 20;

function setup() {
  createCanvas(800, 800);
  //
  //痕迹
}

function draw() {
  background(0, 10);

  let angle = radians(frameCount * 1.3); //改转速
  let X1 = radius * 1.6 * cos(angle);
  let Y1 = radius * sin(angle);
  let X2 = radius * 1.6 * cos(angle + 0.5 * PI);
  let Y2 = radius * sin(angle + 0.5 * PI);
  let X3 = radius * 1.6 * cos(angle + PI);
  let Y3 = radius * sin(angle + PI);
  let X4 = radius * 1.6 * cos(angle + 1.5 * PI);
  let Y4 = radius * sin(angle + 1.5 * PI);

  let r = map(cos(angle), -1, 1, 241, 115);
  let g = map(sin(angle), -1, 1, 211, 183);
  let b = map(cos(angle), -1, 1, 255, 230);

  push();
  translate(width / 2, height / 2);
  rotate(radians(20));
  stroke(r, g, b, 200);
  // line(0, 0, X, Y);
  fill(r, g, b);
  noStroke();
  ellipse(X1, Y1, 10);
  ellipse(X2, Y2, 10);
  ellipse(X3, Y3, 10);
  ellipse(X4, Y4, 10);
  pop();

  if (frameCount > 800) {
    radius = radius;
  } else {
    radius = radius + 0.05; //改变大的速度
  }
}
