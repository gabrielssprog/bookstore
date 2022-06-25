import { CreateBookService } from "../../services/createBookService/CreateBookService"
import { CreateBookController } from "./CreateBookController"

describe('Create book controller', () => {
  const createBookService = Object.create(CreateBookService.prototype)
  const request: any = {
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

  it('should return created book', async () => {
    const id = `${Math.random()}`
    const createBookController = new CreateBookController({
      ...createBookService,
      execute: async (book) => {
        return ({
          ...book,
          id 
        })
      }
    })

    await createBookController.handle(request, response)

    expect(response.json).toHaveBeenCalledWith({
      book: {
        ...request.body,
        id
      }
    })
  })
})
