import { BookRepository } from "../../repository/BookRepository"
import { UpdateBookService } from "./UpdateBookService"

describe('Update book service', () => {
  const bookRepository = Object.create(BookRepository.prototype)

  it('should return updated book', async () => {
    const updateBookService = new UpdateBookService({
      ...bookRepository,
      update: async (data, where) => {
        return {
          ...where,
          ...data,
        }
      }
    })

    const bookToUpdate = {
      id: `${Math.random()}`,
      title: 'Hello World',
      author: 'Hello',
      price: 50.00,
      amount: 10
    }

    const updatedBook = await updateBookService
      .execute(bookToUpdate, {
        id: bookToUpdate.id
      })

    expect({
      ...bookToUpdate,
      id: updatedBook.id
    }).toStrictEqual(updatedBook)
  })
})
