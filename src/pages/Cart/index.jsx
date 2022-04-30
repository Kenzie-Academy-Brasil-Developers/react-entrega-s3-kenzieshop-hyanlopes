import { GoHome } from "react-icons/go";
import { useHistory } from "react-router-dom";
import { ContainerCart } from "./style";
import { useSelector } from "react-redux";
import ProductCart from "../../components/ProductCart";
const Cart = () => {
  const productCart = useSelector(({ cart }) => cart);
  const history = useHistory();
  return (
    <ContainerCart>
      <header className="headerCart">
        <h1>Kenzie Shop</h1>
        <p className="goHome" onClick={() => history.push("/")}>
          <GoHome />
          Home
        </p>
      </header>
      <main className="mainCart">
        <section className="sectionCart">
          <div>
            <h3>Preço Total</h3>
            <p>
              R${" "}
              {productCart.length > 0 &&
                productCart.reduce((acc, e) => acc + e.preco, 0)}
            </p>
          </div>
          {productCart.length > 0 ? (
            productCart.map((e) => <ProductCart product={e} />)
          ) : (
            <></>
          )}
        </section>
      </main>
    </ContainerCart>
  );
};
export default Cart;
