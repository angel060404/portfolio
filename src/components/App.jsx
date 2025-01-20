import { useState } from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import Experience from "./Experience/Experience";

function App() {
  const [language, setLanguage] = useState("es");

  return (
    <div className="App">
      <Navigation language={language} setLanguage={setLanguage} />
      <Experience language={language} />
    </div>
  );
}

export default App;
