import PropTypes from "prop-types";

const Product = ({ imgUrl, name, price }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>Tacos With Lime</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to my cart</button>
  </div>
);

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// În markup, componenta este scrisă ca o etichetă JSX.
// ReactDOM.createRoot(document.getElementById("root")).render(<Product />);

export default Product;
