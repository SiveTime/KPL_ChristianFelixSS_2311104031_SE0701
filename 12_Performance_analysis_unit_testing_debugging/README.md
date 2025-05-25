TP modul 12
Pembuatan GUI
 
Pada tahap ini, dibuat sebuah aplikasi desktop GUI sederhana menggunakan Electron.js yang dijalankan di lingkungan Node.js melalui Visual Studio Code. Antarmuka pengguna (GUI) terdiri dari satu buah textbox untuk input angka, satu button untuk mengeksekusi perintah, dan satu label untuk menampilkan hasil. GUI ini dirancang melalui file index.html, dan interaksinya dikendalikan oleh JavaScript dalam renderer.js. Saat pengguna mengisi angka dan menekan tombol, maka fungsi CariTandaBilangan akan dipanggil untuk menentukan apakah nilai tersebut "Negatif", "Nol", atau "Positif", kemudian hasilnya ditampilkan di label secara dinamis.
Testing saat idle appnya
 
Setelah aplikasi dijalankan menggunakan perintah npm start, dilakukan pengamatan melalui Task Manager untuk melihat penggunaan resource sistem saat aplikasi dalam keadaan idle (tidak ada input yang diberikan). Pada kondisi ini, penggunaan CPU dan GPU tercatat stabil di angka 0,0%, menandakan bahwa aplikasi bekerja secara efisien dan tidak membebani sistem secara signifikan saat tidak digunakan secara aktif.
 
Saat diberikan inputan
 
Selanjutnya dilakukan pengujian ketika pengguna memberikan input angka melalui textbox dan menekan tombol. Pada saat input dimasukkan dan tombol diklik, sistem menunjukkan sedikit peningkatan aktivitas, yaitu CPU usage meningkat menjadi 0,3% dan GPU usage menjadi 0,6%. Ini merupakan respon yang wajar dan sangat ringan, menunjukkan bahwa pemrosesan logika CariTandaBilangan bekerja dengan optimal dan tidak menimbulkan beban berat terhadap sistem.
Hasil dari NPM test
 
Untuk memastikan keakuratan fungsi CariTandaBilangan, dilakukan pengujian unit menggunakan framework Jest. Unit test ini mencakup tiga skenario penting: input bilangan negatif, nol, dan positif. Hasil eksekusi npm test menunjukkan bahwa seluruh test lulus dengan sukses: (seperti gambar diatas)
Ini menandakan bahwa fungsi berjalan sesuai dengan harapan dan telah menangani seluruh percabangan logika dengan baik.
 
Jurnal modul 12
Tampilan dan pembuatan UI
 
Aplikasi ini dibuat menggunakan framework Electron.js agar dapat menjalankan antarmuka grafis (GUI) berbasis HTML dan JavaScript dalam bentuk aplikasi desktop. GUI dirancang melalui file index.html yang berisi dua buah textbox untuk input angka a dan b, satu button untuk men-trigger fungsi perhitungan, dan satu label untuk menampilkan hasil. Logika dari interaksi antarmuka ini diatur oleh renderer.js, yang akan memanggil fungsi CariNilaiPangkat(a, b) saat tombol ditekan, lalu hasil perhitungan ditampilkan ke layar.
Penjelasan Kode: Fungsi CariNilaiPangkat(a, b)
Fungsi CariNilaiPangkat(a, b) dibuat dalam file pangkat.js dan dirancang untuk menghitung pangkat a^b menggunakan iterasi manual tanpa menggunakan fungsi bawaan seperti Math.pow(). Fungsi ini dilengkapi dengan aturan validasi logika sebagai berikut:
•	Jika b = 0, maka hasil selalu 1 (aturan identitas pangkat).
•	Jika b < 0, maka return -1.
•	Jika b > 10 atau a > 100, maka return -2.
•	Jika hasil pangkat melebihi batas Number.MAX_SAFE_INTEGER, maka dianggap overflow dan return -3.
Perhitungan iteratif dilakukan dengan pengulangan sebanyak b kali, dan setiap langkah dikalikan dengan a. Untuk menangani overflow, digunakan try-catch dengan pengecekan batas aman bilangan menggunakan fungsi checkedMultiply.

 
Kondisi Idle
 
Pengamatan penggunaan sumber daya aplikasi dilakukan menggunakan Task Manager, dengan dua kondisi:
CPU usage: 0.0%
GPU usage: 0.0%
Menunjukkan bahwa aplikasi sangat ringan dan tidak membebani sistem saat idle.
Kondisi proses data
 
CPU usage: 0.2%
GPU usage: 0.1%
Analisis Penyebab Kenaikan CPU & GPU Saat Input
Pada saat aplikasi dalam keadaan idle, Electron hanya merender HTML statis tanpa melakukan proses logika atau manipulasi DOM. Oleh karena itu, konsumsi CPU dan GPU berada di 0.0% — aplikasi hanya menjaga jendela tetap terbuka, tanpa aktivitas komputasi berarti.
Namun, saat pengguna memberikan input angka (misalnya a = 3, b = 19) dan menekan tombol, aplikasi langsung menjalankan fungsi CariNilaiPangkat(a, b), yang bekerja dengan cara melakukan iterasi sebanyak b kali. Dalam contoh tersebut, fungsi melakukan 19 kali perkalian berurutan dan pengecekan overflow setiap langkahnya. Proses ini menyebabkan:
 
Hasil run npm test
Pengujian dilakukan menggunakan framework Jest, dan ditulis dalam file pangkat.test.js. Unit test mencakup seluruh cabang logika (branch coverage), yaitu:
•	Kondisi b = 0 → return 1
•	Kondisi b < 0 → return -1
•	Kondisi b > 10 dan a > 100 → return -2
•	Kondisi overflow → return -3
•	Kasus normal → return hasil pangkat yang benar
Seluruh pengujian lulus dengan sukses, menandakan bahwa fungsi telah diimplementasikan dengan benar dan mencakup semua skenario yang dibutuhkan.
