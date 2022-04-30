import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={"/cart"}>
        <Cart />
      </Route>
    </Switch>
  );
};
export default Routes;
