import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import styles from "./CartItem.module.scss";

const CartItem = ({ data, increment, decrement, removeItem }) => {
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__img}
        src={process.env.PUBLIC_URL + data.img}
        alt={data.title}
      />
      <div className={styles.cartItem__info}>
        <Link className={styles.cartItem__model} to={`/products/${data.id}`}>
          {data.title}
        </Link>
        <p className={styles.cartItem__company}>{data.company}</p>
        <p className={styles.cartItem__price}>${data.price}</p>
        <button
          className={styles.cartItem__delete}
          onClick={() => removeItem(data.id)}
        >
          Удалить
        </button>
      </div>
      <div className={styles.cartItem__quantity}>
        <button onClick={() => increment(data.id)}>
          <i className="fa fa-angle-up"></i>
        </button>
        <p className={styles.cartItem__number}>{data.count}</p>
        <button onClick={() => decrement(data.id)}>
          <i className="fa fa-angle-down"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
