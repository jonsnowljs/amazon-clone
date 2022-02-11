// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} >
            <Route path='home' element={<Home/>} />
          </Route>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
