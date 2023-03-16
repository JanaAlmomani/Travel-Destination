import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/city/:id' element={<TourDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
