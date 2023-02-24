import React from 'react'
import { Routes, Route ,Navigate } from 'react-router-dom';

import MainPage from '../mainPage/MainPage';
import Lesson from '../lesson/Lesson';
import Footer from '../footer/Footer';

function Landing() {
    return (
        <>
            <Routes>
                <Route path="/gh-pages-url" element={<MainPage />} />
                <Route path="gh-pages-url/lesson/:name" element={<Lesson />} />
                <Route path="/*" element={<Navigate to="/gh-pages-url"/>} />

            </Routes>
            <Footer />
        </>
    )
}

export default Landing
