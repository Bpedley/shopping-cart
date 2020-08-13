import React from "react";
import { Link } from "react-router-dom";
import styles from "./StoreItem.module.scss";

const StoreItem = ({ data, addItem }) => {
  return (
    <div className={styles.item}>
      <Link className={styles.item__link} to={`/products/${data.id}`}>
        <img src={data.img} alt={data.title} />
        {data.title}
      </Link>
      <p className={styles.item__price}>${data.price}</p>
      <button
        onClick={() => addItem(data.id)}
        className={styles.item__btn}
        disabled={data.count}
      >
        {data.count ? "В корзине" : "Добавить в корзину"}
      </button>
    </div>
  );
};

export default StoreItem;
