const clockSectionOpen = document.querySelector("#clockSectionOpen");
const sectionClock = document.querySelector("#sectionClock");
const clockSectionClose = document.querySelector("#clockSectionClose");

clockSectionOpen.addEventListener("click", function () {
  sectionClock.classList.remove("hidden");
  sectionClock.classList.add("flex");
});

clockSectionClose.addEventListener("click", function () {
  sectionClock.classList.remove("flex");
  sectionClock.classList.add("hidden");
});

// CLOCK
let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;
  hr.style.display = "flex";
  mn.style.display = "flex";
  sc.style.display = "flex";
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  let hours = document.getElementById("hour");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  h = h <= 9 ? "0" + h : h;
  m = m <= 9 ? "0" + m : m;
  s = s <= 9 ? "0" + s : s;
  am = h >= 12 ? "PM" : "AM";

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
  let date = document.getElementById("dd");
  let month = document.getElementById("mm");
  let year = document.getElementById("yy");
  let weekDay = document.getElementById("day");

  let dd = new Date().getDate();
  let mon = new Date().getMonth();
  let yr = new Date().getFullYear();
  const week = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];
  const mnt = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  let wkdy = week[day.getDay()];
  let mt = mnt[day.getMonth()];
  weekDay.innerHTML = `${wkdy}, `;
  date.innerHTML = dd <= 9 ? "0" + dd : dd;
  month.innerHTML = mt;
  year.innerHTML = yr;
}, 1000);
