import { Router } from "express";
import BookService from "./books.service.js";

const bookService = new BookService();

export class BooksController {
  async listBooks(req, res) {
    res.status(200).json(await bookService.listBooks());
  }

  async addBook(req, res) {
    res.status(201).json(
      await bookService.addBook({
        title: req.body.title,
        author: req.body.author,
      })
    );
  }
}

const booksRouter = Router();
const bookController = new BooksController();

booksRouter.get("/books/", bookController.listBooks);
booksRouter.post("/books/", bookController.addBook);

export default booksRouter;
