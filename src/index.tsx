import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
<BrowserRouter>
    <App />
</BrowserRouter>, 
document.getElementById('root'));
