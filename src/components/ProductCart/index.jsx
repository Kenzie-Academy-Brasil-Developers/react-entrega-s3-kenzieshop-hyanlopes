import { Container } from "./style";

const ProductCart = ({ product }) => {
  return (
    <Container>
      <img src={product.imagem} alt={product.name} />
      <h2>{product.nome}</h2>
      <p>R$ {product.preco},00</p>
    </Container>
  );
};
export default ProductCart;
