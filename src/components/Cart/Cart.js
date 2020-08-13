import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { increment, decrement, removeItem } from "../../actions";
import CartItem from "./CartItem";
import styles from "./Cart.module.scss";

const Cart = ({ data, increment, decrement, removeItem }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const iItemsInCart = () => {
      const cartItems = data.filter(i => i.count > 0);
      const totalPrice = cartItems
        .reduce((total, item) => total + item.price * item.count, 0)
        .toFixed(2);
      setTotalPrice(totalPrice);
      setCartItems(cartItems);
    };
    iItemsInCart();
  }, [data]);

  return (
    <div className={styles.cart}>
      {!cartItems.length ? (
        <h1 className={styles.cart__empty}>Корзина пустая</h1>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              data={item}
              increment={increment}
              decrement={decrement}
              removeItem={removeItem}
            />
          ))}
          <p className={styles.cart__total}>Всего: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, {
  increment,
  decrement,
  removeItem
})(Cart);
