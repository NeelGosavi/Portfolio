import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/portfolio";
import Projects from "./components/Projects";


function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  function changeTheme() {
    const newMode = !darkMode;
    localStorage.setItem("darkMode", newMode);
    setDarkMode(newMode);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Portfolio darkMode={darkMode} changeTheme={changeTheme} />}
        />
        <Route path="/projects/:projectId" element={<Projects />} />

      </Routes>
    </Router>
  );
}

export default App;
