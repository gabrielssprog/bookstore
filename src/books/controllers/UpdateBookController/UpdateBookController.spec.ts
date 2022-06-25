import { UpdateBookService } from "../../services/updateBookService/UpdateBookService"
import { UpdateBookController } from "./UpdateBookController"

describe('Update book controller', () => {
  const updateBookService = Object.create(UpdateBookService.prototype)
  const request: any = {
    params: {
      bookId: '1'
    },
    body: {
      title: 'Hello World',
      author: 'Hello',
      price: 50.00,
      amount: 49
    }
  }
  const response: any = {
    json: jest.fn((buffer: string) => {
      return buffer
    })
  }

  it('should return updated book', async () => {
    const id = `${Math.random()}`
    request.params.bookId = id
    const updateBookController = new UpdateBookController({
      ...updateBookService,
      execute: async (data, where) => {
        return ({
          ...where,
          ...data
        })
      }
    })

    await updateBookController.handle(request, response)

    expect(response.json).toHaveBeenCalledWith({
      book: {
        id,
        ...request.body
      }
    })
  })
})
