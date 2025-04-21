KPL 

Tugas Pendahuluan
Kode di tugas pendahuluan merupakan sebuah program Node.js yang berfungsi sebagai sistem pengecekan kesehatan berbasis suhu tubuh dan riwayat demam. Program ini mengandalkan konfigurasi dari file JSON (covid_config.json) yang dapat disesuaikan oleh pengguna, khususnya terkait satuan suhu (celcius atau fahrenheit), batas hari demam, serta pesan yang ditampilkan jika pengguna diterima atau ditolak masuk ke gedung.

Program dimulai dengan class CovidConfig yang menangani pembacaan dan penulisan konfigurasi. Saat objek CovidConfig dibuat, program memeriksa apakah file konfigurasi (covid_config.json) sudah ada. Jika tidak, file tersebut akan dibuat secara otomatis dengan nilai default. Metode UbahSatuan() memungkinkan pengguna untuk mengganti antara suhu dalam celcius atau fahrenheit, dan perubahan ini langsung disimpan ke file konfigurasi.

Setelah konfigurasi dibaca, program menggunakan modul readline untuk menerima input dari pengguna lewat terminal. Pertama, pengguna akan ditanya apakah ingin mengubah satuan suhu. Jika iya, maka satuan akan diubah dan disimpan. Kemudian, pengguna diminta mengisi suhu tubuh dan hari terakhir mengalami gejala demam. Nilai suhu yang dimasukkan akan divalidasi berdasarkan satuan suhu yang digunakan, dan jumlah hari akan dibandingkan dengan batas_hari_deman. Jika kedua kondisi terpenuhi (suhu dalam rentang normal dan hari demam kurang dari batas), maka pengguna diizinkan masuk; jika tidak, maka pengguna ditolak.

Program ini menunjukkan penerapan sederhana namun praktis dari runtime configuration dan validasi berbasis input pengguna, yang bisa sangat berguna dalam aplikasi screening di masa pandemi atau untuk kebutuhan protokol kesehatan lainnya.

Jurnal
Kode di tugas jurnal adalah program Node.js yang mensimulasikan proses transfer uang melalui bank, menggunakan konfigurasi dari file JSON bernama bank_transfer_config.json. Konfigurasi ini memuat bahasa tampilan (lang), batasan jumlah transfer yang memengaruhi biaya (threshold, low_fee, high_fee), daftar metode transfer (methods), serta format konfirmasi dalam dua bahasa (confirmation). Konfigurasi ini dapat disesuaikan pengguna tanpa perlu mengubah kode.

Bagian pertama adalah class BankTransferConfig, yang bertugas membaca atau membuat file konfigurasi. Jika file sudah ada, program akan membacanya. Jika tidak, file baru dibuat menggunakan konfigurasi default (defaultConfig). Kemudian, objek dari kelas ini menyediakan konfigurasi lewat fungsi getConfig().

Program utama dimulai dengan meminta input pengguna berupa jumlah uang yang ingin ditransfer (askAmount). Biaya transfer dihitung berdasarkan apakah jumlah uang lebih kecil atau lebih besar dari threshold. Program akan menampilkan biaya dan total jumlah yang harus dibayar, lalu berlanjut ke pemilihan metode transfer (askMethod) dari daftar yang disediakan.

Terakhir, program meminta konfirmasi dari pengguna menggunakan kata kunci yang sesuai dengan bahasa konfigurasi (yes untuk Inggris, ya untuk Indonesia). Jika konfirmasi diberikan sesuai, program menyatakan bahwa transfer berhasil; jika tidak, maka transfer dibatalkan. Seluruh interaksi dilakukan secara interaktif melalui terminal, memanfaatkan modul readline dari Node.js. Program ini sederhana tapi mencerminkan praktik runtime configuration dan internationalization (i18n) yang baik.