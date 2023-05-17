// import logo from './logo.svg';
import './App.css';
import 'bootstrap5/src/css/bootstrap.min.css';
import 'bootstrap5/src/js/bootstrap.bundle.min.js';
import Header from './compo/Header';
import CardDetails from './CardDetails';
import Cards from './compo/Cards';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cart/:id' element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
