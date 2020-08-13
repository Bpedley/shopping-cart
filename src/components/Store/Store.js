import React from "react";
import { connect } from "react-redux";
import StoreItem from "./StoreItem";
import { addItem } from "../../actions/index";
import styles from "./Store.module.scss";

const Store = ({ data, addItem }) => {
  return (
    <div className={styles.store}>
      <h2 className={styles.store__heading}>Товары</h2>
      <div className={styles.store__header}>
        <span className={styles.store__quantity}>8 предметов</span>
        <input className={styles.store__input} placeholder="поиск"></input>
      </div>
      <div className={styles.store__grid}>
        {data.map(item => (
          <StoreItem key={item.id} data={item} addItem={addItem} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, {
  addItem
})(Store);
