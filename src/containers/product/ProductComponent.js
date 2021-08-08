import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CardActions, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

const ProductComponent = () => {

  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product, { onAddToCart }) => {
    const { id, title, image, price, category } = product;

    return (

      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
        <CardActions >
          <IconButton aria-label='Add to Card' onClick={() => onAddToCart(product.id, 1)}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
