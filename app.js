console.log("=== RUANG RONA | LATIHAN JAVASCRIPT BAB 1-15 ===");

// JS-1: Variabel, tipe data, dan operator
console.log("\n--- JS-1: Variabel, Tipe Data & Operator ---");
const namaToko = "Ruang Rona";
const tahunBerdiri = 2022;
const sedangBuka = true;
const alamat = null;
console.log("namaToko:", typeof namaToko);
console.log("tahunBerdiri:", typeof tahunBerdiri);
console.log("sedangBuka:", typeof sedangBuka);
console.log("alamat:", typeof alamat, "(typeof null memang menghasilkan object)");
const umurToko = new Date().getFullYear() - tahunBerdiri;
console.log(`Toko ${namaToko} sudah beroperasi selama ${umurToko} tahun.`);

// JS-2: Percabangan dengan switch-case
console.log("\n--- JS-2: Percabangan / Control Flow ---");
function cekStatusPesanan(statusKode) {
  switch (statusKode) {
    case 1: return "Menunggu Pembayaran";
    case 2: return "Pembayaran Dikonfirmasi";
    case 3: return "Sedang Dikemas";
    case 4: return "Sedang Dikirim";
    case 5: return "Pesanan Diterima";
    default: return "Kode Status Tidak Valid";
  }
}
[1, 3, 5, 9].forEach((kode) => console.log(`Kode ${kode}: ${cekStatusPesanan(kode)}`));

// JS-3: Looping dan perhitungan harga
console.log("\n--- JS-3: Perulangan / Looping ---");
const hargaProduk = [75000, 125000, 250000, 490000, 510000, 680000, 850000, 120000, 350000, 95000];
let totalHargaProduk = 0;
for (let indeks = 0; indeks < hargaProduk.length; indeks += 1) totalHargaProduk += hargaProduk[indeks];
console.log("Total harga:", totalHargaProduk);
console.log("Rata-rata harga:", totalHargaProduk / hargaProduk.length);
let indeksMahal = 0;
while (indeksMahal < hargaProduk.length && hargaProduk[indeksMahal] <= 500000) indeksMahal += 1;
console.log("Produk pertama di atas Rp 500.000:", { indeks: indeksMahal, harga: hargaProduk[indeksMahal] });
for (const harga of hargaProduk) if (harga < 100000) console.log("Harga di bawah Rp 100.000:", harga);

// JS-4: Array dan array method
console.log("\n--- JS-4: Array & Array Method ---");
const daftarProduk = ["Laptop", "Sepatu", "Tas", "Jam Tangan", "Headphone", "Kamera", "Keyboard", "Speaker"];
daftarProduk.push("Mouse", "Monitor");
daftarProduk.unshift("Botol Termal");
console.log("Produk yang dihapus dari akhir:", daftarProduk.pop());
console.log("Produk yang dihapus dari awal:", daftarProduk.shift());
console.log("Apakah Laptop tersedia?", daftarProduk.includes("Laptop"));
console.log("Indeks Sepatu:", daftarProduk.indexOf("Sepatu"));
console.log("Tiga produk mulai indeks ke-2:", daftarProduk.slice(2, 5));
daftarProduk.splice(3, 0, "Mouse Wireless");
console.log("Daftar produk terbaru:", daftarProduk);
console.log("Jumlah produk saat ini:", daftarProduk.length);

// JS-5: Function declaration, expression, arrow, dan kombinasi
console.log("\n--- JS-5: Function ---");
function hitungDiskon(harga, persen) { return harga - (harga * persen / 100); }
const hitungPPN = function (harga, tarifPPN = 11) { return harga + (harga * tarifPPN / 100); };
const hitungOngkir = (jarak) => jarak <= 10 ? 10000 : jarak <= 25 ? 25000 : 50000;
const kuadrat = angka => angka * angka;
const hargaAwal = 750000;
const totalBelanja = hitungPPN(hitungDiskon(hargaAwal, 10)) + hitungOngkir(8);
console.log("Harga setelah diskon 10%:", hitungDiskon(hargaAwal, 10));
console.log("Harga setelah PPN 11%:", hitungPPN(hargaAwal));
console.log("Ongkir 8 km:", hitungOngkir(8));
console.log("Kuadrat 7:", kuadrat(7));
console.log("Total belanja:", totalBelanja);

// JS-6: Object dan method
console.log("\n--- JS-6: Object & Object Method ---");
const produkUnggulan = {
  nama: "Headphone Studio", kategori: "Audio", harga: 680000, stok: 12, rating: 4.8,
  tampilkanInfo() { console.log(`${this.nama} (${this.kategori}) - Rp ${this.harga}, stok ${this.stok}`); }
};
console.log("Nama (dot notation):", produkUnggulan.nama);
const kunciHarga = "harga";
console.log("Harga (bracket notation):", produkUnggulan[kunciHarga]);
produkUnggulan.diskon = true;
delete produkUnggulan.rating;
console.log("Properti stok tersedia?", "stok" in produkUnggulan);
for (const kunci in produkUnggulan) console.log(`${kunci}:`, produkUnggulan[kunci]);
console.log("Semua key:", Object.keys(produkUnggulan));
console.log("Semua value:", Object.values(produkUnggulan));
produkUnggulan.tampilkanInfo();

// JS-7: Iterable dan non-iterable
console.log("\n--- JS-7: Iterable & Non-Iterable ---");
const warna = ["hijau", "jingga", "putih"];
for (const namaWarna of warna) console.log("Warna:", namaWarna);
const mahasiswa = { nama: "Budi Santoso", jurusan: "Informatika", semester: 3 };
for (const kunci in mahasiswa) console.log(`${kunci}: ${mahasiswa[kunci]}`);
for (const karakter of "JavaScript") console.log("Karakter:", karakter);

// JS-8: String dan number built-in
console.log("\n--- JS-8: String & Number Built-in Function ---");
const inputEmail = "  Budi.Santoso@GMAIL.COM  ";
const inputHarga = "250000.75";
const kalimat = "Selamat datang di Toko Elektronik Online";
const emailNormal = inputEmail.trim().toLowerCase();
console.log("Email normal:", emailNormal);
console.log("Mengandung @gmail?", emailNormal.includes("@gmail"));
console.log("Diawali budi?", emailNormal.startsWith("budi"));
const indeksAt = emailNormal.indexOf("@");
console.log("Domain email:", emailNormal.slice(indeksAt + 1));
console.log("Kata-kata:", kalimat.split(" "));
console.log("Kalimat baru:", kalimat.replace("Elektronik", "Digital"));
const hargaNumerik = Number.parseFloat(inputHarga);
console.log("Harga numerik:", hargaNumerik);
console.log("Harga 2 desimal:", hargaNumerik.toFixed(2));
console.log("Panjang kalimat:", kalimat.length);

// JS-9: Scope, hoisting, dan closure
console.log("\n--- JS-9: Scope, Hoisting & Closure ---");
const variabelGlobal = "Bisa diakses dari scope luar";
function demonstrasiScope() {
  const variabelLokal = "Hanya ada di dalam fungsi";
  console.log("Akses global dari fungsi:", variabelGlobal);
  console.log("Akses local dari fungsi:", variabelLokal);
  if (true) {
    let variabelBlok = "Hanya ada di dalam blok if";
    console.log("Akses block dari dalam blok:", variabelBlok);
  }
  // variabelBlok tidak bisa diakses di sini karena terikat pada block scope.
}
demonstrasiScope();
console.log("Akses global dari luar:", variabelGlobal);
console.log("Hoisting function sebelum deklarasi:", fungsiTerangkat());
function fungsiTerangkat() { return "Function declaration dapat dipanggil sebelum definisi"; }
console.log("Hoisting var sebelum deklarasi:", variabelVarTerangkat);
var variabelVarTerangkat = "Nilainya baru ditetapkan setelah deklarasi";
// Mengakses let sebelum deklarasi memicu ReferenceError karena temporal dead zone.
// Baris ini sengaja tidak dijalankan agar seluruh app.js tetap bebas error.
function buatKeranjang() {
  const items = [];
  let totalHarga = 0;
  return {
    tambahItem(nama, harga) { items.push({ nama, harga }); totalHarga += harga; },
    hapusItem(nama) {
      const indeksItem = items.findIndex((item) => item.nama === nama);
      if (indeksItem !== -1) totalHarga -= items.splice(indeksItem, 1)[0].harga;
    },
    lihatKeranjang() { console.log("Item:", [...items], "Total:", totalHarga); }
  };
}
const keranjang1 = buatKeranjang();
const keranjang2 = buatKeranjang();
keranjang1.tambahItem("Kamera Saku", 1250000);
keranjang1.tambahItem("Botol Termal", 185000);
keranjang1.hapusItem("Botol Termal");
keranjang2.tambahItem("Headphone Studio", 680000);
console.log("Keranjang 1:"); keranjang1.lihatKeranjang();
console.log("Keranjang 2 (independen):"); keranjang2.lihatKeranjang();

// JS-10: Date object
console.log("\n--- JS-10: Date Object ---");
const tanggalSekarang = new Date();
const formatHariIndonesia = new Intl.DateTimeFormat("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
console.log("Tanggal lengkap:", formatHariIndonesia.format(tanggalSekarang));
const tahunDepan = tanggalSekarang.getFullYear() + 1;
const tahunBaru = new Date(tahunDepan, 0, 1);
const hariMenujuTahunBaru = Math.ceil((tahunBaru - tanggalSekarang) / (1000 * 60 * 60 * 24));
console.log("Hari menuju Tahun Baru:", hariMenujuTahunBaru);
function formatTanggalIndonesia(date) {
  const hari = String(date.getDate()).padStart(2, "0");
  const bulan = String(date.getMonth() + 1).padStart(2, "0");
  return `${hari}/${bulan}/${date.getFullYear()}`;
}
console.log("Tanggal format DD/MM/YYYY:", formatTanggalIndonesia(tanggalSekarang));
const tanggalLahirContoh = new Date(2005, 4, 15);
const umurDalamHari = Math.floor((tanggalSekarang - tanggalLahirContoh) / (1000 * 60 * 60 * 24));
console.log("Umur dalam hari (contoh tanggal lahir 15/05/2005):", umurDalamHari);

// JS-11: Destructuring, spread, dan rest
console.log("\n--- JS-11: Destructuring, Spread & Rest ---");
const pesanan = { idPesanan: "ORD-001", pelanggan: "Budi", totalHarga: 750000, statusBayar: true, alamatKirim: "Jl. Merdeka No. 10" };
const { idPesanan, pelanggan, totalHarga: totalPesanan } = pesanan;
const { statusBayar: sudahBayar, kurirPengiriman = "JNE" } = pesanan;
function cetakPesanan({ idPesanan: id, pelanggan: namaPelanggan }) { console.log(`Pesanan ${id} atas nama ${namaPelanggan}`); }
console.log("Destructuring pesanan:", idPesanan, pelanggan, totalPesanan, sudahBayar, kurirPengiriman);
cetakPesanan(pesanan);
const koordinat = [106.8456, -6.2088, "Jakarta", "Indonesia"];
const [longitude, latitude] = koordinat;
const [, , , negara] = koordinat;
let nilaiA = "pertama";
let nilaiB = "kedua";
[nilaiA, nilaiB] = [nilaiB, nilaiA];
console.log("Koordinat:", longitude, latitude, "Negara:", negara, "Nilai ditukar:", nilaiA, nilaiB);
const salinanProduk = [...daftarProduk];
salinanProduk.push("Produk hanya di salinan");
console.log("Array asli independen:", !daftarProduk.includes("Produk hanya di salinan"));
const kategoriPertama = ["Aksesori", "Audio"];
const kategoriKedua = ["Rumah", "Elektronik"];
console.log("Gabungan array:", [...kategoriPertama, "Komputer", ...kategoriKedua]);
const produkDiperbarui = { ...produkUnggulan, harga: 620000 };
console.log("Object hasil spread:", produkDiperbarui);
console.log("Harga maksimum:", Math.max(...hargaProduk));
function hitungRataRata(...angka) { return angka.length ? angka.reduce((jumlah, nilai) => jumlah + nilai, 0) / angka.length : 0; }
function buatPesanan(namaPemesan, ...daftarMenu) { console.log(`${namaPemesan} memesan ${daftarMenu.length} menu: ${daftarMenu.join(", ")}`); }
console.log("Rata-rata 4, 6, 8:", hitungRataRata(4, 6, 8));
buatPesanan("Budi", "Kopi Susu", "Roti Bakar", "Air Mineral");

console.log("\n=== Semua demonstrasi selesai ===");