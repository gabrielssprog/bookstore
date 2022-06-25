import { Request, Response } from "express";
import { ListBooksService } from "../../services/listBooksServices/ListBooksService";

export class ListBooksController {
  constructor(
    private listBooksService: ListBooksService
  ) { }

  public async handle(request: Request, response: Response) {
    const books = await this.listBooksService.execute()

    response.json({ books })
  }
}
