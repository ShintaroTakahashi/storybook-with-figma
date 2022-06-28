import { FC } from "react";
import { Title } from "./atoms/Title";
import { Header } from "./molecules/Header";
import { DummyContents } from "./molecules/DummyContents";
import styled from "styled-components";

type TestPageProps = {
  isLogin: boolean;
  onClickLogin: () => void;
  onClickLogout: () => void;
};

export const TestPage: FC<TestPageProps> = ({
  isLogin,
  onClickLogin,
  onClickLogout,
}) => {
  return (
    <>
      <Header
        isLogin={isLogin}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <Container>
        <Title>Dummy list</Title>
        <DummyContents />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 20px auto 0;
`;
