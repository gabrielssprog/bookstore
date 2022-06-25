import { PrismaClient } from '@prisma/client'
import { BookRepository } from './books/repository/BookRepository'
import { CreateBookService } from './books/services/createBookService/CreateBookService'

const connection = new PrismaClient()
const bookRepository = new BookRepository(connection.books)
const createBookService = new CreateBookService(bookRepository)

createBookService.execute({
  author: 'Hello',
  title: 'Hello',
  price: 30.00,
  amount: 40
}).then(console.log).catch(console.log)
