import { useState, useEffect } from 'react';
import './App.css';
import Book from './Book.jsx';
import Modal from './components/Modal.jsx';
import BookForm from './components/BookForm.jsx';
import Filter from './components/Filter.jsx';

function App() {
  const [books, setBooks] = useState(() => {
    const stored = localStorage.getItem('books');
    return stored ? JSON.parse(stored) : [];
  });

  const [selectedBookId, setSelectedBookId] = useState(null);
  const [publisher, setPublisher] = useState('All');
  const [language, setLanguage] = useState('All');

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const allBooks = [...books];

  const uniqueLanguages = Array.from(
    new Set(
      allBooks
        .map((b) => b.language)
        .filter((l) => l && l.trim() !== '' && l.trim().toLowerCase() !== 'all')
    )
);


  const filteredBooks = allBooks.filter(
    (book) =>
      (publisher === 'All' || book.publisher === publisher) &&
      (language === 'All' || book.language === language)
  );

  function addBook(book) {
    setBooks([...books, book]);
  }

  function deleteBook(id) {
    const updated = books.filter((b) => b.id !== id);
    setBooks(updated);
  }

  function toggleSelectBook(id) {
    setSelectedBookId((prev) => (prev === id ? null : id));
  }

  function handleDeleteSelected() {
    if (!selectedBookId) return;
    const updatedBooks = books.filter((book) => book.id !== selectedBookId);
    setBooks(updatedBooks);
    setSelectedBookId(null);
  }

  return (
    <div className="app-container">
      <h1 className="header">Book Catalog</h1>
      <div>
        <Filter
          filters={[
            {
              label: 'Language',
              options: ['All', ...uniqueLanguages],
              selected: language,
              onChange: setLanguage,
            },
          ]}
        />
      </div>
      <div className="books">
        <Modal btnLabel="New" btnClassName="new-button" onDelete={handleDeleteSelected}>
          <BookForm add={addBook} />
        </Modal>

        <div className="book-list">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className={`book ${selectedBookId === book.id ? 'selected' : ''}`}
              onClick={() => toggleSelectBook(book.id)}
            >
              <img src={book.url} alt={book.title} />
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>{book.publisher}</p>
              <p>{book.publicationYear}</p>
              <p>{book.language}</p>
              <p>{book.pages}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p className="footer-content">© Daniel Liu, 2025</p>
      </footer>
    </div>
  );
}

export default App;
