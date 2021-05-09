import { Container } from "./CardStyles";
import { addToCart } from "../../app/pizzaSlice";
import { useDispatch } from "react-redux";

type CardProps = {
  name: string;
  price: string;
  ingredients: string[];
  id: number;
};

export default function ({ name, price, ingredients, id }: CardProps) {
  const ingredientsList = ingredients?.map((ingredient, index) => (
    <p key={index}>{ingredient}</p>
  ));

  const dispatch = useDispatch();
  const dispatchAddToCart = () => {
    return dispatch(addToCart(id));
  };

  return (
    <Container>
      <p>{name}</p>
      <p>{price}</p>
      <div>{ingredientsList}</div>
      <CartBtn onClick={dispatchAddToCart} />
    </Container>
  );
}

type CartBtnProps = {
  onClick: () => void;
};

export function CartBtn({ onClick }: CartBtnProps) {
  return <button onClick={onClick}>Add To Cart</button>;
}
