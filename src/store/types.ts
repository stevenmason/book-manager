import { setBooks, setIsLoading, setFilter, setOpenPage } from "./actions";
import getRootReducer from "./reducer";

export type State = ReturnType<ReturnType<typeof getRootReducer>>;

export type Actions =
  | ReturnType<typeof setBooks>
  | ReturnType<typeof setOpenPage>
  | ReturnType<typeof setIsLoading>
  | ReturnType<typeof setFilter>;
