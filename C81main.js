canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
Color = "red";
 Widthofliney = 1;
var mouseevent = "empty";
var lpy,lpx;

  canvas.addEventListener("mousedown",mymousedown);
  function mymousedown(e) {
  Color = document.getElementById("Color").value;
  Widthofliney = document.getElementById("Widthyofliney").value;
  mouseevent = "mouseDown";
  }
  canvas.addEventListener("mouseup",mymouseup);
  function mymouseup(e) {
  
  mouseevent = "mouseup";
  }
  canvas.addEventListener("mouseleave",mymouseleave);
  function mymouseleave(e) {
  
  mouseevent = "mouseleave";
  }
  canvas.addEventListener("mousemove",mymousemove);
  function mymousemove(e) {
  
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;
    if(mouseevent=="mouseDown" ){
      ctx.beginPath();
      ctx.strokeStyle = Color;
      ctx.lineWidth = Widthofliney;
      console.log("lpx="+ lpx +"lpy="+ lpy);
      ctx.moveTo(lpx,lpy);
      console.log("cpx="+ cpx +"cpy="+ cpy); 
      ctx.lineTo(cpx,cpy);
      ctx.stroke();
    }
    lpx = cpx;
    lpy = cpy;
  }


  
function cleararea() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
}
