import React from "react";
import PropTypes from "prop-types";

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  ));
  console.log(listItems);
  return <ul>{listItems}</ul>;
}

ListItem.propTypes = {
  numbers: PropTypes.array.isRequired,
};

export default NumberList;
