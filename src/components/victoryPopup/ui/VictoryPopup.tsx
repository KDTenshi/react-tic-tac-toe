import { FC } from "react";
import { GameFieldItemType } from "../../../shared/types/types";
import style from "./VictoryPopup.module.css";

interface VictoryPopupProps {
  symbol: GameFieldItemType;
  restart: () => void;
}

const VictoryPopup: FC<VictoryPopupProps> = ({ symbol, restart }) => {
  return (
    <div className={style.Popup}>
      <div className={style.Content}>
        <h2 className={style.Title}>Victory!</h2>
        <h2 className={style.Subtitle}> {symbol === "x" ? "Crosses" : "Circles"} Won!</h2>
        <button onClick={restart} className={style.Button}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default VictoryPopup;
