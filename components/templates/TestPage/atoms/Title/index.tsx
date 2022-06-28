import styled from "styled-components";

type TitleProps = {
  size?: "large"; //何かしらサイズを切り替えられるものとする
};

export const Title = styled.h1<TitleProps>`
  font-size: ${({ size }) => (size === "large" ? "24px" : "18px")};
`;
