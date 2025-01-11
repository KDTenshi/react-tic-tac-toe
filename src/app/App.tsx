import { FC } from "react";
import "./style/App.css";
import { Header } from "../components/header";
import { GameField } from "../components/gameFIeld";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <GameField />
    </div>
  );
};

export default App;
