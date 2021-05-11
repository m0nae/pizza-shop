import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const NavLeft = styled.div``;

export const NavRight = styled.div``;

export const CartIcon = styled.div`
  cursor: pointer;
  border: 1px solid whitesmoke;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    font-size: 1.5rem;
  }
`;

export const Wrapper = styled.div`
  // width will dynamically change when the sidebar is toggled on and off
  // when toggled off, the width will just be 90vw (?)
  // and set the width to actual px (not vw) and use breakpoints
  width: calc(100vw - 400px);
  order: 1;
`;

export const CardsContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  padding-top: 1rem;
  margin: 0 auto;
  max-width: 90%;
  width: 90%;
`;
