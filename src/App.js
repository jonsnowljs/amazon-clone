// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Product from './component/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Product />
    </div>
  );
}

export default App;
