import { Container } from "./CardStyles";

type CardProps = {
  title: string;
  price: string;
  ingredients: string[];
};

export default function ({ title, price, ingredients }: CardProps) {
  const ingredientsList = ingredients.map((ingredient, index) => (
    <p key={index}>{ingredient}</p>
  ));

  return (
    <Container>
      <p>{title}</p>
      <p>{price}</p>
      <div>{ingredientsList}</div>
    </Container>
  );
}
