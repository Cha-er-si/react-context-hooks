import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>The way of kings</li>
        <li style={{ background: theme.ui }}>The way of the wind</li>
        <li style={{ background: theme.ui }}>Disaster Class Hero</li>
      </ul>
    </div>
  );
};

export default BookList;
