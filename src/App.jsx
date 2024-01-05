import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import { NewsProvider } from "./NewsContext";
import SearchPage from "./pages/SearchPage";

const App = () => {

    return (

        <NewsProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/:param" element={<SearchPage />} />
                </Routes>
            </Router>
        </NewsProvider>

    );
}

export default App;