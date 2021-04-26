import { Actions } from "../types";
import { ACTIONS } from "../constants";

const filter = (state: string = "", action: Actions) => {
  switch (action.type) {
    case ACTIONS.SET_FILTER:
      return action.filter;
  }
  return state;
};

export default filter;
