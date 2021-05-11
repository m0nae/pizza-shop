import styled from "styled-components";

export const Sidebar = styled.div`
  order: 2;
  height: 100vh;
  width: 400px;
  background-color: #eef0ee;
  position: fixed;
  right: 0;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: space-between;
`;

export const CartTop = styled.div`
  overflow-y: auto;
  height: 100%;
`;

export const CartBottom = styled.div`
  margin-top: 1rem;
`;

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
