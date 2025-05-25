Penerapan Clean Code modul 14 diambil dari TP 7 untuk TP modul 14 dan Jurnal 12 untuk Jurnal 14

TP
Penjelasan Refactoring Tugas Pendahuluan Modul 14
Refactoring dilakukan pada kode Parsing JSON yang sebelumnya ditulis di folder
TP_Parsing_2311104031. Perubahan difokuskan pada peningkatan keterbacaan dan kepatuhan
terhadap konvensi clean code JavaScript.
• Naming Convention:
o Nama class tetap menggunakan PascalCase (DataMahasiswa, KuliahMahasiswa)
o Metode seperti ReadJSON() diubah menjadi readJSON() mengikuti camelCase
o Variabel seperti namaLengkap, rawData, dan mk diubah menjadi fullName, course,
dsb.
• Whitespace & Indentation:
o Indentasi 2 spasi digunakan secara konsisten
o Spasi antar blok dan di dalam template string diperbaiki agar rapi
• Deklarasi & Struktur:
o Struktur file tetap modular
o Tidak ada variabel global
o Penggunaan const secara konsisten
• Komentar:
o Komentar penjelas ditambahkan hanya jika dibutuhkan (seperti di index.js untuk
toggle fitur)
Hasil refactoring berhasil dijalankan tanpa error, dengan output yang sama namun struktur kode jauh
lebih mudah dipahami dan maintainable.
Jurnal
Penjelasan Refactoring Jurnal Modul 14
File 1: main.js
Refactoring:
• Menambahkan komentar untuk menjelaskan fungsi createWindow, whenReady, dan windowall-closed.
• Menambahkan {} untuk blok if agar konsisten dan lebih aman.
Alasan:
• Meningkatkan keterbacaan dan maintainability.
• Penambahan komentar memudahkan pengembang lain memahami alur lifecycle Electron.
File 2: pangkat.js
Refactoring:
• Mengganti nama fungsi dari CariNilaiPangkat → calculateExponent (mengikuti English naming
convention dan camelCase).
• Menambahkan komentar JSDoc di setiap fungsi.
• Konsisten menggunakan const dan let, serta validasi batas maksimal.
Alasan:
• Mengikuti standar konvensi penamaan JavaScript modern (camelCase, bahasa Inggris).
• Komentar memudahkan pemahaman fungsi dan edge case yang ditangani (b < 0, a > 100,
overflow).
• Error code (-1, -2, -3) dibiarkan sebagai logika bisnis sesuai kebutuhan soal.
File 3: pangkat.test.js
Refactoring:
• Menyesuaikan pemanggilan fungsi ke calculateExponent.
• Menambahkan deskripsi test case yang lebih deskriptif.
• Menjaga struktur test(...) agar konsisten.
Alasan:
• Deskripsi yang baik pada test membantu debugging saat test gagal.
• Penamaan yang konsisten dengan kode utama (calculateExponent).
• Menjaga kualitas dan keterbacaan automated test.
File 4: renderer.js
Refactoring:
• Ganti nama fungsi dari handleHitung → handleCalculate.
• Tambah komentar untuk menjelaskan input parsing dan output.
• Mengekspose fungsi ke window agar bisa dipanggil dari HTML.
Alasan:
• Nama fungsi sekarang jelas menggambarkan fungsinya.
• Komentar dan struktur kode membuat alur input → proses → output mudah dipahami.
• Menyesuaikan dengan best practice DOM scripting.
File 5: package.json
Refactoring:
• Ganti "name" dan "description" agar sesuai dengan Modul 14.
• Tidak ada perubahan pada struktur script karena sudah sesuai.
Alasan:
• Menyesuaikan nama dan deskripsi dengan modul yang dikerjakan.
• Memudahkan identifikasi proyek saat deployment atau kolaborasi.
Hasil running setelah di refractor