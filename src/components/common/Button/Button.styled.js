import styled from "styled-components"

export const Button = styled.button`
  display: inline-block;
  width: 55px;
  height: 55px;
  padding: 8px 18px;
  font-size: 2rem;
  font-weight: bold;
  color: #000125;
  background: radial-gradient(circle, #ffd700 30%, #e6ac00 70%);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease;

  &:hover {
    background: radial-gradient(circle, #e6ac00 30%, #ffd700 70%);
  }

  &:active {
    background: radial-gradient(circle, #ffd700 30%, #e6ac00 70%);
  }
`;


