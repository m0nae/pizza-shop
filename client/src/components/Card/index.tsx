import { useState } from "react";
import {
  Container,
  ImageContainer,
  InfoContainer,
  Ingredients,
} from "./CardStyles";
import { addToCart, removeFromCart } from "../../app/pizzaSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";

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
    <li key={index + 10}>{ingredient}</li>
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
        <img src={image} alt="photo of pizza" />
      </ImageContainer>
      <InfoContainer>
        <p>{name}</p>
        <p>{price}</p>
        <div onClick={handleShowIngredients}>Ingredients</div>
        <Ingredients showIngredients={showIngredients}>
          {ingredientsList}
        </Ingredients>
        <CartBtn
          isInCart={isInCart()}
          onClick={isInCart() ? dispatchRemoveFromCart : dispatchAddToCart}
        />
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
    <button onClick={onClick}>{isInCart ? "Remove Order" : "Order"}</button>
  );
}
