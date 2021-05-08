import styled from "styled-components";

export const Sidebar = styled.div`
  order: 2;
  height: 100vh;
  width: 400px;
  background-color: #eef0ee;
  /* position: absolute; */
  /* position: fixed; */
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: space-between;
`;

export const CartTop = styled.div``;

export const CartBottom = styled.div``;

export const Total = styled.p`
  font-size: 1.5rem;
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

// red color: #C30F0E
