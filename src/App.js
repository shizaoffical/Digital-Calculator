import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Area from './pages/Area/Area';
import Chemistry from './pages/chemistry/Chemistry';
import Currency from './pages/Currency/Currency';
import Engineering from './pages/Engineering/Engineering';
import Financial from './pages/Financial/Financial';
import Fun from './pages/Fun/Fun';
import Graphics from './pages/Graphics/Graphics';
import Health from './pages/Health/Health';
import Home from './pages/Home/Home';
import Love from './pages/Love/Love';
import Math from './pages/Math/Math';
import Physics from './pages/Physics/Physics';
import Sports from './pages/Sports/Sports';
import Unit from './pages/Unit/Unit';
import Weather from './pages/weather/Weather';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={   <Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/Math' element={<Math/>}/>
          <Route path="/Area" element={<Area />}/>
          <Route path="/Chemistry" element={<Chemistry />}/>
          <Route path="/Currency" element={<Currency/>}/> 
          <Route path="/Engineering" element={<Engineering/>}/> 
          <Route path="/Sports" element={<Sports/>}/>
          <Route path="/Fun" element={<Fun/>}/>   
          <Route path="/Love" element={<Love/>}/>  
          <Route path="/Graphics" element={<Graphics/>}/>
          <Route path="/Physics" element={<Physics/>}/> 
          <Route path="/Health" element={<Health/>}/>  
          <Route path="/Weather" element={<Weather/>}/>  
          <Route path="/Financial" element={<Financial/>}/>  
          <Route path="/Unit" element={<Unit/>}/>           
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
