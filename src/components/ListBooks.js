import React, { useCallback, useEffect, useRef } from "react";
import useStyles from "../styles/styles.main";

function ListBooks(props) {
  const { books, setPage, loading, page, hasMore, query } = props;
  const observer = useRef();
  const { ul, bold } = useStyles();
  const cb = useCallback(
    (node) => {
      if (loading) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((page) => page + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading]
  );

  useEffect(() => {}, []);
  return (
    <ul className={ul}>
      {books.map((book, index) => {
        if (index === books.length - 1) {
          return (
            <li key={book.key} ref={cb}>
              {book.title}
            </li>
          );
        }
        return (
          <li key={book.key}>
            {book.title.split("").map((letter, index) => {
              if (query.includes(letter.toLowerCase())) {
                return <mark key={index}>{letter}</mark>;
              } else {
                return letter;
              }
            })}
          </li>
        );
      })}
    </ul>
  );
}

export default ListBooks;
