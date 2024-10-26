// Importar librerías necesarias
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movies from './components/movies';
import Home from './components/Home';
import Show from './components/Show';
import './App.css';

// Componente principal
function App() {
    return(
    <Router>
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/movies" element={<Movies />} />
            <Route path='/show/:movieId' element={<Show/>}/>
        </Routes>
    </Router>
    );
}

export default App;