import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import mockedAxios from "axios";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App.container";
import getRootReducer from "./store/reducer";

const BOOKS_REQUEST_PAGE_1 = {
  data: {
    books: [
      {
        book_author: ["test"],
        book_pages: 2,
        book_publication_city: "test",
        book_publication_country: "test",
        book_publication_year: 2020,
        book_title: "test title 1",
        id: 1,
      },
      {
        book_author: ["test 2"],
        book_pages: 10,
        book_publication_city: "test 2",
        book_publication_country: "test 2",
        book_publication_year: 2021,
        book_title: "test title 2",
        id: 2,
      },
    ],
    count: 3,
  },
};

const BOOKS_REQUEST_PAGE_2 = {
  data: {
    books: [
      {
        book_author: ["test 3"],
        book_pages: 20,
        book_publication_city: "test 3",
        book_publication_country: "test 3",
        book_publication_year: 2021,
        book_title: "test title 3",
        id: 3,
      },
    ],
    count: 3,
  },
};

afterEach(cleanup);

test("fetches and renders books for the default page", async () => {
  const store = createStore(getRootReducer());
  mockedAxios.post.mockResolvedValueOnce(BOOKS_REQUEST_PAGE_1);

  render(
    <Provider store={store}>
      <App booksPerPage={2} />
    </Provider>
  );
  const titleTextBook1 = await screen.findByText(/test title 1/i);
  const titleTextBook2 = await screen.findByText(/test title 2/i);

  expect(mockedAxios.post).toBeCalledWith(
    "http://nyx.vima.ekt.gr:3000/api/books",
    {
      page: 1,
      itemsPerPage: 2,
    }
  );
  expect(titleTextBook1).toBeInTheDocument();
  expect(titleTextBook2).toBeInTheDocument();
});

test("fetches and renders books when paginating to a page", async () => {
  const store = createStore(getRootReducer());
  mockedAxios.post.mockResolvedValueOnce(BOOKS_REQUEST_PAGE_1);

  render(
    <Provider store={store}>
      <App booksPerPage={2} />
    </Provider>
  );

  const titleTextBook1 = await screen.findByText(/test title 1/i);
  expect(titleTextBook1).toBeInTheDocument();

  mockedAxios.post.mockResolvedValueOnce(BOOKS_REQUEST_PAGE_2);
  expect(mockedAxios.post).toBeCalledWith(
    "http://nyx.vima.ekt.gr:3000/api/books",
    {
      page: 1,
      itemsPerPage: 2,
    }
  );

  const pageTwoButton = screen.getByRole("button", {
    name: /Go to page 2/i,
  }) as HTMLButtonElement;
  pageTwoButton.click();

  const titleTextBook3 = await screen.findByText(/test title 3/i);
  expect(titleTextBook3).toBeInTheDocument();
  expect(mockedAxios.post).toBeCalledWith(
    "http://nyx.vima.ekt.gr:3000/api/books",
    {
      page: 2,
      itemsPerPage: 2,
    }
  );
});

test("fetches and renders books for that page from url", async () => {
  window.location.pathname = "/2";
  const store = createStore(getRootReducer());
  mockedAxios.post.mockResolvedValueOnce(BOOKS_REQUEST_PAGE_2);

  render(
    <Provider store={store}>
      <App booksPerPage={2} />
    </Provider>
  );

  await waitFor(() => {
    expect(mockedAxios.post).toBeCalledWith(
      "http://nyx.vima.ekt.gr:3000/api/books",
      {
        page: 2,
        itemsPerPage: 2,
      }
    );
  });
});

test("paginating to a page sets the page in the url", async () => {
  window.location.pathname = "/2";
  const store = createStore(getRootReducer());
  mockedAxios.post.mockResolvedValueOnce(BOOKS_REQUEST_PAGE_1);
  window.history.pushState = jest.fn();

  render(
    <Provider store={store}>
      <App booksPerPage={2} />
    </Provider>
  );

  const pageTwoButton = (await screen.findByRole("button", {
    name: /Go to page 1/i,
  })) as HTMLButtonElement;
  pageTwoButton.click();

  expect(window.history.pushState).toBeCalledWith({}, "", `/1`);
});
