import { Container, ImageContainer, InfoContainer } from "./CardStyles";
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
  const ingredientsList = ingredients?.map((ingredient, index) => (
    <p key={index}>{ingredient}</p>
  ));

  const dispatch = useDispatch();
  const dispatchAddToCart = () => {
    return dispatch(addToCart(id));
  };
  const dispatchRemoveFromCart = () => {
    return dispatch(removeFromCart(id));
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
        <div>{ingredientsList}</div>
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
