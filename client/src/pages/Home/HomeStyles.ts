import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  // width will dynamically change when the sidebar is toggled on and off
  // when toggled off, the width will just be 90vw (?)
  // and set the width to actual px (not vw) and use breakpoints
  width: calc(100vw - 400px);
  padding-top: 1rem;
  order: 1;
`;

export const CardsContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  margin: 0 auto;
  max-width: 90%;
  width: 90%;
`;
