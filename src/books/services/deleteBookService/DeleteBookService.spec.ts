import { BookRepository } from "../../repository/BookRepository"
import { DeleteBookService } from "./DeleteBookService"

describe('Delete book service', () => {
  const bookRepository = Object.create(BookRepository.prototype)

  it('should return deleted book', async () => {
    const deleteBookService = new DeleteBookService({
      ...bookRepository,
      delete: async (data) => {
        return {
          ...data,
        }
      }
    })

    const bookToDelete = {
      id: `${Math.random()}`,
      title: 'Hello World',
      author: 'Hello',
      price: 50.00,
      amount: 10
    }

    const deletedBook = await deleteBookService
      .execute(bookToDelete)

    expect({
      ...bookToDelete,
      id: deletedBook.id
    }).toStrictEqual(deletedBook)
  })
})
