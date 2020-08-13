import React from "react";
import { Route, Switch } from "react-router-dom";
import Store from "./Store/Store";
import Cart from "./Cart/Cart";
import Details from "./Store/Details";
import NotFound from "./NotFound";

const Section = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact>
          <Store />
        </Route>
        <Route path="/products" exact>
          <Store />
        </Route>
        <Route path="/products/:id">
          <Details />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </section>
  );
};
export default Section;
