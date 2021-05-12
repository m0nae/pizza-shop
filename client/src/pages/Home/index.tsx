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
import { useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchAllPizzas, toggleCart } from "../../app/pizzaSlice";

export default function Home() {
  const appDispatch = useAppDispatch();
  const dispatch = useDispatch();
  const allPizzas = useAppSelector((state) => {
    return state.pizzas.allPizzas;
  });
  const isCartOpen = useAppSelector((state) => {
    return state.pizzas.isCartOpen;
  });

  const dispatchToggleCart = () => {
    return dispatch(toggleCart(null));
  };

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
    appDispatch(fetchAllPizzas());
  }, []);

  return (
    <Container>
      <Wrapper isCartOpen={isCartOpen}>
        <Navbar>
          <NavLeft></NavLeft>
          <NavRight>
            <CartIcon onClick={dispatchToggleCart}>
              <i className="fas fa-shopping-cart"></i>
            </CartIcon>
          </NavRight>
        </Navbar>
        <CardsContainer>{cardList}</CardsContainer>
      </Wrapper>
      <Cart isCartOpen={isCartOpen} />
    </Container>
  );
}
