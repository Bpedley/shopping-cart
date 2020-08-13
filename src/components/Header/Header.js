import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Header.module.scss";

const Header = ({ data }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(data.filter(item => item.count > 0).length);
  }, [data]);

  return (
    <header className={styles.header}>
      <ul>
        <li>
          <Link to="/">Товары</Link>
        </li>
        <li>
          <Link to="/cart">Корзина ({quantity})</Link>
        </li>
      </ul>
    </header>
  );
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, {})(Header);
