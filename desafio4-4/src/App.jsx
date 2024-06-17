import { useState } from "react";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("terminator");

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <>
      <h1>Find your movie!</h1>
      <Buscador onSearch={handleSearch} />
      <MiApi name={searchTerm} />
    </>
  );
}

export default App;
