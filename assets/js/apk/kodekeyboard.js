const keyCodeSectionOpen = document.querySelector("#keyCodeSectionOpen");
const sectionKeyCode = document.querySelector("#sectionKeyCode");
const keyCodeSectionClose = document.querySelector("#keyCodeSectionClose");

keyCodeSectionOpen.addEventListener("click", function () {
  sectionKeyCode.classList.remove("hidden");
  sectionKeyCode.classList.add("flex");
});

keyCodeSectionClose.addEventListener("click", function () {
  sectionKeyCode.classList.remove("flex");
  sectionKeyCode.classList.add("hidden");
});

const box = document.querySelector(".box");
document.addEventListener("keydown", (e) => {
  let keyName = e.keyCode === 32 ? "Space" : e.key;
  box.querySelector(".key-code span").innerText = e.keyCode;
  box.querySelector(".key-name span").innerText = keyName.toUpperCase();
  box.classList.add("active");
});
