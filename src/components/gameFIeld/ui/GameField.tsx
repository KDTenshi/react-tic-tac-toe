import { FC, useEffect, useState } from "react";
import style from "./GameField.module.css";
import { GameFieldType } from "../../../shared/types/types";

const emptyGameField: GameFieldType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameField: FC = () => {
  const [gameField, setGameField] = useState(emptyGameField);
  const [currentSymbol, setCurrentSymbol] = useState<"x" | "o">("x");
  const [isVictory, setIsVictory] = useState(false);

  useEffect(() => {
    if (isVictory) {
      alert(`Victory!`);
      setGameField(emptyGameField);
      setIsVictory(false);
      setCurrentSymbol("x");
    }
  }, [isVictory]);

  const checkVictoryLine = (gameField: GameFieldType, row: number, col: number) => {
    const isRowVictory = gameField[row][0] === gameField[row][1] && gameField[row][0] === gameField[row][2];
    const isColVictory = gameField[0][col] === gameField[1][col] && gameField[0][col] === gameField[2][col];

    const isVictoryLine = isColVictory || isRowVictory;

    if (isVictoryLine) {
      setIsVictory(true);
    }
  };

  const checkVictoryDiagonalAcute = (gameField: GameFieldType) => {
    if (gameField[2][0] === gameField[1][1] && gameField[2][0] === gameField[0][2]) {
      setIsVictory(true);
    }
  };

  const checkVictoryDiagonalObtuse = (gameField: GameFieldType) => {
    if (gameField[0][0] === gameField[1][1] && gameField[0][0] === gameField[2][2]) {
      setIsVictory(true);
    }
  };

  const checkVictoryDiagonal = (gameField: GameFieldType, row: number, col: number) => {
    if (row !== 1 && col !== 1) {
      if (row + col === 2) {
        checkVictoryDiagonalAcute(gameField);
      } else {
        checkVictoryDiagonalObtuse(gameField);
      }
    } else {
      checkVictoryDiagonalAcute(gameField);
      checkVictoryDiagonalObtuse(gameField);
    }
  };

  const checkVictory = (gameField: GameFieldType, row: number, col: number) => {
    if (Math.abs(row - col) !== 0 && Math.abs(row - col) !== 2) {
      checkVictoryLine(gameField, row, col);
    } else {
      checkVictoryLine(gameField, row, col);
      checkVictoryDiagonal(gameField, row, col);
    }
  };

  const placeItem = (row: number, col: number) => {
    if (gameField[row][col] !== null) return;
    if (isVictory) return;

    const newGameField: GameFieldType = [...gameField.map((row) => [...row])];

    newGameField[row][col] = currentSymbol;
    setCurrentSymbol((prev) => (prev === "x" ? "o" : "x"));
    checkVictory(newGameField, row, col);

    setGameField(newGameField);
  };

  return (
    <div className={style.Field}>
      <div className={style.Table}>
        {gameField.map((row, rowIndex) => (
          <div className={style.Row} key={rowIndex}>
            {row.map((item, itemIndex) => (
              <div
                className={style.Item}
                key={`${rowIndex}${itemIndex}`}
                onClick={() => placeItem(rowIndex, itemIndex)}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameField;
