import { Routes, Route } from "react-router-dom";
import HomePage from "../screens/Home/HomePage";
import PromptBuilder from "../screens/PromptBuilder";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prompt-builder" element={<PromptBuilder />} />
    </Routes>
  );
}

export default Navigation;
