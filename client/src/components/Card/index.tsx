import { Container } from "./CardStyles";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../app/pizzaSlice";
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
  const dispatchRemoveFromCart = () => {
    return dispatch(removeFromCart(id));
  };
  const dispatchDecreaseQuantity = () => {
    return dispatch(decreaseQuantity(id));
  };
  const dispatchIncreaseQuantity = () => {
    return dispatch(increaseQuantity(id));
  };

  return (
    <Container>
      <p>{name}</p>
      <p>{price}</p>
      <div>{ingredientsList}</div>
      <CartBtn onClick={dispatchAddToCart} />
      <RemoveCartBtn onClick={dispatchRemoveFromCart} />
      <Decrease onClick={dispatchDecreaseQuantity} />
      <Increase onClick={dispatchIncreaseQuantity} />
    </Container>
  );
}

type CartBtnProps = {
  onClick: () => void;
};

export function CartBtn({ onClick }: CartBtnProps) {
  return <button onClick={onClick}>Add To Cart</button>;
}

export function RemoveCartBtn({ onClick }: CartBtnProps) {
  return <button onClick={onClick}>Remove From Cart</button>;
}

export function Increase({ onClick }: CartBtnProps) {
  return <button onClick={onClick}>Increase Item Quantity</button>;
}

export function Decrease({ onClick }: CartBtnProps) {
  return <button onClick={onClick}>Decrease Item Quantity</button>;
}
