import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The way of kings", id: 1 },
    { title: "The way of the wind", id: 2 },
    { title: "Disaster Class Hero", id: 3 },
    { title: "Updater", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
