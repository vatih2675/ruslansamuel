// MUSIC
const btnPlay = document.querySelector("#btn-play");
const btnPlayIcon = document.querySelector("#btn-play-icon");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const musicName = document.querySelector("#music-name");
const musicAuthor = document.querySelector("#music-author");
const playerCurrentTime = document.querySelector("#player-current-time");
const playerDuration = document.querySelector("#player-duration");
const playerProgress = document.querySelector("#player-progress");
const audioPlayer = document.querySelector("#audio-player");

let currentMusic = 0;

const musics = [
  {
    name: "Aishiteru 2",
    author: "Ruslan Samuel",
    path: "./assets/musics/Aishiteru 2.mp3",
  },
  {
    name: "Aku Tetap Cinta",
    author: "Ruslan Samuel",
    path: "./assets/musics/Aku Tetap Cinta.mp3",
  },
  {
    name: "Aku Tak Sanggup Lagi (ATSL)",
    author: "Ruslan Samuel",
    path: "./assets/musics/ATSL.mp3",
  },
  {
    name: "Biarkan Ku Melihat Surga",
    author: "Ruslan Samuel",
    path: "./assets/musics/Biarkan Ku Melihat Surga.mp3",
  },
  {
    name: "Buih Jadi Permadani",
    author: "Ruslan Samuel",
    path: "./assets/musics/Buih Jadi Permadani.mp3",
  },
  {
    name: "Bunda",
    author: "Ruslan Samuel",
    path: "./assets/musics/Bunda.mp3",
  },
  {
    name: "Cinta Tak Harus Memiliki",
    author: "Ruslan Samuel",
    path: "./assets/musics/Cinta Tah Harus Memiliki.mp3",
  },
  {
    name: "Dengarlah Bintang Hatiku",
    author: "Ruslan Samuel",
    path: "./assets/musics/Dengarlah Bintang Hatiku.mp3",
  },
  {
    name: "Egokah Aku",
    author: "Ruslan Samuel",
    path: "./assets/musics/Egokah Aku.mp3",
  },
  {
    name: "Hatiku Memilihmu",
    author: "Ruslan Samuel",
    path: "./assets/musics/Hatiku Memilihmu.mp3",
  },
  {
    name: "Jangan Pernah Kau Ragukan",
    author: "Ruslan Samuel",
    path: "./assets/musics/Jangan Pernah Kau Ragukan.mp3",
  },
  {
    name: "Kado Ulang Tahun",
    author: "Ruslan Samuel",
    path: "./assets/musics/Kado Ulang Tahun.mp3",
  },
  {
    name: "Kekasih (Bolehkah Malam Ini)",
    author: "Ruslan Samuel",
    path: "./assets/musics/Kekasih.mp3",
  },
  {
    name: "Kenangan Masa Remaja",
    author: "Ruslan Samuel",
    path: "./assets/musics/Kenangan Masa Remaja.mp3",
  },
  {
    name: "Kesalahan Yang Sama",
    author: "Ruslan Samuel",
    path: "./assets/musics/Kesalahan Yang Sama.mp3",
  },
  {
    name: "Lebih Baik Berpisah",
    author: "Ruslan Samuel",
    path: "./assets/musics/Lebih Baik Berpisah.mp3",
  },
  {
    name: "Maimunah",
    author: "Ruslan Samuel",
    path: "./assets/musics/Maimunah.mp3",
  },
  {
    name: "Malam Ini Ku Rindu",
    author: "Ruslan Samuel",
    path: "./assets/musics/Malam Ini Ku Rindu.mp3",
  },
  {
    name: "Mengapa Tak Pernah Jujur",
    author: "Ruslan Samuel",
    path: "./assets/musics/Mengapa Tak Pernah Jujur.mp3",
  },
  {
    name: "Pengorbanan",
    author: "Ruslan Samuel",
    path: "./assets/musics/Pengorbanan.mp3",
  },
  {
    name: "Penjaga Hati",
    author: "Ruslan Samuel",
    path: "./assets/musics/Penjaga Hati.mp3",
  },
  {
    name: "Po Ela Masa Tuwawu",
    author: "Ruslan Samuel",
    path: "./assets/musics/Po Ela Masa Tuwawu.mp3",
  },
  {
    name: "Rahasia Hati",
    author: "Ruslan Samuel",
    path: "./assets/musics/Rahasia Hati.mp3",
  },
  {
    name: "Satukan Hati Kami",
    author: "Ruslan Samuel",
    path: "./assets/musics/Satukan Hati Kami.mp3",
  },
  {
    name: "Sekecewa Itu",
    author: "Ruslan Samuel",
    path: "./assets/musics/Sekecewa Itu.mp3",
  },
  {
    name: "Senyum Jo Biar Saki",
    author: "Ruslan Samuel",
    path: "./assets/musics/Senyum Jo Biar Saki.mp3",
  },
  {
    name: "So Sweet",
    author: "Ruslan Samuel",
    path: "./assets/musics/So Sweet.mp3",
  },
  {
    name: "Tanggung Rindu",
    author: "Ruslan Samuel",
    path: "./assets/musics/Tanggung Rindu.mp3",
  },
  {
    name: "Untuk Apa Lagi",
    author: "Ruslan Samuel",
    path: "./assets/musics/Untuk Apa Lagi.mp3",
  },
];

btnPlay.addEventListener("click", () => togglePlayMusic());
btnPrev.addEventListener("click", () => changeMusic(false));
btnNext.addEventListener("click", () => changeMusic());
audioPlayer.addEventListener("timeupdate", () => timeUpdate());

const togglePlayMusic = () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    btnPlayIcon.classList.replace("bi-play-fill", "bi-pause-fill");
  } else {
    audioPlayer.pause();
    btnPlayIcon.classList.replace("bi-pause-fill", "bi-play-fill");
  }
};

const changeMusic = (next = true) => {
  if (next && currentMusic < musics.length - 1) {
    currentMusic++;
  } else if (!next && currentMusic > 0) {
    currentMusic--;
  } else {
    return;
  }

  updatePlayer();
  togglePlayMusic();
};

const updatePlayer = () => {
  const music = musics[currentMusic];
  musicName.innerHTML = music.name;
  musicAuthor.innerHTML = music.author;
  audioPlayer.src = music.path;

  // audioPlayer.play();
};

const timeUpdate = () => {
  const { currentTime, duration } = audioPlayer;
  if (isNaN(duration)) return;

  playerDuration.innerHTML = formatSecondsToMinutes(duration);
  playerCurrentTime.innerHTML = formatSecondsToMinutes(currentTime);
  playerProgress.max = duration;
  playerProgress.value = currentTime;
};

const formatSecondsToMinutes = (seconds) => {
  return new Date(seconds * 1000).toISOString().slice(14, 19);
};

window.onload = () => {
  updatePlayer();
};
