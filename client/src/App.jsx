import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import AllNews from "./Components/AllNews"
import Footer from "./Components/Footer";
import TopHeadlines from "./Components/TopHeadlines";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from "./Components/CountryNews";
import Card from "./Components/Card";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:iso" element={<CountryNews />} />
        </Routes>
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App;