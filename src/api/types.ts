import { Book } from "../types";

export interface BooksResponse {
  books: Book[];
  count: number;
}
