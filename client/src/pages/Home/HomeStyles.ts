import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  // width will dynamically change when the sidebar is toggled on and off
  // when toggled off, the width will just be 90vw
  // and set the width to actual px (not vw)
  // and just use breakpoints. dealing with vw is way too complex
  width: calc(83vw - 400px);
  margin: 0 auto;
  padding-top: 1rem;
  order: 1;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin: 0 auto;
  align-content: flex-start;
  justify-content: space-between; */
  /* align-content: flex-start; */
`;
