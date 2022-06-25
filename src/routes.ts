import { PrismaClient } from "@prisma/client"
import express from "express"
import { BookRepository } from "./books/repository/BookRepository"
import { CreateBookService } from "./books/services/createBookService/CreateBookService"
import { DeleteBookService } from "./books/services/deleteBookService/DeleteBookService"
import { ListBooksService } from "./books/services/listBooksServices/ListBooksService"
import { UpdateBookService } from "./books/services/updateBookService/UpdateBookService"

export class Routes {
  public static newRoutes(connection: PrismaClient) {
    const routes = express.Router()

    const bookRepository = new BookRepository(connection.books)
    const createBookService = new CreateBookService(bookRepository)
    const listBookService = new ListBooksService(bookRepository)
    const updateBookService = new UpdateBookService(bookRepository)
    const deleteBookService = new DeleteBookService(bookRepository)

    return routes
  }
}
