import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: #20262e;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

export const CenterDiv = styled.div`
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 25px;
`;

export const Counter = styled.h4`
  text-align: center;
  font-size: 40px;
`;

export const Button = styled.button`
  background-color: #913175;
  height: 40px;
  width: 200px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  margin-top: 30px;
  cursor: pointer;
`;

export const SelectTime = styled.p`
  font-size: 18px;
  margin-top: 30px;
`;

export const Grid = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const GridItem = styled.button`
  font-size: 20px;
  margin: 10px;
  background-color: #cd5888;
  width: 50px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 25px;
  cursor: pointer;
  border: none;
  color: white;
`;
