import { FC } from "react";
import style from "./GameField.module.css";
import { GameFieldItemType, GameFieldType } from "../../../shared/types/types";
import Cross from "../../../shared/ui/cross/Cross";
import Circle from "../../../shared/ui/circle/Circle";

interface GameFieldProps {
  gameField: GameFieldType;
  placeItem: (row: number, col: number) => void;
}

interface GameFieldRowProps {
  row: GameFieldItemType[];
  index: number;
  placeItem: (row: number, col: number) => void;
}

const GameFieldRow: FC<GameFieldRowProps> = ({ row, index, placeItem }) => {
  return (
    <div className={style.Row} key={index}>
      {row.map((item, itemIndex) => (
        <div className={style.Item} key={`${index}${itemIndex}`} onClick={() => placeItem(index, itemIndex)}>
          {item == "x" ? <Cross /> : item === "o" ? <Circle /> : ""}
        </div>
      ))}
    </div>
  );
};

const GameField: FC<GameFieldProps> = ({ gameField, placeItem }) => {
  return (
    <div className={style.Field}>
      <div className={style.Table}>
        {gameField.map((row, rowIndex) => (
          <GameFieldRow row={row} index={rowIndex} placeItem={placeItem} key={rowIndex} />
        ))}
      </div>
    </div>
  );
};

export default GameField;
