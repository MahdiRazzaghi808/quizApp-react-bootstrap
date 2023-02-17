import React from 'react'
import { Routes, Route } from 'react-router-dom';

import MainPage from '../mainPage/MainPage';
import Lesson from '../lesson/Lesson';
import Footer from '../footer/Footer';

function Landing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/lesson/:name" element={<Lesson />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Landing
