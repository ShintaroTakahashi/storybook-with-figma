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
        <ButtonWrapper>
          <span>Welcome!</span>
          <Button onClick={onClickLogout} ghost>
            Logout
          </Button>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <Button onClick={onClickLogin}>Login</Button>
          <Button onClick={onClickLogin}>Sign in</Button>
        </ButtonWrapper>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #ebebeb;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 18%;
`;
