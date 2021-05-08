import { Wrapper, Container, CardsContainer } from "./HomeStyles";
import Card from "../../components/Card";
import Cart from "../../components/Cart";

export default function () {
  return (
    <Container>
      <Wrapper>
        <CardsContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardsContainer>
      </Wrapper>
      <Cart />
    </Container>
  );
}
