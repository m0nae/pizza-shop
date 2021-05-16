import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border: 1px solid whitesmoke;
  border-radius: 5px;
  width: 330px;
  min-height: 320px;
  display: inline-block;
  vertical-align: top;
  margin-right: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem 1.3rem;
  min-height: 143px;
`;

export const InfoTop = styled.div``;

export const InfoBottom = styled.div``;

export const ImageContainer = styled.div`
  width: 100%;
  height: 45%;
  max-height: 143px;
  overflow: hidden;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  align-self: center;
`;

interface Props {
  showIngredients: boolean;
}

export const Ingredients = styled.div`
  margin-top: 0.2rem;
  display: flex;
  font-size: 0.9rem;

  > i {
    font-size: 0.8rem;
    align-self: center;
    line-height: 5px;
    margin-left: 0.45rem;
  }
`;

export const IngredientsList = styled.div`
  display: ${(props: Props) => (props.showIngredients ? "unset" : "none")};

  > ul {
    margin-top: 0.2rem;
    margin-left: 1.7rem;

    > li {
      font-size: 0.85rem;
    }
  }
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-self: center;
`;

export const Button = styled.button`
  background-color: #d61600;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.1rem;
`;
