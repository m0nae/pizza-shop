import styled from "styled-components";

interface Props {
  isCartOpen?: boolean;
}

export const Container = styled.div`
  display: flex;
  max-width: 1500px;
  margin: 0 auto;
`;

export const Header = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 5rem;
  font-weight: 800;
  color: #d72d2c;
  line-height: 1;
  align-self: flex-start;

  @media (max-width: 380px) {
    font-size: clamp(3rem, 20vw, 4rem);
  }
`;

export const Description = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: #5f5f5f;
  margin-bottom: 2rem;
  align-self: flex-start;

  @media (max-width: 380px) {
    font-size: clamp(1.3rem, 7vw, 2rem);
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid whitesmoke;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media (max-width: 800px) {
    position: fixed;
  }
`;

export const NavLeft = styled.div``;

export const NavRight = styled.div``;

export const CartIcon = styled.div`
  cursor: pointer;
  /* border: 1px solid whitesmoke;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center; */

  > * {
    font-size: 1.4rem;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid whitesmoke;
    background-color: #fff;
    line-height: 28px;
    vertical-align: middle;
    padding: 8px;
  }
`;

export const Wrapper = styled.div`
  // width will dynamically change when the sidebar is toggled on and off
  // when toggled off, the width will just be 90vw (?)
  // and set the width to actual px (not vw) and use breakpoints
  /* width: calc(100vw - 400px); */
  width: ${(props: Props) =>
    props.isCartOpen ? "calc(100vw - 400px)" : "100vw"};

  order: 1;

  transition: width 0.3s ease-in-out;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  padding-top: 3rem;

  margin: 0 auto;
  width: 75%;

  @media (max-width: 930px) {
    width: 60%;
  }

  @media (max-width: 800px) {
    margin-top: 4rem;
  }

  @media (max-width: 500px) {
    width: 76%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-self: center;
  align-self: center;
  > div {
    align-self: center;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 600;
  color: #d72d2c;
  font-size: 1.5rem;
  margin-top: 3rem;
`;
