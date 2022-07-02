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
    status: jest.fn(() => {
      return response
    }),
    json: jest.fn((buffer: string) => {
      return buffer
    })
  }
  const next: any = jest.fn((error: Error) => {})

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

    await updateBookController.handle(request, response, next)

    expect(response.json).toHaveBeenCalledWith({
      book: {
        id,
        ...request.body
      }
    })
  })

  it('should throw error', async () => {
    const id = `${Math.random()}`
    request.params.bookId = id
    const updateBookController = new UpdateBookController({
      ...updateBookService,
      execute: async () => {
        throw new Error()
      }
    })

    await updateBookController.handle(request, response, next)

    expect(next).toHaveBeenCalledWith(new Error())
  })
})
