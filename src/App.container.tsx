import { connect } from "react-redux";
import { bindActionCreators, Dispatch, Action } from "redux";

import { State } from "./store/types";
import { setIsLoading, setBooks, setOpenPage } from "./store/actions";
import App from "./App";
import {
  books,
  openPage,
  isLoading,
  numberOfBooks,
  fetchedPages,
} from "./store/selectors";

const mapStateToProps = (state: State) => ({
  books: books(state),
  openPage: openPage(state),
  isLoading: isLoading(state),
  numberOfBooks: numberOfBooks(state),
  fetchedPages: fetchedPages(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  ...bindActionCreators(
    {
      setIsLoading,
      setBooks,
      setOpenPage,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
