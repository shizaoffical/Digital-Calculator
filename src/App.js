
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import ScrollToTop from './components/ScrollToTop';
import AnimatedPath from './AnimatedPath';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <AnimatedPath/>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
