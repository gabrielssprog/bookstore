import { Request, Response } from "express"
import { UpdateBookService } from "../../services/updateBookService/UpdateBookService"

export class UpdateBookController {
  constructor(
    private updateBookService: UpdateBookService
  ) { }

  public async handle(request: Request, response: Response) {
    const book = await this.updateBookService.execute(request.body, {
      id: request.params.bookId
    })

    response.json({ book })
  }
}
