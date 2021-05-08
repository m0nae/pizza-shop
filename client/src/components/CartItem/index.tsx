import {
  Container,
  Counter,
  Img,
  Info,
  RemoveBtn,
  Title,
} from "./CartItemStyles";

export default function () {
  return (
    <Container>
      <Img src="https://via.placeholder.com/80" alt="image" />
      <Info>
        <Title>Pepperoni Pizza</Title>
        <Counter type="number" />
      </Info>
      <RemoveBtn>X</RemoveBtn>
    </Container>
  );
}
