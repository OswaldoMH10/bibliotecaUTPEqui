import { useState, useEffect } from "react";
import { Book } from "../models/Book";
import { bookService } from "../services/bookService";

export function useBooksViewModel(){
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBooks = async () => {
            const data = await bookService.getBooks();
            setBooks(data);
            setLoading(false);
        };
        loadBooks();
    }, []);
    return { books, loading };
}