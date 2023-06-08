import React,{useState} from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

/*
App
  -- Header
  -- ShoppingList
*/
function App() {
  const [isDarkMode,setIsDarkMode]=useState(false);
  // 

  function onDarkModeClick(isDarkMode) {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    //onDarkModeClick(isDarkMode);
  }

  return (
    <div className={"App "+(isDarkMode? "dark":"light")} >
      <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
