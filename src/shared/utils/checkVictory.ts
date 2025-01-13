import { GameFieldType } from "../types/types";

export const checkVictory = (gameField: GameFieldType, row: number, col: number) => {
  if (Math.abs(row - col) === 1) {
    return checkVictoryLine(gameField, row, col);
  } else {
    return checkVictoryLine(gameField, row, col) || checkVictoryDiagonal(gameField, row, col);
  }
};

const checkVictoryLine = (gameField: GameFieldType, row: number, col: number) => {
  const isRowVictory = gameField[row][0] === gameField[row][1] && gameField[row][0] === gameField[row][2];
  const isColVictory = gameField[0][col] === gameField[1][col] && gameField[0][col] === gameField[2][col];

  return isColVictory || isRowVictory;
};

const checkVictoryDiagonalAcute = (gameField: GameFieldType) => {
  return gameField[2][0] === gameField[1][1] && gameField[2][0] === gameField[0][2];
};

const checkVictoryDiagonalObtuse = (gameField: GameFieldType) => {
  return gameField[0][0] === gameField[1][1] && gameField[0][0] === gameField[2][2];
};

const checkVictoryDiagonal = (gameField: GameFieldType, row: number, col: number) => {
  if (row !== 1 && col !== 1) {
    if (row + col === 2) {
      return checkVictoryDiagonalAcute(gameField);
    } else {
      return checkVictoryDiagonalObtuse(gameField);
    }
  } else {
    return checkVictoryDiagonalAcute(gameField) || checkVictoryDiagonalObtuse(gameField);
  }
};
