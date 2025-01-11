import { FC } from "react";
import style from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={style.Header}>
      <h1 className={style.Title}>Tic Tac Toe</h1>
    </header>
  );
};

export default Header;
