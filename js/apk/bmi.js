// BMI CALCULATOR
const inputUmurBmi = document.querySelector("#inputUmurBmi");
const inputTinggiBmi = document.querySelector("#inputTinggiBmi");
const inputBeratBmi = document.querySelector("#inputBeratBmi");
const inputJKBmiL = document.querySelector("#inputJKBmiL");
const inputJKBmiP = document.querySelector("#inputJKBmiP");
const formBmi = document.querySelector("#formBmi");
const submitHitung = document.querySelector("#submitHitung");
const errorMessage = document.querySelector("#errorMessage");
const resultBmi = document.querySelector("#resultBmi");
const numberBmi = document.querySelector("#numberBmi");

function validateform() {
  if (
    inputUmurBmi.value == "" ||
    inputTinggiBmi.value == "" ||
    inputBeratBmi.value == "" ||
    (inputJKBmiL.checked == false && inputJKBmiP.checked == false)
  ) {
    errorMessage.classList.remove("hidden");
    resultBmi.classList.add("hidden");
    numberBmi.classList.add("hidden");
    submitHitung.removeEventListener("click", countBmi);
  } else {
    errorMessage.classList.add("hidden");
    countBmi();
  }
}

function countBmi() {
  let p = [inputUmurBmi.value, inputTinggiBmi.value, inputBeratBmi.value];
  if (inputJKBmiL.checked) {
    p.push("Laki-laki");
  } else if (inputJKBmiP.checked) {
    p.push("Perempuan");
  }
  formBmi.reset();

  const bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
  let result = "";
  if (bmi < 18.5) {
    result = "Kurus 😣";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Sehat 👍";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Kegemukan 🤨";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Obesitas 😒";
  } else if (35 <= bmi) {
    result = "Sangat Obesitas 🫣";
  }
  resultBmi.classList.remove("hidden");
  resultBmi.innerText = `Anda ${result}`;
  numberBmi.classList.remove("hidden");
  numberBmi.innerText = `Nilai BMI Anda mencapai ${parseFloat(bmi).toFixed(2)}`;
  submitHitung.removeEventListener("click", countBmi);
  submitHitung.removeEventListener("click", validateform);
}

submitHitung.addEventListener("click", validateform);
submitHitung.addEventListener("click", countBmi);

const bmiSectionOpen = document.querySelector("#bmiSectionOpen");
const sectionBmi = document.querySelector("#sectionBmi");
const bmiSectionClose = document.querySelector("#bmiSectionClose");

bmiSectionOpen.addEventListener("click", function () {
  sectionBmi.classList.remove("hidden");
  sectionBmi.classList.add("flex");
});

bmiSectionClose.addEventListener("click", function () {
  sectionBmi.classList.remove("flex");
  sectionBmi.classList.add("hidden");
});
