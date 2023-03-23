import logo from './logo.svg';
import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import QuantityPerUnit from './Pages/QuantityPerUnit'
import QuantityOfUnit from './Pages/QuantityOfUnit'

function App() {
  return (
    <div className="App container">
      <h3 className='d-flex justify-content-center m-3'>
        Mini Test Example
      </h3>
      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-iten m-1' key={1}>
            <NavLink className='btn btn-light btn-outline-primary' to='/QuantityPerUnit'>
              QuantityPerUnit
            </NavLink>
          </li>
          <li className='nav-iten m-1' key={2}>
            <NavLink className='btn btn-light btn-outline-primary' to='/QuantityOfUnit'>
              QuantityOfUnit
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/QuantityPerUnit' element={<QuantityPerUnit />} />
        <Route path='/QuantityOfUnit' element={<QuantityOfUnit />} />
      </Routes>
    </div>
  );
}

export default App;
