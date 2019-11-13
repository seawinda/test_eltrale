import React from "react";
import "./scss/style.scss";
import Header from "./components/Header";
import FirstScreen from "./components/FirstScreen";
import Directions from "./components/Directions";
import Excursions from "./components/Excursions";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <FirstScreen />
        <Directions />
        <Excursions />
      </main>
    </>
  );
}

export default App;
