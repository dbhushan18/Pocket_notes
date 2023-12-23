import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import Category from "./pages/Category.jsx";
import Profile from "./pages/Profile.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movie" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
