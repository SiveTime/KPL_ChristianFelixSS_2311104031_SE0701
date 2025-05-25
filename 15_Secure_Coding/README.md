Jurnal

Jurnal Modul 15
Penjelasan dari pembuatan kodingan
Pada pengerjaan Jurnal Modul 15 ini, saya membuat sebuah aplikasi desktop sederhana dengan fitur
registrasi dan login menggunakan praktik Secure Coding. Aplikasi dikembangkan menggunakan
Node.js dan Electron, dengan antarmuka berbasis HTML yang memungkinkan pengguna untuk
memasukkan username dan password. Data pengguna disimpan dalam sebuah file users.json,
sehingga tidak memerlukan database eksternal.
Dalam pengembangannya, saya menerapkan input validation agar sistem aman dari input tidak valid.
Validasi dilakukan untuk memastikan bahwa username hanya mengandung karakter alfanumerik
dengan panjang antara 4 hingga 20 karakter. Password juga divalidasi agar memiliki panjang minimal
8 karakter dan maksimal 20 karakter, mengandung setidaknya satu karakter spesial (!@#$%^&*), serta
tidak boleh mengandung bagian dari username itu sendiri.
Selain validasi input, sistem juga menerapkan password hashing menggunakan algoritma SHA-256
sebelum menyimpan password ke file JSON. Tujuannya agar password tidak disimpan dalam bentuk
teks asli (plain text) sehingga lebih aman jika file data terbuka atau bocor. Seluruh proses validasi dan
hashing dilakukan di dalam file auth.js, sedangkan file renderer.js bertugas untuk menghubungkan UI
dengan logika autentikasi.
Hasil akhir dari aplikasi ini memungkinkan pengguna untuk mendaftar akun dengan aturan keamanan
tertentu, serta melakukan login dengan autentikasi berbasis hash. Aplikasi juga akan memberikan
feedback yang jelas apabila pengguna gagal melakukan registrasi atau login, sesuai prinsip secure error
handling. Dengan demikian, aplikasi ini memenuhi syarat modul 15 yang berfokus pada pengamanan
proses autentikasi.
Hasil running kodingan untuk modul 15 dengan register dan login serta file user.json ada di hasil running pdf filenya