// Daftar buku untuk simulasi (memanfaatkan localStorage)
let books = JSON.parse(localStorage.getItem('books')) || [];  // Mengambil data dari localStorage jika ada

// Menangani pengiriman form untuk menambah buku baru
document.getElementById('bookForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Ambil data dari form
  const title = document.getElementById('bookFormTitle').value;
  const author = document.getElementById('bookFormAuthor').value;
  const year = parseInt(document.getElementById('bookFormYear').value, 10); // Pastikan year sebagai number
  const isComplete = document.getElementById('bookFormIsComplete').checked;

  // Cek apakah kita sedang mengedit buku yang sudah ada
  const editingBookId = document.getElementById('bookForm').getAttribute('data-editing');
  
  if (editingBookId) {
    // Cari buku yang sedang diedit berdasarkan ID
    const editingBook = books.find(b => b.id === parseInt(editingBookId));

    // Cek apakah ada perubahan pada data buku
    if (editingBook.title !== title || editingBook.author !== author || editingBook.year !== year || editingBook.isComplete !== isComplete) {
      // Update data buku yang sedang diedit
      editingBook.title = title;
      editingBook.author = author;
      editingBook.year = year;
      editingBook.isComplete = isComplete;

      // Simpan perubahan ke localStorage
      localStorage.setItem('books', JSON.stringify(books));
    }

    // Hapus atribut data-editing dan reset form
    document.getElementById('bookForm').removeAttribute('data-editing');
  } else {
    // Menambahkan buku baru
    const newBook = {
      id: Date.now(),  // Menggunakan timestamp sebagai ID buku
      title,
      author,
      year,
      isComplete,
    };

    // Tambahkan buku ke dalam array
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));  // Simpan buku baru ke localStorage
  }

  // Reset form
  document.getElementById('bookForm').reset();
  event.target.reset();

  // Render daftar buku
  renderBooks(books);  // Pastikan renderBooks mendapatkan parameter buku yang benar
});

// Menangani pengiriman form pencarian buku
document.getElementById('searchBook').addEventListener('submit', function(event) {
  event.preventDefault();

  // Ambil input pencarian
  const searchQuery = document.getElementById('searchBookTitle').value.toLowerCase();

  // Filter buku berdasarkan pencarian
  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchQuery) ||
           book.author.toLowerCase().includes(searchQuery) ||
           book.year.toString().includes(searchQuery);  // Pastikan pencarian year sesuai
  });

  // Render hasil pencarian hanya untuk buku yang dicari
  renderBooks(filteredBooks);  // Render berdasarkan hasil pencarian
});

// Menampilkan buku berdasarkan status selesai atau belum selesai
function renderBooks(filteredBooks = books) {  // Pastikan untuk menggunakan filteredBooks
  const incompleteBookList = document.getElementById('incompleteBookList');
  const completeBookList = document.getElementById('completeBookList');

  incompleteBookList.innerHTML = '';
  completeBookList.innerHTML = '';

  filteredBooks.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.setAttribute('data-bookid', book.id);
    bookElement.setAttribute('data-testid', 'bookItem');

    const titleElement = document.createElement('h3');
    titleElement.textContent = book.title;
    titleElement.setAttribute('data-testid', 'bookItemTitle');

    const authorElement = document.createElement('p');
    authorElement.textContent = `Penulis: ${book.author}`;
    authorElement.setAttribute('data-testid', 'bookItemAuthor');

    const yearElement = document.createElement('p');
    yearElement.textContent = `Tahun: ${book.year}`;
    yearElement.setAttribute('data-testid', 'bookItemYear');

    const buttonGroup = document.createElement('div');

    // Button 'Selesai dibaca / Belum selesai dibaca'
    const completeButton = document.createElement('button');
    completeButton.textContent = book.isComplete ? 'Belum selesai dibaca' : 'Selesai dibaca';
    completeButton.setAttribute('data-testid', 'bookItemIsCompleteButton');
    completeButton.addEventListener('click', () => {
      book.isComplete = !book.isComplete; // Balik nilai isComplete
      localStorage.setItem('books', JSON.stringify(books));
      renderBooks(books);  // Render ulang daftar buku yang lengkap
    });

    // Button 'Hapus Buku'
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus Buku';
    deleteButton.setAttribute('data-testid', 'bookItemDeleteButton');
    deleteButton.addEventListener('click', () => {
      books = books.filter(b => b.id !== book.id);  // Hapus buku dari array
      // Simpan perubahan ke localStorage
      localStorage.setItem('books', JSON.stringify(books));
      renderBooks(books);  // Render ulang setelah menghapus buku
    });

    // Button 'Edit Buku'
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Buku';
    editButton.addEventListener('click', () => {
      editBook(book.id); // Menangani pengeditan buku
    });

    buttonGroup.appendChild(completeButton);
    buttonGroup.appendChild(deleteButton);
    buttonGroup.appendChild(editButton);

    bookElement.appendChild(titleElement);
    bookElement.appendChild(authorElement);
    bookElement.appendChild(yearElement);
    bookElement.appendChild(buttonGroup);

    // Pisahkan buku berdasarkan status isComplete
    if (book.isComplete) {
      completeBookList.appendChild(bookElement);
    } else {
      incompleteBookList.appendChild(bookElement);
    }
  });
}

// Fungsi untuk mengedit buku
function editBook(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  // Isi form dengan data buku yang akan diedit
  document.getElementById('bookFormTitle').value = book.title;
  document.getElementById('bookFormAuthor').value = book.author;
  document.getElementById('bookFormYear').value = book.year;
  document.getElementById('bookFormIsComplete').checked = book.isComplete;

  // Simpan id buku yang sedang diedit
  document.getElementById('bookForm').setAttribute('data-editing', book.id);
}

// Initial call to render books when the page is loaded
renderBooks(books);
