import { PrismaClient } from "@prisma/client";
import { Book, BookWithoutId, PartialBook } from "../book";

export class BookRepository {
  constructor(
    private connection: PrismaClient['books']
  ) { }

  public async create(data: BookWithoutId): Promise<Book> {
    return await this.connection.create({
      data
    })
  }

  public async findAll(): Promise<Book[]> {
    return this.connection.findMany()
  }

  public async update(data: PartialBook, where: PartialBook) {
    return await this.connection.update({
      data,
      where
    })
  }

  public async delete(where: PartialBook): Promise<Book> {
    return await this.connection.delete({
      where
    })
  }
}
