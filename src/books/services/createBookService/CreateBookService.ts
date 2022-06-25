import { BookWithoutId } from "../../book";
import { BookRepository } from "../../repository/BookRepository";

export class CreateBookService {
  constructor(
    private bookRepository: BookRepository
  ) { }

  async execute(book: BookWithoutId) {
    return await this.bookRepository.create(book)
  }
}
