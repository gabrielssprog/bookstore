export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  amount: number;
}

export type BookWithoutId = Omit<Book, 'id'>
export type PartialBook = Partial<Book>
