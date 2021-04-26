import React, { Component } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Box, withStyles } from "@material-ui/core";

import { getBooks } from "./api";
import BookList from "./components/BookList";
import styles from "./App.styles";
import { Props, State } from "./App.types";
import Header from "./components/Header";

class App extends Component<Props, State> {
  state = {
    isError: false,
  };

  componentDidMount() {
    const page =
      Number(
        window.location.pathname.substring(
          window.location.pathname.lastIndexOf("/") + 1
        )
      ) || 1;
    this.getBooksForPage(page);
    this.props.setOpenPage(page);
  }

  async getBooksForPage(page: number) {
    this.props.setIsLoading(true);
    try {
      const { books, count } = await getBooks(page, this.props.booksPerPage);
      this.props.setBooks(books, count, page);
    } catch (error) {
      this.setState({ isError: true });
    }
    this.props.setIsLoading(false);
  }

  handlePagination = (event: React.ChangeEvent<unknown>, page: number) => {
    this.props.setOpenPage(page);
    if (!this.props.fetchedPages.includes(page.toString())) {
      this.getBooksForPage(page);
    }
    window.history.pushState({}, "", `/${page}`);
  };

  render() {
    const {
      numberOfBooks,
      books,
      openPage,
      isLoading,
      classes,
      booksPerPage,
    } = this.props;
    const numberOfPages =
      numberOfBooks && Math.ceil(numberOfBooks / booksPerPage);

    return (
      <Box className={classes.container}>
        <Header />
        <BookList books={books} isLoading={isLoading} />
        {numberOfPages && (
          <Pagination
            className={classes.pagination}
            count={numberOfPages}
            page={openPage}
            onChange={this.handlePagination}
          />
        )}
      </Box>
    );
  }
}

export default withStyles(styles)(App);
