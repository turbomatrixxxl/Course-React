import React from "react";
import PropTypes from "prop-types";

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.name}</li>
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.object.isRequired,
};

export default BookList;
