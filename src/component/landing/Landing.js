import React from 'react'
import { Routes, Route ,Navigate } from 'react-router-dom';

import MainPage from '../mainPage/MainPage';
import Lesson from '../lesson/Lesson';
import Footer from '../footer/Footer';

function Landing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/lesson/:name" element={<Lesson />} />
                <Route path="/*" element={<Navigate to="/"/>} />

            </Routes>
            <Footer />
        </>
    )
}

export default Landing
