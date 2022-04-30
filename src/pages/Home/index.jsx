import { useSelector } from "react-redux";
import Product from "../../components/Product";
import { ContainerHome } from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const Home = () => {
  const products = useSelector(({ products }) => products);
  const history = useHistory();
  return (
    <ContainerHome>
      <header className="headerHome">
        <h1>Kenzie Shop</h1>
        <p className="goCart" onClick={() => history.push("/cart")}>
          <AiOutlineShoppingCart />
          Carrinho
        </p>
      </header>
      <main className="mainHome">
        <section className="sectionHome">
          {products.map((e) => (
            <Product product={e} />
          ))}
        </section>
      </main>
    </ContainerHome>
  );
};
export default Home;
