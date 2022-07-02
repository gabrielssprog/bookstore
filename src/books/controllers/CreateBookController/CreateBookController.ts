import { NextFunction, Request, Response } from "express";
import { CreateBookService } from "../../services/createBookService/CreateBookService";

export class CreateBookController {
  constructor(
    private createBookService: CreateBookService
  ) { }

  public async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const book = await this.createBookService.execute(request.body)

      return response.status(201).json({ book })
    } catch(error) {
      return next(error)
    }
  }
}
