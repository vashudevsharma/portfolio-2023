// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Navbar} from './Navbar';
import {Home} from './Home';
import {Footer} from './Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <Footer/>
    </Router>
  );
}

export default App;
