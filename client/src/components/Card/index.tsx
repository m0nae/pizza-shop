import { useState } from "react";
import {
  Container,
  ImageContainer,
  InfoContainer,
  Ingredients,
  IngredientsList,
  Button,
  CardBottom,
  Title,
  Price,
  InfoTop,
  InfoBottom,
} from "./CardStyles";
import { addToCart, removeFromCart } from "../../app/pizzaSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { v4 as uuid } from "uuid";

type CardProps = {
  name: string;
  image: string;
  price: number;
  ingredients: string[];
  id: number;
};

export default function ({ name, image, price, ingredients, id }: CardProps) {
  const [showIngredients, setShowIngredients] = useState(false);
  const ingredientsList = ingredients?.map((ingredient, index) => (
    <li key={uuid()}>{ingredient}</li>
  ));

  const dispatch = useDispatch();
  const dispatchAddToCart = () => {
    return dispatch(addToCart(id));
  };
  const dispatchRemoveFromCart = () => {
    return dispatch(removeFromCart(id));
  };

  const handleShowIngredients = () => {
    setShowIngredients(!showIngredients);
  };

  const cart = useAppSelector((state) => state.pizzas.cart);

  const isInCart = (): boolean => {
    let item = cart.find((pizza) => pizza.id === id);

    if (item) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Container>
      <ImageContainer>
        <img src={image} alt="pepperoni pizza" width="370" height="180" />
      </ImageContainer>
      <InfoContainer>
        <InfoTop>
          <Title>{name}</Title>
          <Ingredients onClick={handleShowIngredients}>
            <p>Ingredients</p>
            {showIngredients ? (
              <i className="fas fa-caret-down"></i>
            ) : (
              <i className="fas fa-caret-right"></i>
            )}
          </Ingredients>
          <IngredientsList showIngredients={showIngredients}>
            <ul>{ingredientsList}</ul>
          </IngredientsList>
        </InfoTop>
        <InfoBottom>
          <CardBottom>
            <Price>${price}</Price>
            <CartBtn
              isInCart={isInCart()}
              onClick={isInCart() ? dispatchRemoveFromCart : dispatchAddToCart}
            />
          </CardBottom>
        </InfoBottom>
      </InfoContainer>
    </Container>
  );
}

type BtnProps = {
  onClick: () => void;
  isInCart?: boolean;
};

export function CartBtn({ onClick, isInCart }: BtnProps) {
  return (
    <Button onClick={onClick}>
      {isInCart ? "Added To Cart" : "Add To Cart"}
    </Button>
  );
}
