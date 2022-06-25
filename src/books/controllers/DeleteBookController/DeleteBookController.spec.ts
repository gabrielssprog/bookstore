import { DeleteBookService } from "../../services/deleteBookService/DeleteBookService"
import { DeleteBookController } from "./DeleteBookController"

describe('Delete book controller', () => {
  const updateBookService = Object.create(DeleteBookService.prototype)
  const request: any = {
    params: {
      bookId: '1'
    },
  }
  const response: any = {
    json: jest.fn((buffer: string) => {
      return buffer
    })
  }

  it('should return deleted book', async () => {
    const bookToDelete = {
      id: `${Math.random()}`,
      title: 'Hello World',
      author: 'Hello',
      price: 50.00,
      amount: 49,
    }
    request.params.bookId = bookToDelete.id
    const deleteBookController = new DeleteBookController({
      ...updateBookService,
      execute: async (where) => {
        return ({
          bookToDelete,
          ...where
        })
      }
    })

    await deleteBookController.handle(request, response)

    expect(response.json).toHaveBeenCalledWith({
      book: {
        bookToDelete,
        id: request.params.bookId
      }
    })
  })
})
