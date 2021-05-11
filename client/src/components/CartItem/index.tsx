import {
  Container,
  Counter,
  Img,
  Info,
  RemoveBtn,
  Title,
} from "./CartItemStyles";

type CartItemProps = {
  title: string;
  quantity: number;
};

export default function ({ title, quantity }: CartItemProps) {
  return (
    <Container>
      <Img src="https://via.placeholder.com/80" alt="image" />
      <Info>
        <Title>{title}</Title>
        <div>{quantity}</div>
        {/* <Counter type="number" /> */}
      </Info>
      <RemoveBtn>X</RemoveBtn>
    </Container>
  );
}
