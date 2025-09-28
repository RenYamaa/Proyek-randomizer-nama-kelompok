# 🎲 Randomizer & Scheduler CLI (Pembagi Kelompok Acak)

### Proyek ke-4 dalam Seri Pembelajaran JavaScript/Node.js CLI Saya
Program ini adalah utilitas CLI (Command Line Interface) sederhana yang berfungsi untuk membagi daftar item (nama, tugas, dll.) ke dalam kelompok-kelompok secara adil dan acak. Ideal untuk membuat jadwal piket, membagi tim, atau mengatur undian.

## 💡 Fitur Utama
1. **Input Fleksibel**: Menggunakan file JSON (dataitem.json) sebagai sumber daftar item awal.
2. **Pengacakan yang Adil**: Mengimplementasikan algoritma Fisher-Yates Shuffle untuk memastikan urutan item benar-benar acak sebelum pembagian.
3. **Logika Pembagian Rata (Remainder Logic):** Menghitung pembagian item secara merata ke setiap kelompok dan menangani sisa item (%) agar dibagikan satu per satu ke kelompok-kelompok awal.
4. **Interaksi CLI**: Mengambil input jumlah kelompok dari pengguna saat program berjalan.
5. **Output JSON**: Menyimpan hasil pembagian kelompok yang baru ke dalam file JSON.

## 🛠️ Cara Menjalankan
**Persiapan**
1. Pastikan Anda telah menginstal **Node.js**.
2. Buka terminal di direktori proyek ini.
3. Instal dependency yang dibutuhkan:
```bash
npm install readline-sync
```
4. Pastikan file **dataitem.json** sudah ada.

## Execute!!!
Jalankan program dari terminal:
```bash
node scriptrandsched.js
```
Program akan meminta Anda memasukkan jumlah kelompok yang diinginkan, lalu akan mengacak dan menampilkan hasil pembagian kelompok dalam JSON.

## 🤔 Refleksi & Proses Belajar (A Note from the Developer)

Proyek ini, yang menggabungkan pembacaan file (fs), interaksi CLI (readline-sync), dan algoritma pengacakan/pembagian, adalah yang tersulit dari empat proyek yang telah saya kerjakan sejauh ini.

Saya jujur bahwa sekitar 40% pengerjaan di sini dibantu oleh AI untuk memahami implementasi shuffle dan remainder logic yang kompleks. Ini berbeda dengan proyek-proyek saya sebelumnya yang 90% saya kerjakan sendiri.

Tapi, namanya juga belajar, pasti ada struggle gini! Proses ini mengajarkan saya pentingnya file I/O di Node.js dan bagaimana cara mengaplikasikan matematika murni ke dalam kode.

## <p align="center">**Terimakasih!!!**</p>
