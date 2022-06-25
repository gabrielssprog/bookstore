import { Request, Response } from "express";
import { CreateBookService } from "../../services/createBookService/CreateBookService";

export class CreateBookController {
  constructor(
    private createBookService: CreateBookService
  ) { }

  public async handle(request: Request, response: Response) {
    const book = await this.createBookService.execute(request.body)

    response.json({ book })
  }
}
