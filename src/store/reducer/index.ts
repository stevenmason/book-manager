import { combineReducers } from "redux";

import books from "./books";
import filter from "./filter";
import isLoading from "./isLoading";
import numberOfBooks from "./numberOfBooks";
import openPage from "./openPage";

const getRootReducer = () =>
  combineReducers({
    books,
    filter,
    isLoading,
    openPage,
    numberOfBooks,
  });

export default getRootReducer;
