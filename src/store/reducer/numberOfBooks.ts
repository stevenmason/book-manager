import { Actions } from "../types";
import { ACTIONS } from "../constants";

const numberOfBooks = (state: number | null = null, action: Actions) => {
  switch (action.type) {
    case ACTIONS.SET_BOOKS:
      return action.numberOfBooks;
  }
  return state;
};

export default numberOfBooks;
