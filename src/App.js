import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Layout } from './components/Layout'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout/>}>
        <Route index element={ <HomePage/>} />
        <Route path="/posts/new" element={ <NewPage/>} />
        <Route path="/posts/:id" element={ <DetailViewPage/>} />
        {/* <Route path="/drift" element={<DriftPage/>} />
        <Route path="/timeattack" element={<TimeAttackPage/>} />
        <Route path="/forza" element={<ForzaPage/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
