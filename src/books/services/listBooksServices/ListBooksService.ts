import { BookRepository } from "../../repository/BookRepository";

export class ListBooksService {
  constructor(
    private bookRepository: BookRepository
  ) { }
  public async execute() {
    return await this.bookRepository.findAll()
  }
}
