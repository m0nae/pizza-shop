import {
  CartBottom,
  CartTop,
  CheckoutBtn,
  CloseIcon,
  Container,
  Sidebar,
  Total,
} from "./CartStyles";
import CartItem from "../CartItem";
import { toggleCart } from "../../app/pizzaSlice";
import { PizzaI } from "../../types";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";

export interface CartProps {
  isCartOpen: boolean;
}

export default function ({ isCartOpen }: CartProps) {
  const dispatch = useDispatch();
  const cartItems = useAppSelector((state) => state.pizzas.cart);
  const reducer = (accumulator: number, currentValue: PizzaI): number => {
    const price = currentValue.price * currentValue.quantity;
    return accumulator + price;
  };
  const cartTotal = cartItems.reduce(reducer, 0).toFixed(2);
  const cartItemsList = cartItems.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        title={item.name}
        quantity={item.quantity}
      />
    );
  });

  const dispatchCloseCart = () => {
    dispatch(toggleCart(false));
  };

  return (
    <Sidebar isCartOpen={isCartOpen}>
      <Container>
        <CloseIcon onClick={dispatchCloseCart}>
          <i className="fas fa-times"></i>
        </CloseIcon>
        <CartTop>{cartItemsList}</CartTop>
        <CartBottom>
          <Total>Total: ${cartTotal}</Total>
          <CheckoutBtn>Checkout</CheckoutBtn>
        </CartBottom>
      </Container>
    </Sidebar>
  );
}
