import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";
import Author from "./components/Author";
import { RandomProvider } from "./components/context/randomContext";
import "./App.css";

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <RandomProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Quotes />} />
              <Route path="/author/:id" element={<Author />} />
            </Routes>
          </BrowserRouter>
        </RandomProvider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
