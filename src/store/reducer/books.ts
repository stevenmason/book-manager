import { Actions } from "../types";
import { ACTIONS } from "../constants";
import { PagedBooks } from "../../types";

const books = (state: PagedBooks = {}, action: Actions) => {
  switch (action.type) {
    case ACTIONS.SET_BOOKS:
      return { ...state, [action.page]: action.books };
  }
  return state;
};

export default books;
