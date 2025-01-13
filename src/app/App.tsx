import { FC, useState } from "react";
import "./style/App.css";
import { Header } from "../components/header";
import { GameFieldItemType, GameFieldType, GameSymbolType } from "../shared/types/types";
import { checkVictory } from "../shared/utils/checkVictory";
import GameField from "./../components/gameFIeld/ui/GameField";
import { VictoryPopup } from "../components/victoryPopup";

const emptyGameField: GameFieldType = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const App: FC = () => {
  const [field, setField] = useState(emptyGameField);
  const [currentSymbol, setCurrentSymbol] = useState<GameSymbolType>("x");
  const [isVictory, setIsVictory] = useState(false);
  const [victorySymbol, setVictorySymbol] = useState<GameFieldItemType>(null);

  const placeItem = (row: number, col: number) => {
    console.log(row, col);

    if (field[row][col] !== null) return;
    if (isVictory) return;

    const newGameField: GameFieldType = [...field.map((row) => [...row])];

    newGameField[row][col] = currentSymbol;
    setField(newGameField);

    if (checkVictory(newGameField, row, col)) {
      setVictorySymbol(currentSymbol);
      setIsVictory(true);
    }

    setCurrentSymbol((prev) => (prev === "x" ? "o" : "x"));
  };

  const restart = () => {
    setField(emptyGameField);
    setIsVictory(false);
    setCurrentSymbol("x");
    setVictorySymbol(null);
  };

  return (
    <div className="App">
      <Header />
      {isVictory && <VictoryPopup restart={restart} symbol={victorySymbol} />}
      <GameField gameField={field} placeItem={placeItem} />
    </div>
  );
};

export default App;
