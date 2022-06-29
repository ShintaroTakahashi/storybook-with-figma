import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "../../atoms/Button";
import { Title } from "../../atoms/Title";

type HeaderProps = {
  isLogin: boolean;
  onClickLogin: () => void;
  onClickLogout: () => void;
};

export const Header: FC<HeaderProps> = ({
  isLogin,
  onClickLogin,
  onClickLogout,
}) => {
  return (
    <StyledHeader>
      <Title size="large">This is Header </Title>
      {isLogin ? (
        <div>
          <span>Welcome!</span>
          <Button onClick={onClickLogout} ghost>
            Logout
          </Button>
        </div>
      ) : (
        <Button onClick={onClickLogin}>Login</Button>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #ebebeb;
`;
