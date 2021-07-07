import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import {GlobalStyle} from "./GlobalStyle"
import NavBar from './components/NavBar/index';
import SliderComponent from './components/home/Slider';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <SliderComponent />
    </Router>
  );
}

export default App;
