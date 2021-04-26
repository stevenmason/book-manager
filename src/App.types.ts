import { WithStyles } from "@material-ui/core";

import { Book } from "./types";
import { setBooks, setOpenPage, setIsLoading } from "./store/actions";

export interface State {
  isError: boolean;
}

export interface Props extends WithStyles {
  numberOfBooks: number | null;
  books: Book[];
  isLoading: boolean;
  openPage: number;
  fetchedPages: string[];
  booksPerPage: number;
  setBooks: typeof setBooks;
  setOpenPage: typeof setOpenPage;
  setIsLoading: typeof setIsLoading;
}
