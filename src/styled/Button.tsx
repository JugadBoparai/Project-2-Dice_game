import styled from "styled-components";

export const Button = styled.div`
  color: white;
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  text-align: center;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  color: black;
  background-color: white;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
  }
`;
