import React, { useState } from "react";  // Importing useState from React
import Navbar from "./Components/Navbar";
import { CiMenuBurger } from "react-icons/ci";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <header>
        <CiMenuBurger onClick={() => setShowNav(!showNav)} />
      </header>

      <Navbar show={showNav} />
    </div>
  );
}

export default App;
