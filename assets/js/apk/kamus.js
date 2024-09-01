const dictionarySectionOpen = document.querySelector("#dictionarySectionOpen");
const sectionDictionary = document.querySelector("#sectionDictionary");
const inputSectionDictionary = document.querySelector(
  "#sectionDictionary .container #input"
);
const dictionarySectionClose = document.querySelector(
  "#dictionarySectionClose"
);

dictionarySectionOpen.addEventListener("click", function () {
  sectionDictionary.classList.remove("hidden");
  sectionDictionary.classList.add("flex");
  inputSectionDictionary.focus();
});

dictionarySectionClose.addEventListener("click", function () {
  sectionDictionary.classList.remove("flex");
  sectionDictionary.classList.add("hidden");
});

// DICTIONARY

const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function fetchApi(word) {
  try {
    infoTextEl.style.display = "block";
    infoTextEl.innerHTML = `Searching for a word ${word}`;
    meaningContainer.style.display = "none";

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
      meaningContainer.classList.remove("hidden");
      meaningContainer.classList.add("flex");
      infoTextEl.style.display = "none";
      titleEl.innerText = word;
      meaningEl.innerText = "N/A";
      audioEl.style.display = "none";
      inputEl.value = "";
    } else {
      infoTextEl.style.display = "none";
      meaningContainer.style.display = "block";
      audioEl.style.display = "inline-flex";
      titleEl.innerText = result[0].word;
      meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio;
      inputEl.value = "";
    }
  } catch (error) {
    console.log(error);
    infoTextEl.innerText = "An error happened, try again later.";
  }
}

inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchApi(e.target.value);
  }
});
