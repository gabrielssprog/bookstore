import { Request, Response } from "express";
import { CreateBookService } from "../../services/createBookService/CreateBookService";

export class CreateBookController {
  constructor(
    private createBookService: CreateBookService
  ) { }

  public async handle(request: Request, response: Response) {
    try {
      const book = await this.createBookService.execute(request.body)

      response.status(201).json({ book })
    } catch(error) {
      response.status(400).json();
    }
  }
}
