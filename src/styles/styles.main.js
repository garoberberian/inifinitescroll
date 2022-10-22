import { red } from "@material-ui/core/colors";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  inputContainer: {
    textAlign: "center",
    padding: 20,
    "& .MuiInputBase-input": {
      color: "blue",
    },
  },

  bold: {
    fontSize: 30
  },

  mainContainer: {
    height: 400,
    width: 400,
    overflow: "scroll",
    overflowX: "hidden",
    backgroundColor: "lightblue",
    borderRadius: 10,

    "&::-webkit-scrollbar": {
      width: 16,
      marginLeft: 20,
    },

    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px grey",
      borderRadius: 8,
    },

    "&::-webkit-scrollbar-thumb": {
      background: "gray",
      height: 30,
      borderRadius: 10,
    },
  },
  ul: {
    listStyleType: "none",
    color: "blue",
    "& li": {
      padding: 10,
      fontSize: 20,
    },
  },
  circularProgress: {
    textAlign: "center",
    "& .MuiCircularProgress-svg": {
      color: "yellow",
    },
  },
});

export default useStyles;
