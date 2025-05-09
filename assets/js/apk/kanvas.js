const drawingSectionOpen = document.querySelector("#drawingSectionOpen");
const sectionDrawing = document.querySelector("#sectionDrawing");
const drawingSectionClose = document.querySelector("#drawingSectionClose");

drawingSectionOpen.addEventListener("click", function () {
  sectionDrawing.classList.remove("hidden");
  sectionDrawing.classList.add("flex");
});

drawingSectionClose.addEventListener("click", function () {
  sectionDrawing.classList.remove("flex");
  sectionDrawing.classList.add("hidden");
});

let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
// canvas.style.backgroundColor = "aliceblue";

let ctx = canvas.getContext("2d");
ctx.lineWidth = 5;

let prevX = null;
let prevY = null;

let draw = false;

let clrs = document.querySelectorAll(".clr");
clrs = Array.from(clrs);
clrs.forEach((clr) => {
  clr.addEventListener("click", () => {
    ctx.strokeStyle = clr.dataset.clr;
  });
});

// let clearBtn = document.querySelector(".clear");
// clearBtn.addEventListener("click", () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// });

let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", () => {
  let data = canvas.toDataURL("image/png");
  let a = document.createElement("a");
  a.href = data;
  a.download = "sketch.png";
  a.click();
});

window.addEventListener("mousedown", (e) => (draw = true));
window.addEventListener("mouseup", (e) => (draw = false));

window.addEventListener("mousemove", function (e) {
  if (prevX == null || prevY == null || !draw) {
    prevX = e.clientX;
    prevY = e.clientY;
    return;
  }

  let mouseX = e.clientX;
  let mouseY = e.clientY;
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(mouseX, mouseY);
  ctx.stroke();

  prevX = e.clientX;
  prevY = e.clientY;
});
