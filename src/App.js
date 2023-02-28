import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NewsList from "./Components/NewsList/NewsList";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <NewsList />
    </div>
  );
}

export default App;
