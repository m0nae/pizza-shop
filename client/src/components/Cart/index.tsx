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
          <CartItem title="Pepperoni" quantity={21} />
        </CartTop>
        <CartBottom>
          <Total>Total: $10.99</Total>
          <CheckoutBtn>Checkout</CheckoutBtn>
        </CartBottom>
      </Container>
    </Sidebar>
  );
}
