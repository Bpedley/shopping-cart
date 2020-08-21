import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../actions";
import styles from "./Details.module.scss";

const Details = ({ match: { params }, data, addItem }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    function getItem() {
      let res;
      if (params.id) {
        const newData = [...data];
        res = newData.filter(i => {
          return +i.id === +params.id;
        });
      }
      setItem(...res);
    }

    getItem();
  }, [params.id, data]);

  return (
    <div className={styles.details}>
      <img
        className={styles.details__img}
        src={process.env.PUBLIC_URL + item.img}
        alt={item.title}
      />
      <div className={styles.details__info}>
        <div className={styles.details__desc}>
          <h1 className={styles.details__model}>{item.title}</h1>
          <p className={styles.details__company}>{item.company}</p>
          <p>{item.info}</p>
          <p className={styles.details__price}>${item.price}</p>
        </div>
        <button
          className={styles.details__btn}
          onClick={() => addItem(item.id)}
          disabled={item.count}
        >
          {item.count ? "В корзине" : "Добавить в корзину"}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.data
});

const DetailsWithRouter = withRouter(Details);

export default connect(mapStateToProps, {
  addItem
})(DetailsWithRouter);
