import {
  CartBottom,
  CartTop,
  CheckoutBtn,
  Container,
  Sidebar,
  Total,
} from "./CartStyles";
import CartItem from "../CartItem";

export default function () {
  return (
    <Sidebar>
      <Container>
        <CartTop>
          <CartItem />
          <CartItem />
          <CartItem />
        </CartTop>
        <CartBottom>
          <Total>Total: $10.99</Total>
          <CheckoutBtn>Checkout</CheckoutBtn>
        </CartBottom>
      </Container>
    </Sidebar>
  );
}
