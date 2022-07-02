import { NextFunction, Request, Response } from "express"
import { DeleteBookService } from "../../services/deleteBookService/DeleteBookService"

export class DeleteBookController {
  constructor(
    private deleteBookService: DeleteBookService
  ) { }

  public async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const book = await this.deleteBookService.execute({
        id: request.params.bookId
      })

      return response.json({ book })
    } catch(error) {
      return next(error)
    }
  }
}
