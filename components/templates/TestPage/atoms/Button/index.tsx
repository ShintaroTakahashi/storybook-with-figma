import styled from "styled-components";

export const Button = styled.button`
  border-radius: 34px;
  border: 3px solid transparent;
  background-image: linear-gradient(#ffffff 0 100%),
    linear-gradient(93.15deg, #ffe679 0, #ff3333 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  box-shadow: 2px 4px 8px rgb(238, 153, 67, 0.3);
  color: #353535;
  font-size: 16px;
  font-weight: 700;
  overflow-wrap: break-word;
  padding: 0.8rem 30px;
  width: 200px;

  &:disabled {
    background-image: linear-gradient(#ffffff 0 100%),
      linear-gradient(93.15deg, #bdbdbd 0, #949494 100%);
    opacity: 0.45;
    pointer-events: none;
  }
`;
