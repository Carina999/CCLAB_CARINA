
function draw() {
  let elem = document.getElementById('check');
  if(elem.checked == false){
  console.log(elem.value);

} else if(elem.checked == true) {
  document.getElementById("start").style.visibility = "visible";
}
}
