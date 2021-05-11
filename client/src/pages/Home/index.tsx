import { useEffect } from "react";
import {
  Wrapper,
  Container,
  CardsContainer,
  Navbar,
  CartIcon,
  NavLeft,
  NavRight,
} from "./HomeStyles";
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
        image="https://via.placeholder.com/370"
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
        <Navbar>
          <NavLeft></NavLeft>
          <NavRight>
            <CartIcon>
              <i className="fas fa-shopping-cart"></i>
            </CartIcon>
          </NavRight>
        </Navbar>
        <CardsContainer>{cardList}</CardsContainer>
      </Wrapper>
      <Cart />
    </Container>
  );
}
