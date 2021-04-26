import { Actions } from "../types";
import { ACTIONS } from "../constants";

const openPage = (state: number = 1, action: Actions) => {
  switch (action.type) {
    case ACTIONS.SET_OPEN_PAGE:
      return action.openPage;
  }
  return state;
};

export default openPage;
