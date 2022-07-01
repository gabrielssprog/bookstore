import { PrismaClient } from "@prisma/client"
import { CreateBookController } from "./books/controllers/CreateBookController/CreateBookController"
import { DeleteBookController } from "./books/controllers/DeleteBookController/DeleteBookController"
import { ListBooksController } from "./books/controllers/ListBooksController/ListBooksController"
import { UpdateBookController } from "./books/controllers/UpdateBookController/UpdateBookController"
import { BookRepository } from "./books/repository/BookRepository"
import { CreateBookService } from "./books/services/createBookService/CreateBookService"
import { DeleteBookService } from "./books/services/deleteBookService/DeleteBookService"
import { ListBooksService } from "./books/services/listBooksServices/ListBooksService"
import { UpdateBookService } from "./books/services/updateBookService/UpdateBookService"
import express from "express"
import swaggerUi from "swagger-ui-express"
import yamljs from "yamljs"
import { join } from "path"

export class Routes {
  public static newRoutes(connection: PrismaClient) {
    const routes = express.Router()

    const bookRepository = new BookRepository(connection.books)

    const createBookService = new CreateBookService(bookRepository)
    const listBooksService = new ListBooksService(bookRepository)
    const updateBookService = new UpdateBookService(bookRepository)
    const deleteBookService = new DeleteBookService(bookRepository)

    const createBookController = new CreateBookController(createBookService)
    const listBooksController = new ListBooksController(listBooksService)
    const updateBookController = new UpdateBookController(updateBookService)
    const deleteBookController = new DeleteBookController(deleteBookService)

    routes.post('/books', createBookController.handle.bind(createBookController))
    routes.get('/books', listBooksController.handle.bind(listBooksController))
    routes.put('/books/:bookId', updateBookController.handle.bind(updateBookController))
    routes.delete('/books/:bookId', deleteBookController.handle.bind(deleteBookController))

    const swaggerDocument = yamljs.load(join(__dirname, '..', 'swagger.yml'))

    routes.use('/docs', swaggerUi.serve)
    routes.get('/docs', swaggerUi.setup(swaggerDocument))

    return routes
  }
}
