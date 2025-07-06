package library.service;

import library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook() {
        System.out.println("🛠 BookService: Adding a new book...");
        bookRepository.saveBook();
    }
}
