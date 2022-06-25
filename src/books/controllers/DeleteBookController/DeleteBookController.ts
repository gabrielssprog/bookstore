import { Request, Response } from "express"
import { DeleteBookService } from "../../services/deleteBookService/DeleteBookService"

export class DeleteBookController {
  constructor(
    private deleteBookService: DeleteBookService
  ) { }

  public async handle(request: Request, response: Response) {
    const book = await this.deleteBookService.execute({
      id: request.params.bookId
    })

    response.json({ book })
  }
}
