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
    status: jest.fn(() => {
      return response
    }),
    json: jest.fn((buffer: string) => {
      return buffer
    })
  }
  const next: any = jest.fn((error: Error) => {})

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

    await deleteBookController.handle(request, response, next)

    expect(response.json).toHaveBeenCalledWith({
      book: {
        bookToDelete,
        id: request.params.bookId
      }
    })
  })

  it('should throw error', async () => {
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
      execute: async () => {
        throw new Error()
      }
    })

    await deleteBookController.handle(request, response, next)

    expect(next).toHaveBeenCalledWith(new Error())
  })
})
