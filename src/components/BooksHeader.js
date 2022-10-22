import { TextField } from "@material-ui/core";
import React from "react";
import useDebounce from "../hooks/useDebounce";
import useStyles from "../styles/styles.main";

function BooksHeader(props) {
  const { inputContainer } = useStyles();
  const { setQuery } = props;
  const handleInputChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const returnedFunc = useDebounce(handleInputChange, 500);

  return (
    <div className={inputContainer}>
      <TextField
        type="text"
        size="small"
        variant="outlined"
        onChange={returnedFunc}
      />
    </div>
  );
}

export default BooksHeader;
