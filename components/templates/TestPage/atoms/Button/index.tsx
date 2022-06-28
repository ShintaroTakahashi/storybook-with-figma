import { ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  ghost?: boolean; //何かしらパターンを切り替えられるものとする
};

// このジェネリクスの書き方が合っているのか分かっていない
export const Button = styled.button.attrs<ButtonProps>(({ ghost }) => ({
  type: "button",
}))<ButtonProps>`
  background-color: ${({ ghost }) => (ghost ? "#ffffff" : "#4fe4e4")};
  padding: 8px;
  border: solid 1px ${({ ghost }) => (ghost ? "#000000" : "#ffffff")};
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
`;
