import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Equipo from '../pages/Equipo';
import Videoclips from '../pages/Videoclips';
import '../styles/App.css';

const App = () => {
  const initialState = useInitialState();
  console.log(initialState.state);
  return (
    <AppContext.Provider value={initialState}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactar" element={<Contact />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/videoclips" element={<Videoclips />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
