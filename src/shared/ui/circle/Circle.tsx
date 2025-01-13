import { FC } from "react";
import style from "./Circle.module.css";

const Circle: FC = () => {
  return (
    <div className={style.Circle}>
      <div className={style.Line}></div>
    </div>
  );
};

export default Circle;
