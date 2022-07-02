import { NextFunction, Request, Response } from "express"
import { UpdateBookService } from "../../services/updateBookService/UpdateBookService"

export class UpdateBookController {
  constructor(
    private updateBookService: UpdateBookService
  ) { }

  public async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const book = await this.updateBookService.execute(request.body, {
        id: request.params.bookId
      })

      return response.json({ book })
    } catch(error) {
      return next(error)
    }
  }
}
