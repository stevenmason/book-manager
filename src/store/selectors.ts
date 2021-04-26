import { State } from "./types";

const books = (state: State) => state.books[state.openPage];
const openPage = (state: State) => state.openPage;
const isLoading = (state: State) => state.isLoading;
const filter = (state: State) => state.filter;
const numberOfBooks = (state: State) => state.numberOfBooks;
const fetchedPages = (state: State) => Object.keys(state.books);

export { isLoading, filter, books, openPage, numberOfBooks, fetchedPages };
