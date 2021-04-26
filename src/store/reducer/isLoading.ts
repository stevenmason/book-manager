import { Actions } from "../types";
import { ACTIONS } from "../constants";

const isLoading = (state: boolean = true, action: Actions) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return action.isLoading;
  }
  return state;
};

export default isLoading;
