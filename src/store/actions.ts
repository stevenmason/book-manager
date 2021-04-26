import { Book } from "../types";
import { ACTIONS } from "./constants";

const setBooks = (books: Book[], numberOfBooks: number, page: number = 1) => ({
  type: ACTIONS.SET_BOOKS as ACTIONS.SET_BOOKS,
  books,
  page,
  numberOfBooks,
});

const setOpenPage = (openPage: number) => ({
  type: ACTIONS.SET_OPEN_PAGE as ACTIONS.SET_OPEN_PAGE,
  openPage,
});

const setIsLoading = (isLoading: boolean) => ({
  type: ACTIONS.SET_LOADING as ACTIONS.SET_LOADING,
  isLoading,
});

const setFilter = (filter: string) => ({
  type: ACTIONS.SET_FILTER as ACTIONS.SET_FILTER,
  filter,
});

export { setBooks, setIsLoading, setFilter, setOpenPage };
