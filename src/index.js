import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePages from './pages/user/HomePages';
import { BrowserRouter } from 'react-router-dom';
import Routercustom from './router';
import './style/style.scss';
import './image/videoplayback.webm'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routercustom/>
    </BrowserRouter>
);


