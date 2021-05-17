import {
  Container,
  Counter,
  CounterBtn,
  CounterIncreaseBtn,
  Img,
  ImgContainer,
  Info,
  RemoveBtn,
  Title,
} from "./CartItemStyles";
import { GrAdd } from "react-icons/gr";

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
      <ImgContainer>
        <Img
          src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80"
          height="80"
          alt="peperoni pizza"
        />
      </ImgContainer>
      <Info>
        <Title>{title}</Title>
        <Counter>
          <CounterBtn onClick={dispatchDecreaseQuantity} />
          <div>{quantity}</div>
          <CounterIncreaseBtn as={GrAdd} onClick={dispatchIncreaseQuantity} />
        </Counter>
      </Info>
      <RemoveBtn onClick={dispatchRemoveFromCart}>X</RemoveBtn>
    </Container>
  );
}
