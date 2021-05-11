import { Container } from "./CardStyles";
import { addToCart, removeFromCart } from "../../app/pizzaSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";

type CardProps = {
  name: string;
  price: number;
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
  const dispatchRemoveFromCart = () => {
    return dispatch(removeFromCart(id));
  };

  const cart = useAppSelector((state) => state.pizzas.cart);

  const isInCart = (): boolean => {
    let item = cart.find((pizza) => pizza.id === id);

    if (item) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Container>
      <p>{name}</p>
      <p>{price}</p>
      <div>{ingredientsList}</div>
      <CartBtn
        isInCart={isInCart()}
        onClick={isInCart() ? dispatchRemoveFromCart : dispatchAddToCart}
      />
    </Container>
  );
}

type BtnProps = {
  onClick: () => void;
  isInCart?: boolean;
};

export function CartBtn({ onClick, isInCart }: BtnProps) {
  return (
    <button onClick={onClick}>{isInCart ? "Remove Order" : "Order"}</button>
  );
}
