import React, { useEffect, useState } from "react";
import axios from "axios";

function useSearchParams() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [isFirst, setIsFirst] = useState(true);
  const [loading, setLoading] = useState(false);
  const getBooks = async () => {
    const response = await axios({
      method: "get",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("error");
    }
  };

  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
    } else {
      setBooks([]);
      setHasMore(true);
    }
  }, [query]);

  useEffect(() => {
    setLoading(true);

    if (!hasMore) {
      setLoading(false);

      return;
    }

    getBooks().then((data) => {
      setLoading(false);
      const { docs, numFound } = data;
      const keyTitle = docs.map((doc) => {
        const { key, title } = doc;
        return {
          key,
          title,
        };
      });
      setBooks((prevBooks) => [...prevBooks, ...keyTitle]);

      if (!isFirst) {
        setHasMore(docs.length > 1);
      }
    });
  }, [page, query, hasMore]);

  return {
    page,
    query,
    setQuery,
    books,
    loading,
    setPage,
    hasMore,
  };
}

export default useSearchParams;
