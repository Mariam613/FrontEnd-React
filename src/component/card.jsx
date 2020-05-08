import React from "react";
import { Link } from "react-router-dom";
const Card = props => {
  return (
    <div className="item-medium-1">
      {props.product.discount && (
        <div className="item-medium-1__alert">Sale</div>
      )}
      <div
        className="item-medium-1__image image"
        style={{
          backgroundImage: "url('img/products/product-grey-1.jpg')"
        }}
      >
        <a href="#" className="item-medium-1__action">
          Add to Cart
        </a>
      </div>
      <a href="#">
        <h5>{props.product.name}</h5>
        <div className="flex-row">
          <div>
            {(props.product.discount && (
              <React.Fragment>
                <del>{props.product.price} $</del>
                <span className="lable">
                  {props.product.price - props.product.discount} $
                </span>
              </React.Fragment>
            )) || <span className="lable">{props.product.price} $</span>}
          </div>
        </div>
      </a>
      <div className="crud-actions">
        <Link to={`/detailsproduct/${props.product.id}`}>
          <i className="far fa-eye"></i>
        </Link>
        <Link to={`/editproduct/${props.product.id}`}>
          <i className="fas fa-edit"></i>
        </Link>
        <a onClick={() => props.onDelete(props.product.id)} href="#">
          <i className="fas fa-trash-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
