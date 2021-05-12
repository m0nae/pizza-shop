import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  /* border: 1px solid whitesmoke; */
  border: 1px solid whitesmoke;
  border-radius: 5px;
  width: 370px;
  min-height: 320px;
  display: inline-block;
  vertical-align: top;
  margin-right: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  margin: 1rem;
  min-height: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 45%;
  max-height: 143px;
  overflow: hidden;
`;

interface Props {
  showIngredients: boolean;
}

export const Ingredients = styled.div`
  display: ${(props: Props) => (props.showIngredients ? "unset" : "none")};
  /* height: fit-content; */
`;
