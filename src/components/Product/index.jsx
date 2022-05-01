import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../store/modules/Cart/thunk";
import { Container } from "./style";
const Product = ({ product }) => {
  const dispach = useDispatch();
  return (
    <Container>
      <img src={product.imagem} alt={product.nome} />
      <h2>{product.nome}</h2>
      <p>R$ {product.preco},00</p>
      <button
        onClick={() => {
          dispach(addToCartThunk(product));
        }}
      >
        Adicionar ao carrinho
      </button>
    </Container>
  );
};
export default Product;
