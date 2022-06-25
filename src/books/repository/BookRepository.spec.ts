import { PrismaClient } from "@prisma/client"
import { BookRepository } from "./BookRepository"

describe('Book repository', () => {
  const connection = Object.create(PrismaClient.prototype)

  it('should return created book', async () => {
    const bookRepository = new BookRepository({
      ...connection,
      create: async (args) => {
        return {
          ...args.data,
          id: `${Math.random()}`
        }
      }
    })
    const bookToCreate = {
      title: 'Hello World',
      author: 'Hello',
      price: 40.00,
      amount: 10
    }

    const createdBook = await bookRepository.create(bookToCreate)

    expect({
      ...bookToCreate,
      id: createdBook.id
    }).toStrictEqual(createdBook)
  })

  it('should return books', async () => {
    const bookRepository = new BookRepository({
      ...connection,
      findMany: async () => {
        return [{
          id: `${Math.random()}`,
          title: 'Hello World',
          author: 'Hello',
          price: 40.00,
          amount: 10
        }]
      }
    })
    const books = await bookRepository.findAll()

    expect(books.length).toBeGreaterThan(0)
  })

  it('should return updated book', async () => {
    const bookRepository = new BookRepository({
      ...connection,
      update: async (args) => {
        return {
          id: `${Math.random()}`,
          title: 'Hello World',
          author: 'Hello',
          price: 40.00,
          amount: 10,
          ...args.data
        }
      }
    })
    const bookToUpdate = {
      id: `${Math.random()}`,
      title: 'Hello World',
      author: 'Hello',
      price: 40.00,
      amount: 10
    }

    const updatedBook = await bookRepository.update(bookToUpdate, {
      id: bookToUpdate.id
    })

    expect(updatedBook).toStrictEqual(bookToUpdate)
  })

  it('should return deleted book', async () => {
    const bookRepository = new BookRepository({
      ...connection,
      delete: async (args) => {
        return {
          id: `${Math.random()}`,
          title: 'Hello World',
          author: 'Hello',
          price: 40.00,
          amount: 10,
          ...args.where
        }
      }
    })
    const bookToDelete = {
      id: `${Math.random()}`,
      title: 'Hello World',
      author: 'Hello',
      price: 40.00,
      amount: 10
    }

    const deletedBook = await bookRepository.delete({
      id: bookToDelete.id
    })

    expect(deletedBook).toStrictEqual(bookToDelete)
  })
})
