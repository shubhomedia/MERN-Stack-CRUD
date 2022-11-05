import logo from './logo.svg';
import './App.css';
import AddUser from './Components/AddUser';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllUser from './Components/AllUser';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/alluser' element={<AllUser />} />
          <Route path='/adduser' element={<AddUser />} />
        </Routes>
      </Router >
    </div >
  );
}

export default App;
