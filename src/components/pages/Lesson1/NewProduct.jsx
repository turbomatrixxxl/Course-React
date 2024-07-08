import React from "react";
import PropTypes from "prop-types";

const NewProduct = (props) => (
  <div>
    <img src={props.imgUrl} alt={props.name} width="640" />
    <h2>Tacos With Lime</h2>
    <p>Price: {props.price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

NewProduct.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// În markup, componenta este scrisă ca o etichetă JSX.
// ReactDOM.createRoot(document.getElementById("root")).render(<Product />);

export default NewProduct;
