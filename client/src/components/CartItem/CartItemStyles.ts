import styled from "styled-components";
import { GrSubtract } from "react-icons/gr";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #fff;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  position: relative;
`;

export const ImgContainer = styled.div`
  max-width: 80px;
  overflow: hidden;
  margin-right: 1rem;
  margin-bottom: 0;
  height: 80px;
`;

export const Img = styled.img`
  height: 80px;
`;

export const Info = styled.div`
  height: 80%;
`;

export const Title = styled.div`
  font-weight: 700;
  margin-bottom: 1rem;
`;
export const Counter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const RemoveBtn = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.8rem;
  cursor: pointer;
`;

export const CounterBtn = styled(GrSubtract)`
  font-size: 1.5rem;
  border-radius: 3px;
  padding: 0.3rem;
  margin-right: 0.7rem;
  border: 2px solid whitesmoke;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
    border: 2px solid #e6e6e6;
  }
`;

export const CounterIncreaseBtn = styled(CounterBtn)`
  margin-left: 0.7rem;
  margin-right: 0;
`;
