import { FC } from "react";
import style from "./Cross.module.css";

const Cross: FC = () => {
  return (
    <div className={style.Cross}>
      <div className={style.Line}></div>
      <div className={style.Line}></div>
    </div>
  );
};

export default Cross;
