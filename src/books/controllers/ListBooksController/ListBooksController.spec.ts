import { ListBooksService } from "../../services/listBooksServices/ListBooksService"
import { ListBooksController } from "./ListBooksController"

describe('List books controller', () => {
  const listBooksService = Object.create(ListBooksService.prototype)
  const request: any = {}

  const response: any = {
    json: jest.fn((buffer: string) => {
      return buffer
    })
  }

  it('should return books', async () => {
    const book = {
      id: `${Math.random()}`,
      title: 'Hello World',
      author: 'Hello',
      price: 50.00,
      amount: 49
    }
    const listBooksController = new ListBooksController({
      ...listBooksService,
      execute: async () => {
        return [book]
      }
    })

    await listBooksController.handle(request, response)

    expect(response.json).toHaveBeenCalledWith({
      books: [book]
    })
  })
})
