import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@material-ui/core";

import { Props } from "./types";
import useStyles from "./styles";

const Body: React.FunctionComponent<Props> = ({ books, isLoading }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {isLoading && <CircularProgress className={classes.loader} />}
      {books && (
        <List>
          {books.map((book) => (
            <ListItem key={book.id}>
              <ListItemText
                primary={book.book_title}
                secondary={book.book_author}
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Body;
