import type { NextPage } from "next";
import { useState } from "react";
import { TestPage } from "../components/templates/TestPage";

const Home: NextPage = () => {
  // 確認用のstate
  const [isLogin, setIsLogin] = useState(false);

  const onClickLogin = () => {
    setIsLogin(true);
  };

  const onClickLogout = () => {
    setIsLogin(false);
  };

  return (
    <TestPage
      isLogin={isLogin}
      onClickLogin={onClickLogin}
      onClickLogout={onClickLogout}
    />
  );
};

export default Home;
