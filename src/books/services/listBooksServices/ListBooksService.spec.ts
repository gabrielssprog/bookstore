import { BookRepository } from "../../repository/BookRepository"
import { ListBooksService } from "./ListBooksService"

describe('List books service', () => {
  const bookRepository = Object.create(BookRepository.prototype)

  it('should return books', async () => {
    const listBooksService = new ListBooksService({
      ...bookRepository,
      findAll: async () => [{
        id: `${Math.random()}`,
        title: 'Hello World',
        author: 'Hello',
        price: 50.00,
        amount: 20
      }]
    })

    const books = await listBooksService.execute()

    expect(books.length).toBeGreaterThan(0)
  })
})
