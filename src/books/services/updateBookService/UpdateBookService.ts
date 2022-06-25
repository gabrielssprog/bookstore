import { PartialBook } from "../../book";
import { BookRepository } from "../../repository/BookRepository";

export class UpdateBookService {
  constructor(
    private bookRepository: BookRepository
  ) { }

  public async execute(book: PartialBook, where: PartialBook) {
    return await this.bookRepository.update(book, where)
  }
}
