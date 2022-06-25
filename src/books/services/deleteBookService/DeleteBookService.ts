import { PartialBook } from "../../book";
import { BookRepository } from "../../repository/BookRepository";

export class DeleteBookService {
  constructor(
    private bookRepository: BookRepository
  ) { }

  public async execute(book: PartialBook) {
    return await this.bookRepository.delete(book)
  }
}
