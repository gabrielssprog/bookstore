import { NextFunction, Request, Response } from "express";
import { ListBooksService } from "../../services/listBooksServices/ListBooksService";

export class ListBooksController {
  constructor(
    private listBooksService: ListBooksService
  ) { }

  public async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const books = await this.listBooksService.execute()

      return response.json({ books })
    } catch(error) {
      return next(error)
    }
  }
}
