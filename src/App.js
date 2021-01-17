
import './App.scss';
import Routes from './core/Routes/Routes';
import Menu from './core/Menu/Menu';
import {
  BrowserRouter as Router,

} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="App-header container">
      
      <Router>
      <Menu></Menu>
      <Routes></Routes>
      </Router>
      
      </div>
    </div>
  );
}

export default App;
