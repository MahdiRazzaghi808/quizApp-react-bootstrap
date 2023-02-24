import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { ThemeProvider } from 'react-bootstrap';
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider dir="rtl">
        <BrowserRouter>
            <HashRouter>
                <App />
            </HashRouter>
        </BrowserRouter>
    </ThemeProvider>

)


