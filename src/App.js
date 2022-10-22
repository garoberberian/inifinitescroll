import { CircularProgress } from "@material-ui/core";
import React from "react";
import BooksHeader from "./components/BooksHeader";
import ListBooks from "./components/ListBooks";
import useSearchParams from "./hooks/useBooksSearch";
import useStyles from "./styles/styles.main";

function App() {
  const classes = useStyles();
  const { page, query, setQuery, setPage, books, loading, hasMore } =
    useSearchParams();
  const { mainContainer } = useStyles();
  return (
    <div className={mainContainer}>
      <BooksHeader setQuery={setQuery} />
      <ListBooks
        books={books}
        setPage={setPage}
        loading={loading}
        page={page}
        hasMore={hasMore}
        query={query}
      />
      <div className={classes.circularProgress}>
        {loading && <CircularProgress />}
      </div>
    </div>
  );
}

export default App;
