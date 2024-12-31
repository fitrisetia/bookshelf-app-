# Bookshelf Apps

![Project Image](/images/bookshelfapp.png)

**Bookshelf Apps** adalah **Final Project** dari kelas **Belajar Membuat Front-End Web untuk Pemula** - Proyek Akhir yaitu **Submission: Membangun Bookshelf App** di [Dicoding Indonesia](https://www.dicoding.com/academies/315). Tugas ini bertujuan untuk membuat aplikasi front-end interaktif dengan fitur penyimpanan menggunakan **Local Storage**. 

**Bookshelf App** adalah aplikasi berbasis web yang memungkinkan pengguna untuk mengelola daftar buku mereka. Pengguna dapat menambahkan, mengedit, menghapus, serta mencari buku. Data buku disimpan secara lokal menggunakan `localStorage` agar tetap tersedia meskipun pengguna menutup aplikasi.

## Fitur

### 1. **Menambahkan Buku Baru**
   Pengguna dapat menambahkan buku baru ke dalam daftar mereka dengan informasi berikut:
   - Judul buku
   - Pengarang
   - Tahun terbit
   - Status selesai dibaca atau belum
   Buku baru akan ditambahkan ke dalam daftar dan disimpan di `localStorage`.

### 2. **Mencari Buku**
   Pengguna dapat mencari buku berdasarkan judul, pengarang, atau tahun terbit menggunakan form pencarian. Hasil pencarian akan ditampilkan secara dinamis.

### 3. **Melihat Daftar Buku**
   Buku yang sudah ditambahkan akan dibagi ke dalam dua kategori:
   - Buku yang sudah selesai dibaca
   - Buku yang belum selesai dibaca

### 4. **Mengedit Buku**
   Pengguna dapat mengedit buku yang sudah ditambahkan. Formulir pengeditan akan diisi dengan data buku yang ada, dan setelah selesai, perubahan akan disimpan kembali ke `localStorage`.

### 5. **Menghapus Buku**
   Setiap buku yang ditampilkan memiliki tombol untuk menghapusnya. Setelah dihapus, perubahan langsung disimpan ke `localStorage`.

### 6. **Tombol untuk Menandai Status Buku**
   Pengguna dapat menandai buku sebagai selesai dibaca atau belum selesai dibaca dengan menekan tombol yang ada pada setiap buku.

## Cara Penggunaan

1. **Menambahkan Buku**
   - Isi form yang tersedia untuk menambahkan buku baru. Setelah mengisi semua kolom, klik tombol submit untuk menambahkannya ke daftar buku.

2. **Mencari Buku**
   - Masukkan kata kunci di form pencarian untuk mencari buku berdasarkan judul, pengarang, atau tahun terbit.

3. **Mengedit Buku**
   - Klik tombol 'Edit Buku' pada buku yang ingin diedit. Formulir akan terisi dengan data buku yang dipilih, kemudian klik 'Submit' untuk menyimpan perubahan.

4. **Menghapus Buku**
   - Klik tombol 'Hapus Buku' untuk menghapus buku yang tidak diinginkan.

5. **Menandai Buku Selesai**
   - Gunakan tombol 'Selesai dibaca / Belum selesai dibaca' untuk mengubah status buku apakah sudah selesai dibaca atau belum.

## Struktur Kode

- **`bookForm`**: Form untuk menambahkan dan mengedit buku.
- **`searchBook`**: Form untuk mencari buku berdasarkan judul, pengarang, atau tahun terbit.
- **`renderBooks`**: Fungsi untuk menampilkan buku berdasarkan status selesai dibaca dan belum selesai dibaca.
- **`localStorage`**: Semua data buku disimpan di `localStorage` agar tetap tersedia saat aplikasi dibuka kembali.

## Teknologi yang Digunakan

- HTML
- CSS
- JavaScript
- localStorage
