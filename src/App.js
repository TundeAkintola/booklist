import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

export default function App() {
    const [books, setBooks] = useState([]);
    const deleteBookById = id => {
        const updatedBooks = books.filter(book => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };
    const createBook = title => {
        const updatedBooks = [
            ...books,
            { id: Math.round(Math.random() * 9999), title }
        ];
        setBooks(updatedBooks);
    };
    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return { ...book, title: newTitle };
            }
            return book;
        });
        setBooks(updatedBooks);
    };
    return (
        <>
            <div className="app">
                <h1>My Book List</h1>
                <BookList
                    books={books}
                    onEdit={editBookById}
                    onDelete={deleteBookById}
                />
                <BookCreate onCreate={createBook} />
            </div>
        </>
    );
}
