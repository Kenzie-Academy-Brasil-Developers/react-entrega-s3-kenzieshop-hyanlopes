import { Container } from "./style";
import { useDispatch } from "react-redux";
import { removeToCartThunk } from "../../store/modules/Cart/thunk";
import { BsFillTrashFill } from "react-icons/bs";
import { toast } from "react-toastify";
const ProductCart = ({ product }) => {
  const dispach = useDispatch();
  return (
    <Container>
      <img src={product.imagem} alt={product.name} />
      <h2>{product.nome}</h2>
      <p>R$ {product.preco},00</p>
      <p className="RemoveCart">
        <BsFillTrashFill
          onClick={() => {
            dispach(removeToCartThunk(product.id));
            toast.success("Removido com sucesso!");
          }}
        ></BsFillTrashFill>
      </p>
    </Container>
  );
};
export default ProductCart;
