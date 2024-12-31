# Bookshelf App Starter Project

Ini adalah starter project untuk siswa yang sedang mengerjakan tugas akhir kelas **Belajar Membuat Front-End Web untuk Pemula** di [Dicoding Indonesia](https://www.dicoding.com/academies/315).

**Bookshelf App** adalah aplikasi sederhana untuk mengelola daftar buku. Dengan aplikasi ini, pengguna dapat menambahkan buku, mencari buku berdasarkan judul, menandai buku yang telah selesai dibaca, dan menghapus buku dari daftar.

## Deskripsi

Proyek ini merupakan **Final Project** dari kelas **Belajar Membuat Front-End Web untuk Pemula** di [Dicoding Indonesia](https://www.dicoding.com/academies/315). Tugas ini bertujuan untuk membuat aplikasi front-end interaktif dengan fitur penyimpanan menggunakan **Local Storage**. 

**Disclaimer**: Layout (HTML dan CSS) telah disediakan sebagai **Starter Pack** dari kursus ini. Fokus pengerjaan berada pada implementasi file JavaScript untuk membuat aplikasi dapat berfungsi.

## Ketentuan Pengerjaan Tugas

Agar mempermudah proses penilaian submission, berikut adalah beberapa ketentuan yang harus diikuti:

- **Dilarang** mengedit atau menghapus atribut `data-testid` pada elemen-elemen HTML.
- Anda **diperbolehkan** menambahkan atribut seperti `class` untuk kebutuhan styling, selama atribut `data-testid` beserta nilainya **tidak diubah** atau dihapus.
- Saat menampilkan data buku, tambahkan atribut berikut pada setiap elemen:
  - `data-bookid`: untuk menyimpan nilai ID masing-masing buku.
  - `data-testid`: sebagai penanda jenis data buku yang ditampilkan. Berikut daftar atributnya:
    - `bookItem`: elemen kontainer untuk setiap buku.
    - `bookItemTitle`: judul buku.
    - `bookItemAuthor`: penulis buku.
    - `bookItemYear`: tahun rilis buku.
    - `bookItemIsCompleteButton`: tombol untuk mengubah status buku (selesai/belum selesai).
    - `bookItemDeleteButton`: tombol untuk menghapus buku.
    - `bookItemEditButton`: tombol untuk mengedit informasi buku.

### Templat Buku

Agar lebih mudah, berikut templat elemen HTML untuk setiap buku:

```html
<div data-bookid="{{ ID_buku }}" data-testid="bookItem">
  <h3 data-testid="bookItemTitle">{{ judul_buku }}</h3>
  <p data-testid="bookItemAuthor">Penulis: {{ penulis_buku }}</p>
  <p data-testid="bookItemYear">Tahun: {{ tahun_rilis_buku }}</p>
  <div>
    <button data-testid="bookItemIsCompleteButton">{{ tombol_untuk_ubah_kondisi }}</button>
    <button data-testid="bookItemDeleteButton">{{ tombol_untuk_hapus }}</button>
    <button data-testid="bookItemEditButton">{{ tombol_untuk_edit }}</button>
  </div>
</div>
```

Selamat mengerjakan dan sukses selalu!
