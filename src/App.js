import React from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import ThreeItem from "./components/ThreeItem";
import TopRatedItems from "./components/TopRatedItems";


function App() {
  return (
    <div>
   <Navigation></Navigation>
  <Main></Main>
  <ThreeItem></ThreeItem>
  <TopRatedItems></TopRatedItems>
   </div>
  );
}

export default App;
