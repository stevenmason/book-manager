import React from "react";
import { render } from "@testing-library/react";

import BookList from "./BookList";
import { Props } from "./types";

const PROPS: Props = {
  books: [
    {
      book_author: ["test"],
      book_pages: 2,
      book_publication_city: "test",
      book_publication_country: "test",
      book_publication_year: 2020,
      book_title: "test",
      id: 1,
    },
    {
      book_author: ["test 2"],
      book_pages: 10,
      book_publication_city: "test 2",
      book_publication_country: "test 2",
      book_publication_year: 2021,
      book_title: "test 2",
      id: 2,
    },
  ],
  isLoading: false,
};

it("renders correctly", () => {
  const { container } = render(<BookList {...PROPS} />);
  expect(container.firstChild).toMatchSnapshot();
});
