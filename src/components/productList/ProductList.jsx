import ProductItem from "../productItem/ProductItem";
import "./product-list.css";
import ThemeContext from "../../context/index";
import { useContext } from "react";

const ProductList = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="product-list">
      <h6
        style={{
          color: darkMode && "#FFF",
          borderBottomColor: darkMode && "#FFF",
        }}
        className="product-list-title"
      >
        نمونه کارها
      </h6>
      <div className="product-list-wrapper">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  );
};

export default ProductList;
