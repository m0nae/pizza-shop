import styled from "styled-components";

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

export const Img = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 1rem;
`;

export const Info = styled.div`
  height: 80%;
`;

export const Title = styled.div`
  font-weight: 600;
  margin-bottom: 1rem;
`;
export const Counter = styled.input`
  width: 2rem;
`;

export const RemoveBtn = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.8rem;
  cursor: pointer;
`;
