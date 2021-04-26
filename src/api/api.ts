import axios from "axios";
import { BooksResponse } from "./types";

const SERVER = "http://nyx.vima.ekt.gr:3000/api";
const BOOKS_API = `${SERVER}/books`;

async function getBooks(
  page: number = 1,
  itemsPerPage: number = 20,
  filters = []
) {
  const response = await axios.post<BooksResponse>(BOOKS_API, {
    page,
    itemsPerPage,
  });
  return response.data;
}

export { getBooks };
