// My Profil
const namaLengkap = "Ruslan Samuel";
const namaAlias = "(Ibo)";
const iconWeb = "icon.png";
const fotoProfil = "ruslan.jpg";
const tempatLahir = "Gorontalo";
const tanggalLahir = "13 Desember 1993";
const statusNikah = "Menikah";
const agama = "Islam";
const alamat = "Sipatana, Gorontalo";
const alamatLengkap = "Jln. Membramo, Kel. Bulotadaa Timur, Kec. Sipatana, Kota Gorontalo, Gorontalo 96121";
const maps =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6156588739714!2d123.06270437310216!3d0.577495363575422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32792db0769ecb1d%3A0xa1e212e89e0da104!2sMakaleka%20Shop!5e0!3m2!1sid!2sid!4v1724354494714!5m2!1sid!2sid";
const jenisKelamin = "Laki-laki";
const nomorTelepon = "895708460123";
const alamatEmail = "ruslansamuel11@gmail.com";
const website = "vatih2675.github.io/ruslansamuel";
const tentangSaya =
  "Perkenalkan Saya Ruslan Dara Samuel, biasa dipanggil Ulan. Saya adalah lulusan SMA Jurusan IPA. Begitu lulus SMA Saya langsung memulai petualangan kerja untuk belajar dan menambah keahlian-keahlian baru diberbagai bidang, terutama admiistrasi. Selain bekerja, Saya terus mengikuti pelatihan-pelatihan baik yang diselenggarakan oleh pemerintah maupun swasta.";

// Data Dinamis
// let elIconWeb = document.querySelector("link[rel=icon]");
let elFotoProfil = document.querySelectorAll('.fotoProfil');
let elNamaLengkap = document.querySelectorAll('.namaLengkap');
let elNamaAlias = document.querySelectorAll('.namaAlias');
let elTempatLahir = document.querySelectorAll('.tempatLahir');
let elTanggalLahir = document.querySelectorAll('.tanggalLahir');
let elUmur = document.querySelectorAll('.umur');
let elStatusNikah = document.querySelectorAll('.statusNikah');
let elAgama = document.querySelectorAll('.agama');
let elAlamat = document.querySelectorAll('.alamat');
let elAlamatLengkap = document.querySelectorAll('.alamatLengkap');
let elMaps = document.querySelectorAll('.maps');
let elJenisKelamin = document.querySelectorAll('.jenisKelamin');
let elNomorTelepon = document.querySelectorAll('.nomorTelepon');
let elAlamatEmail = document.querySelectorAll('.alamatEmail');
let elWebsite = document.querySelectorAll('.website');
let elTentangSaya = document.querySelectorAll('.tentangSaya');

// console.log(elIconWeb);
// elIconWeb.setAttribute("href", "assets/images/avatar/" + iconWeb);
elFotoProfil.forEach((ftpf) => {
  ftpf.setAttribute("src", `assets/images/avatar/${fotoProfil}`);
});
elNamaLengkap.forEach((nmlk) => {
    nmlk.innerText = namaLengkap;
});
elNamaAlias.forEach((nmal) => {
    nmal.innerText = namaAlias;
});
elTempatLahir.forEach((tmlh) => {
  tmlh.innerText = tempatLahir;
});
elTanggalLahir.forEach((tglh) => {
  tglh.innerText = tanggalLahir;
});
elStatusNikah.forEach((stnk) => {
  stnk.innerText = statusNikah;
});
elAgama.forEach((agm) => {
  agm.innerText = agama;
});
elAlamat.forEach((almt) => {
  almt.innerText = alamat;
});
elAlamatLengkap.forEach((allk) => {
  allk.innerText = alamatLengkap;
});
elMaps.forEach((map) => {
  map.setAttribute("src", maps);
});
elJenisKelamin.forEach((jnkl) => {
  jnkl.innerText = jenisKelamin;
});
elNomorTelepon.forEach((nmtl) => {
  nmtl.innerText = `+62${nomorTelepon}`;
});
elAlamatEmail.forEach((alem) => {
  alem.innerText = alamatEmail;
});
elWebsite.forEach((web) => {
  web.innerText = website;
});
elTentangSaya.forEach((tgsy) => {
  tgsy.innerText = tentangSaya;
});

// Pengumuman
const cardPengumuman = document.querySelector("#cardPengumuman");
let listPengumuman = '';
const pengumuman = [
  {
    isi: "Submit pendaftaran SSCASN 2024",
    tanggal: "27/08/2024"
  },
];
pengumuman.forEach((pgmn) => {
  listPengumuman += `<li>
                      <a href="#" class="list-group-item list-group-item-action rounded flex justify-between align-items-center border-0 mb-1 p-2">
                        <p class="small m-0">${pgmn.isi}</p>
                        <small class="text-xs text-gray-400 font-light m-0">${pgmn.tanggal}</small>
                      </a>
                    </li>`;
});
cardPengumuman.innerHTML = listPengumuman;

// Hobi
const cardHobi = document.querySelector('#cardHobi');
let isiHobi = '';
const hobi = [
    {
        hobi: "Membaca",
        icon: "book",
    },
    {
        hobi: "Musik",
        icon: "music-note-beamed",
    },
    {
        hobi: "Menyanyi",
        icon: "mic",
    },
    {
        hobi: "Coding",
        icon: "code-slash",
    },
];
hobi.forEach((hb) => {
    isiHobi += `<div class="d-flex align-items-center justify-content-center flex-column p-2 hover:text-blue-500 hover:scale-110 cursor-default duration-300">
                    <i class="bi bi-${hb.icon} fa-fw fs-2"></i>
                    <span class="mb-0">${hb.hobi}</span>
                </div>`;
});
cardHobi.innerHTML = isiHobi;

// Skill
const cardSkill = document.querySelector('#cardSkill');
let isiSkill = '';
const skill = [
  {
    skill: "MS Office",
    icon: "windows",
  },
  {
    skill: "Marketing",
    icon: "bookmark-star",
  },
  {
    skill: "Akuntansi",
    icon: "journal-bookmark",
  },
  {
    skill: "Collection",
    icon: "cash-coin",
  },
  {
    skill: "HTML",
    icon: "filetype-html",
  },
  {
    skill: "CSS",
    icon: "filetype-css",
  },
  {
    skill: "JavaScript",
    icon: "filetype-js",
  },
  {
    skill: "PHP",
    icon: "filetype-php",
  },
  {
    skill: "MySQL",
    icon: "filetype-sql",
  },
  {
    skill: "Desain Grafis",
    icon: "brush",
  },
  {
    skill: "Audio Production",
    icon: "soundwave",
  },
  {
    skill: "Video Production",
    icon: "film",
  },
];
skill.forEach((skl) => {
    isiSkill += `<div class="d-flex align-items-center justify-content-center flex-column p-2 hover:text-blue-500 hover:scale-110 cursor-default duration-300">
                    <i class="bi bi-${skl.icon} fa-fw fs-2"></i>
                    <span class="mb-0">${skl.skill}</span>
                </div>`;
});
cardSkill.innerHTML = isiSkill;

// Pendidikan
const cardPendidikanFormal = document.querySelector('#cardPendidikanFormal');
const cardPendidikanNonFormal = document.querySelector('#cardPendidikanNonFormal');
let isiPendidikanFormal = '';
let isiPendidikanNonFormal = '';
const pendidikanFormal = [
  {
    sekolah: "SMA Negeri 1 Kabila",
    jurusan: "IPA",
    tahunLulus: "2008 - 2011",
    kotakab: "Kab. Bone Bolango, Gorontalo",
    foto: "smanegeri1kabila.jpg",
  },
  {
    sekolah: "SMP Negeri 1 Suwawa",
    jurusan: null,
    tahunLulus: "2005 - 2008",
    kotakab: "Kab. Bone Bolango, Gorontalo",
    foto: "smpnegeri1suwawa.jpg",
  },
  {
    sekolah: "SD Negeri 2 Boludawa",
    jurusan: null,
    tahunLulus: "2000 - 2005",
    kotakab: "Kab. Bone Bolango, Gorontalo",
    foto: "sdn2suwawa.jpg",
  },
];
const pendidikanNonFormal = [
  {
    pendidikan: "Seleksi Kompetensi Dasar CPNS 2024",
    lulus: "Oktober 2024",
    pelaksana: "BKN RI",
    foto: "bknri.jpg",
    sertifikat: "Seleksi Kompetensi Dasar CPNS 2024.jpg",
  },
  {
    pendidikan: "Seleksi Kompetensi Dasar CPNS 2021",
    lulus: "September 2021",
    pelaksana: "BKN RI",
    foto: "bknri.jpg",
    sertifikat: "Seleksi Kompetensi Dasar CPNS 2021.jpg",
  },
  {
    pendidikan: "Kuasai Tekhnik Produksi Audio Digital untuk Pemula",
    lulus: "Mei 2021",
    pelaksana: "Skill Academy By Ruang Guru",
    foto: "skillacademy.jpg",
    sertifikat: "Kuasai Tekhnik Produksi Audio Digital untuk Pemula.jpg",
  },
  {
    pendidikan: "Data Statistika dan Data Science",
    lulus: "April 2021",
    pelaksana: "Skill Academy By Ruang Guru",
    foto: "skillacademy.jpg",
    sertifikat: "Data Statistika dan Data Science.jpg",
  },
  {
    pendidikan: "SEO 101 : Cara Membuat Website Eksis di Halaman Depan Google",
    lulus: "April 2021",
    pelaksana: "Skill Academy By Ruang Guru",
    foto: "skillacademy.jpg",
    sertifikat:
      "SEO 101 Cara Membuat Website Eksis di Halaman Depan Google.jpg",
  },
  {
    pendidikan: "Pelatihan Komputer dan Internet",
    lulus: "2021",
    pelaksana: "Universitas Negeri Gorontalo",
    foto: "ung.jpg",
    sertifikat: "Pelatihan Komputer dan Internet.png",
  },
];
pendidikanFormal.forEach((pdfm) => {
    isiPendidikanFormal += `<div class="d-sm-flex align-items-center mb-3">
                                <div class="avatar avatar-xl">
                                    <a href="#"><img class="avatar-img rounded border border-white border-3" src="assets/images/bg/${pdfm.foto}" alt="${pdfm.sekolah}"></a>
                                </div>
                                <div class="ms-sm-4 mt-2 mt-sm-0">
                                    <h5 class="mb-1 text-xl fw-bold"><a href="#">${pdfm.sekolah}</a></h5>
                                    <ul class="nav nav-stack small">
                                        <li class="nav-item cursor-default ${pdfm.jurusan == null ? `d-none` : ``}">
                                            <i class="bi bi-bookmark-star pe-1"></i>Jurusan ${pdfm.jurusan}
                                        </li>
                                        <li class="nav-item cursor-default">
                                            <i class="bi bi-geo-alt pe-1"></i>${pdfm.kotakab} 
                                        </li>
                                        <li class="nav-item cursor-default">
                                            <i class="bi bi-calendar-check pe-1"></i>${pdfm.tahunLulus}
                                        </li>
                                    </ul>
                                </div>
                            </div>`;
});
pendidikanNonFormal.forEach((pdnfm) => {
    isiPendidikanNonFormal += `<div class="d-sm-flex align-items-center mb-3">
                                <div class="avatar avatar-xl">
                                    <a href="assets/images/sertifikat/${pdnfm.sertifikat}" target="_blank"><img class="avatar-img rounded border border-white border-3" src="assets/images/bg/${pdnfm.foto}" alt="${pdnfm.pendidikan}"></a>
                                </div>
                                <div class="ms-sm-4 mt-2 mt-sm-0">
                                    <h5 class="mb-1 text-xl fw-bold"><a href="assets/images/sertifikat/${pdnfm.sertifikat}" target="_blank">${pdnfm.pendidikan}</a></h5>
                                    <ul class="nav nav-stack small">
                                        <li class="nav-item cursor-default">
                                            <i class="bi bi-buildings pe-1"></i>${pdnfm.pelaksana} 
                                        </li>
                                        <li class="nav-item cursor-default">
                                            <i class="bi bi-calendar-check pe-1"></i>${pdnfm.lulus}
                                        </li>
                                    </ul>
                                </div>
                            </div>`;
});
cardPendidikanFormal.innerHTML = isiPendidikanFormal;
cardPendidikanNonFormal.innerHTML = isiPendidikanNonFormal;

// Pengalaman Kerja
const cardPengalaman = document.querySelector('#cardPengalaman');
let isiPengalaman = '';
const pengalaman = [
  {
    jabatan: "Field Collection",
    instansi: "PT. SMS Finance Cab. Gorontalo",
    periode: "Juli - Oktober 2023",
    foto: "smsfinance.png",
  },
  {
    jabatan: "Field Assets Management & Account Verificator",
    instansi: "PT. BFI Finance Indonesia Tbk. Cabang Gorontalo",
    periode: "Februari - Agustus 2023",
    foto: "bfifinance.jpg",
  },
  {
    jabatan: "Staf Program & Admin Server LPSE",
    instansi: "Biro Pengadaan Setda Provinsi Gorontalo",
    periode: "Januari 2018 - Februari 2021",
    foto: "biropengadaan.jpg",
  },
  {
    jabatan: "Staf Entri EMONEV & Pembantu Bendahara Pengeluaran",
    instansi: "Biro PP & Kesra Setda Provinsi Gorontalo",
    periode: "Januari 2014 - Desember 2017",
    foto: "gorontalo.png",
  },
  {
    jabatan: "Mantri Penagihan",
    instansi: "Koperasi Simpan Pinjam 'Karya Bersama'",
    periode: "Maret - September 2013",
    foto: "koperasi.png",
  },
  {
    jabatan: "Operator",
    instansi: "Fotocopy 'PURNAMA'",
    periode: "Maret - Agustus 2012",
    foto: "purnama.jpg",
  },
];
pengalaman.forEach((pnkr) => {
    isiPengalaman += `<div class="d-sm-flex align-items-center mb-3">
                          <div class="avatar avatar-xl">
                              <a href="#"><img class="avatar-img rounded border border-white border-3" src="assets/images/bg/${pnkr.foto}" alt="${pnkr.jabatan}"></a>
                          </div>
                          <div class="ms-sm-4 mt-2 mt-sm-0">
                              <h5 class="mb-1 text-xl fw-bold"><a href="#">${pnkr.jabatan}</a></h5>
                              <ul class="nav nav-stack small">
                                  <li class="nav-item cursor-default">
                                      <i class="bi bi-buildings pe-1"></i>${pnkr.instansi} 
                                  </li>
                                  <li class="nav-item cursor-default">
                                      <i class="bi bi-calendar-check pe-1"></i>${pnkr.periode}
                                  </li>
                              </ul>
                          </div>
                      </div>`;
});
cardPengalaman.innerHTML = isiPengalaman;

// Galeri
const cardGaleri = document.querySelector('#cardGaleri');
let isiGaleri = '';
const galeri = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
];
galeri.forEach((glri) => {
    isiGaleri += `<div class="col-4 hover:scale-105 duration-300">
                    <a href="assets/images/albums/${glri}" target="_blank" data-gallery="image-popup" data-glightbox="">
                      <img class="rounded img-fluid" src="assets/images/albums/${glri}" alt="">
                    </a>
                  </div>`;
});
cardGaleri.innerHTML = isiGaleri;

// Aplikasi
const cardAplikasi = document.querySelector('#cardAplikasi');
let isiAplikasi = '';
const aplikasi = [
  // {
  //   judul: "Bintang Muda Indonusa",
  //   link: "https://bintangmudaindonusa.github.io",
  //   foto: "bintangmudaindonusa.png",
  //   target: "target='_blank'"
  // },
  {
    judul: "Kalkulator BMI",
    link: "bmiSectionOpen",
  },
  {
    judul: "Kalkulator",
    link: "calculatorSectionOpen",
  },
  {
    judul: "Waktu",
    link: "clockSectionOpen",
  },
  {
    judul: "Waktu Mundur",
    link: "countdownSectionOpen",
  },
  {
    judul: "Kamus Bahasa Inggris",
    link: "dictionarySectionOpen",
  },
  {
    judul: "Kanvas Gambar",
    link: "drawingSectionOpen",
  },
  {
    judul: "Kode Kunci Keyboard",
    link: "keyCodeSectionOpen",
  },
  {
    judul: "Daftar Rencana",
    link: "todolistSectionOpen",
  },
  // {
  //   judul: "Pemutar Musik",
  //   link: "openMusik",
  // },
  // {
  //   judul: "Password Generator",
  //   link: "openPasswordGenerator",
  // },
  // {
  //   judul: "QR Generator",
  //   link: "openQRGenerator",
  // },
  // {
  //   judul: "Teks Ke Suara",
  //   link: "openTeksSuara",
  // },
  // {
  //   judul: "Cuaca",
  //   link: "openCuaca",
  // },
];
aplikasi.forEach((aplk) => {
    // isiAplikasi += `<div class="col-6 d-flex flex-column justify-items-center align-items-center">
    //                   <div class="rounded ring-0 hover:ring-1 hover:ring-blue-500 duration-300 w-32 mb-2">
    //                     <a href="${aplk.link}" ${aplk.target}><img class="avatar-img rounded-circle" src="assets/images/apk/${aplk.foto}" alt=""></a>
    //                   </div>
    //                   <h6 class="text-center"><a href="${aplk.link}" ${aplk.target} class="hover:text-blue-500">${aplk.judul}</a></h6>
    //                 </div>`;
    isiAplikasi += `<div class="w-1/2 text-center p-3 rounded ring-0 hover:ring-1 hover:ring-blue-500 hover:text-blue-500 hover:font-bold duration-150 cursor-pointer" id="${aplk.link}">${aplk.judul}</div>`;
});
cardAplikasi.innerHTML = isiAplikasi;

// Waktu
let spanTanggalHariIni = document.querySelectorAll(".tanggalHariIni");
let spanJamBerjalan = document.querySelectorAll(".jamBerjalan");
setInterval(() => {
  let waktu = new Date();
  let hr = waktu.getDay();
  const namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];
  let hari = namaHari[hr];
  let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
  let bln = waktu.getMonth();
  const namaBulan = [
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
  let bulan = namaBulan[bln];
  let thn = waktu.getFullYear();
  let jam = waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours();
  let menit =
    waktu.getMinutes() < 10 ? "0" + waktu.getMinutes() : waktu.getMinutes();
  let detik =
    waktu.getSeconds() < 10 ? "0" + waktu.getSeconds() : waktu.getSeconds();
  spanTanggalHariIni.forEach((dt) => {
    dt.innerHTML = `${hari}, ${tgl} ${bulan} ${thn}`;
  });
  spanJamBerjalan.forEach((clk) => {
    clk.innerHTML = `${jam} : ${menit} : ${detik} WITA`;
  });

  // console.log(waktu);
}, 1000);

// Define a function called diff_years that calculates the difference in years between two given dates (dt2 and dt1)
function diff_years(dt2, dt1) 
{
  // Calculate the difference in milliseconds between the two dates
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  // Convert the difference from milliseconds to days
  diff /= (60 * 60 * 24);
  // Calculate the approximate number of years by dividing the difference in days by the average number of days in a year (365.25)
  return Math.abs(Math.round(diff / 365.25));
}

// Create two Date objects representing different dates
dt1 = new Date(1993, 12, 13); // 13 Desember 1993
dt2 = new Date(); // Waktu Sekarang
// Output the difference in years between the two dates
let umur = diff_years(dt1, dt2);
elUmur.forEach((um) => {
  um.innerText = umur + " Tahun";
});
