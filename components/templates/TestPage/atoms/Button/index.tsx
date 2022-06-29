import styled from "styled-components";

type ButtonProps = {
  ghost?: boolean; //何かしらパターンを切り替えられるものとする
};

export const Button = styled.button.attrs<ButtonProps>({
  type: "button",
})<ButtonProps>`
  background-color: ${({ ghost }) => (ghost ? "#ffffff" : "#4fe4e4")};
  padding: 5px 10px;
  border: solid 1px ${({ ghost }) => (ghost ? "#000000" : "#ffffff")};
  border-radius: 15px;
  font-size: 12px;
  font-weight: 700;
`;
