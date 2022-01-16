import "./product-item.css";

const ProductItem = () => {
  return (
    <div className="product-item">
      <div className="product-item-website">
        <div className="product-item-browser">
          <div className="product-item-circle"></div>
          <div className="product-item-circle"></div>
          <div className="product-item-circle"></div>
        </div>
        <a href="https://google.com" target="_blank" rel="noreferrer">
          <img src="/images/farshe-ma.png" alt="" className="product-item-image" />
        </a>
      </div>
      <div className="product-item-info">
          <h4 className="product-item-title">فروشگاه فرش ما</h4>
          <div className="product-item-techs">تکنولوژی های استفاده شده در این پروژه:</div>
          <ul className="product-item-techs-list">
              <li className="product-item-tech">ReactJS</li>
              <li className="product-item-tech">ReduxJS</li>
              <li className="product-item-tech">ExpressJS</li>
              <li className="product-item-tech">MongoDB</li>
          </ul>
           <a className="product-item-goto-site" href="https://google.com" target="_blank" rel="noreferrer">
               نمایش 
           </a>
      </div>
    </div>
  );
};

export default ProductItem;
