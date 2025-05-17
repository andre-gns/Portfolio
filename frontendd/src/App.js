import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";

function AppContent() {
  const { isDarkTheme } = useTheme();

  return (
    <div className="App" data-theme={isDarkTheme ? "dark" : "light"}>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
