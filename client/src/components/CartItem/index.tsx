import {
  Container,
  Counter,
  CounterBtn,
  Img,
  Info,
  RemoveBtn,
  Title,
} from "./CartItemStyles";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../app/pizzaSlice";

type CartItemProps = {
  id: number;
  title: string;
  quantity: number;
};

export default function ({ id, title, quantity }: CartItemProps) {
  const dispatch = useDispatch();

  const dispatchDecreaseQuantity = () => {
    return dispatch(decreaseQuantity(id));
  };

  const dispatchIncreaseQuantity = () => {
    return dispatch(increaseQuantity(id));
  };

  const dispatchRemoveFromCart = () => {
    return dispatch(removeFromCart(id));
  };

  return (
    <Container>
      <Img src="https://via.placeholder.com/80" alt="image" />
      <Info>
        <Title>{title}</Title>
        <Counter>
          <CounterBtn onClick={dispatchDecreaseQuantity}>-</CounterBtn>
          <div>{quantity}</div>
          <CounterBtn onClick={dispatchIncreaseQuantity}>+</CounterBtn>
        </Counter>
      </Info>
      <RemoveBtn onClick={dispatchRemoveFromCart}>X</RemoveBtn>
    </Container>
  );
}
