import { BookWithoutId } from "../../book"
import { BookRepository } from "../../repository/BookRepository"
import { CreateBookService } from "./CreateBookService"

describe('Create book service', () => {
  const bookRepository = Object.create(BookRepository.prototype)

  it('should return created book', async () => {
    const createBookService = new CreateBookService({
      ...bookRepository,
      create: async (data: BookWithoutId) => {
        return {
          ...data,
          id: `${Math.random()}`
        }
      }
    })

    const bookToCreate = {
      title: 'Hello World',
      author: 'Hello',
      price: 50.00,
      amount: 10
    }

    const createdBook = await createBookService
      .execute(bookToCreate)

    expect({
      ...bookToCreate,
      id: createdBook.id
    }).toStrictEqual(createdBook)
  })
})
