//
//
//
// CONTOH PENGGUNAAN FUNCTION DAN IF ELSE | CONTOH PENGGUNAAN FUNCTION DAN IF ELSE | CONTOH PENGGUNAAN FUNCTION DAN IF ELSE
// CONTOH PENGGUNAAN FUNCTION DAN IF ELSE | CONTOH PENGGUNAAN FUNCTION DAN IF ELSE | CONTOH PENGGUNAAN FUNCTION DAN IF ELSE
// CONTOH PENGGUNAAN FUNCTION DAN IF ELSE | CONTOH PENGGUNAAN FUNCTION DAN IF ELSE | CONTOH PENGGUNAAN FUNCTION DAN IF ELSE
//
function cekMerek() {
  // Mendapatkan nilai yang dipilih oleh pengguna
  var merek = document.getElementById("merekMobil").value;
  var hasil = document.getElementById("hasilMerek");

  // Memeriksa merek mobil dan memberikan hasil berdasarkan pilihan pengguna
  if (merek === "Toyota") {
    hasil.textContent = "Anda memilih mobil Toyota.";
  } else if (merek === "Honda") {
    hasil.textContent = "Anda memilih mobil Honda.";
  } else if (merek === "Nissan") {
    hasil.textContent = "Anda memilih mobil Nissan.";
  } else if (merek === "Ford") {
    hasil.textContent = "Anda memilih mobil Ford.";
  } else if (merek === "Chevrolet") {
    hasil.textContent = "Anda memilih mobil Chevrolet.";
  } else {
    hasil.textContent = "Pilih salah satu merek mobil.";
  }
}
//
//
//
// CONTOH PENGGUNAAN SWITCH CASE | CONTOH PENGGUNAAN SWITCH CASE | CONTOH PENGGUNAAN SWITCH CASE | CONTOH PENGGUNAAN SWITCH CASE
// CONTOH PENGGUNAAN SWITCH CASE | CONTOH PENGGUNAAN SWITCH CASE | CONTOH PENGGUNAAN SWITCH CASE | CONTOH PENGGUNAAN SWITCH CASE
// CONTOH PENGGUNAAN SWITCH CASE | CONTOH PENGGUNAAN SWITCH CASE | CONTOH PENGGUNAAN SWITCH CASE | CONTOH PENGGUNAAN SWITCH CASE
//
// Fungsi untuk menampilkan seri mobil berdasarkan merek yang dipilih
function tampilkanSeriMobil() {
  const merekSelect = document.getElementById("merekMobil");
  const seriList = document.getElementById("seriList");
  const selectedMerek = merekSelect.value;
  let seriMobil = "";

  switch (selectedMerek) {
    case "Toyota":
      seriMobil =
        "Toyota Camry, Toyota Corolla, Toyota RAV4, Toyota Prius, Toyota Land Cruiser";
      break;
    case "Honda":
      seriMobil =
        "Honda Civic, Honda Accord, Honda CR-V, Honda HR-V, Honda Fit";
      break;
    case "Nissan":
      seriMobil =
        "Nissan Altima, Nissan Maxima, Nissan Rogue, Nissan Murano, Nissan Pathfinder";
      break;
    case "Ford":
      seriMobil =
        "Ford Mustang, Ford F-150, Ford Explorer, Ford Escape, Ford Focus";
      break;
    case "Chevrolet":
      seriMobil =
        "Chevrolet Malibu, Chevrolet Impala, Chevrolet Equinox, Chevrolet Tahoe, Chevrolet Suburban";
      break;
    default:
      seriMobil = "Pilih merek untuk melihat seri mobil.";
  }

  seriList.textContent = seriMobil;
}

// Panggil fungsi tampilkanSeriMobil saat halaman dimuat ulang
tampilkanSeriMobil();

// Tambahkan event listener untuk mengubah tampilan seri mobil saat pemilihan merek berubah
const merekSelect = document.getElementById("merekSelect");
merekSelect.addEventListener("change", tampilkanSeriMobil);
//
//
//
// CONTOH PENGGUNAAN NESTED IF | CONTOH PENGGUNAAN NESTED IF |  CONTOH PENGGUNAAN NESTED IF | CONTOH PENGGUNAAN NESTED IF
// CONTOH PENGGUNAAN NESTED IF | CONTOH PENGGUNAAN NESTED IF |  CONTOH PENGGUNAAN NESTED IF | CONTOH PENGGUNAAN NESTED IF
// CONTOH PENGGUNAAN NESTED IF | CONTOH PENGGUNAAN NESTED IF |  CONTOH PENGGUNAAN NESTED IF | CONTOH PENGGUNAAN NESTED IF
//
function tampilkanMerekMobil() {
  const danaInput = document.getElementById("danaInput");
  const hasilMerek = document.getElementById("hasilPencarian");
  const loopMerekMobilDoWhile = document.getElementById(
    "loopMerekMobilDoWhile"
  );
  const loopMerekMobilWhile = document.getElementById("loopMerekMobilWhile");
  const dana = parseFloat(danaInput.value);

  if (isNaN(dana)) {
    hasilMerek.textContent = "Silakan masukkan jumlah dana yang valid.";
  } else {
    const merekMobil = [];

    if (dana >= 500) {
      merekMobil.push("Toyota", "Honda", "Nissan", "Ford", "Chevrolet");
    } else if (dana >= 300) {
      merekMobil.push("Toyota", "Honda", "Nissan");
    } else if (dana >= 200) {
      merekMobil.push("Toyota", "Honda");
    }

    if (merekMobil.length > 0) {
      hasilMerek.textContent =
        "Anda dapat membeli mobil merek " + merekMobil.join(", ") + ".";
      //
      //
      // CONTOH PENGGUNAAN DO WHILE | CONTOH PENGGUNAAN DO WHILE | CONTOH PENGGUNAAN DO WHILE | CONTOH PENGGUNAAN DO WHILE | CONTOH PENGGUNAAN DO WHILE |
      // CONTOH PENGGUNAAN DO WHILE | CONTOH PENGGUNAAN DO WHILE | CONTOH PENGGUNAAN DO WHILE | CONTOH PENGGUNAAN DO WHILE | CONTOH PENGGUNAAN DO WHILE |
      // CONTOH PENGGUNAAN DO WHILE | CONTOH PENGGUNAAN DO WHILE | CONTOH PENGGUNAAN DO WHILE | CONTOH PENGGUNAAN DO WHILE | CONTOH PENGGUNAAN DO WHILE |
      //
      // Tampilkan pilihan merek mobil menggunakan do while
      let i = 0;
      loopMerekMobilDoWhile.innerHTML = ""; // Reset isi ul

      do {
        const li = document.createElement("li");
        li.textContent = merekMobil[i];
        loopMerekMobilDoWhile.appendChild(li);
        i++;
      } while (i < merekMobil.length);
      //
      //
      //  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |
      //  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |
      //  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |  CONTOH PENGGUNAAN WHILE |
      //
      // Tampilkan pilihan merek mobil menggunakan while
      i = 0;
      loopMerekMobilWhile.innerHTML = ""; // Reset isi ul

      while (i < merekMobil.length) {
        const li = document.createElement("li");
        li.textContent = merekMobil[i];
        loopMerekMobilWhile.appendChild(li);
        i++;
      }
    } else {
      hasilMerek.textContent =
        "Maaf, dana yang Anda miliki tidak cukup untuk membeli mobil baru.";
      loopMerekMobilDoWhile.innerHTML = ""; // Reset isi ul
      loopMerekMobilWhile.innerHTML = ""; // Reset isi ul
    }
  }
}
//
//
//
// CONTOH PENGGUNAAN FOR STATEMENT | CONTOH PENGGUNAAN FOR STATEMENT | CONTOH PENGGUNAAN FOR STATEMENT | CONTOH PENGGUNAAN FOR STATEMENT | CONTOH PENGGUNAAN FOR STATEMENT |
// CONTOH PENGGUNAAN FOR STATEMENT | CONTOH PENGGUNAAN FOR STATEMENT | CONTOH PENGGUNAAN FOR STATEMENT | CONTOH PENGGUNAAN FOR STATEMENT | CONTOH PENGGUNAAN FOR STATEMENT |
// CONTOH PENGGUNAAN FOR STATEMENT | CONTOH PENGGUNAAN FOR STATEMENT | CONTOH PENGGUNAAN FOR STATEMENT | CONTOH PENGGUNAAN FOR STATEMENT | CONTOH PENGGUNAAN FOR STATEMENT |
//
function hitungDiskon() {
  const hargaInput = document.getElementById("hargaInput");
  const hasilDiskon = document.getElementById("hasilDiskon");
  const hargaMobil = parseFloat(hargaInput.value);

  if (isNaN(hargaMobil)) {
    hasilDiskon.textContent = "Silakan masukkan harga mobil yang valid.";
  } else {
    let diskon = 0;

    // Simulasikan diskon berdasarkan hari tertentu
    const hariIni = new Date().getDay(); // Mendapatkan hari saat ini (0: Minggu, 1: Senin, dst.)
    const hariPromosi = 5; // Misalnya, hari promosi adalah Jumat (5)

    // Penerapan pernyataan for untuk menghitung diskon sebanyak 5 kali
    for (let i = 0; i < 5; i++) {
      if (hariIni === hariPromosi) {
        // Diskon 10% untuk hari promosi (misalnya, jumat berkah)
        diskon += 0.1;
      }
    }

    const totalHarga = hargaMobil * (1 - diskon); // Harga setelah diskon
    hasilDiskon.textContent = `Harga setelah diskon: Rp. ${totalHarga.toFixed(
      6
    )}`;
  }
}
