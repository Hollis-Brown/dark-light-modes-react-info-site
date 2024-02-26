import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode(){
    setDarkMode(prevMode =>!prevMode);
  }

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </>
  );
}

export default App;
