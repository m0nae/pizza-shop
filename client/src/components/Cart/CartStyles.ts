import styled from "styled-components";
import { CartProps } from "./index";

export const Sidebar = styled.div`
  order: 2;
  height: 100vh;
  width: ${(props: CartProps) => (props.isCartOpen ? "400px" : "0px")};
  background-color: #eef0ee;
  position: fixed;
  right: 0;

  transition: width 0.3s ease-in-out;

  @media (max-width: 800px) {
    width: ${(props: CartProps) => (props.isCartOpen ? "100vw" : "0px")};
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem 2rem 2rem;
  justify-content: space-between;
  position: relative;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;

  > * {
    font-size: 2rem;
  }
`;

export const CartTop = styled.div`
  overflow-y: auto;
  scrollbar-color: red;
  height: 100%;
`;

export const CartBottom = styled.div`
  margin-top: 1rem;
`;

export const TotalContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const Total = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-right: 0.7rem;
`;

export const Price = styled(Total)`
  font-weight: 600;
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  background-color: #c30f0e;
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 1rem 0.5rem;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
`;
