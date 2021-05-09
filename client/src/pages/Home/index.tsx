import { useEffect } from "react";
import { Wrapper, Container, CardsContainer } from "./HomeStyles";
import Card from "../../components/Card";
import Cart from "../../components/Cart";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchAllPizzas } from "../../app/pizzaSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const allPizzas = useAppSelector((state) => {
    return state.pizzas.allPizzas;
  });

  const cardList = allPizzas.map((pizza) => {
    return (
      <Card
        key={pizza.id}
        id={pizza.id}
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
      />
    );
  });

  useEffect(() => {
    dispatch(fetchAllPizzas());
    console.log(allPizzas);
  }, []);

  return (
    <Container>
      <Wrapper>
        <CardsContainer>{cardList}</CardsContainer>
      </Wrapper>
      <Cart />
    </Container>
  );
}
