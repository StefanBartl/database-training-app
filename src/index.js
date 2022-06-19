import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './routes/Main';
import DB from './routes/DB';
import './styles/Main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
                    <BrowserRouter>
                          <Header />
                              <Routes>
                                    <Route path='/' element={<Main />} />
                                    <Route path='/DB' element={<DB />} />
                              </Routes>
                    </BrowserRouter>
);