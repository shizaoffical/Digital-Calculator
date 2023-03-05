
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Area from './pages/Area/Area';
import AreaOfPolygonCal from './pages/Area/AreaOfPolygonCal';
import Barrel from './pages/Area/Barrel';
import Circle from './pages/Area/Circle';
import Cone from './pages/Area/Cone';
import Cube from './pages/Area/Cube';
import Cylinder from './pages/Area/Cylinder';
import Elipse from './pages/Area/Elipse';
import Hemisphere from './pages/Area/Hemisphere';
import Kite from './pages/Area/Kite';
import Parallogram from './pages/Area/Parallogram';
import Rectangular from './pages/Area/Rectangular';
import Sphere from './pages/Area/Sphere';
import Square from './pages/Area/Square';
import Triangle from './pages/Area/Triangle';
import VolumeOfHemisphere from './pages/Area/VolumeOfHemisphere';
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
import Rhombus from "./pages/Area/Rhombus"
import Trapezium from './pages/Area/Trapezium';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/Math' element={<Math />} />

            <Route path="/area" element={<Area />} />
            <Route path="/area/polygoncalculator" element={<AreaOfPolygonCal />} />
            <Route path="/area/barrel" element={<Barrel />} />
            <Route path="/area/circle" element={<Circle />} />
            <Route path="/area/cone" element={<Cone />} />
            <Route path="/area/cube" element={<Cube />} />
            <Route path="/area/cylinder" element={<Cylinder />} />
            <Route path="/area/elipse" element={<Elipse />} />
            <Route path="/area/hemisphere" element={<Hemisphere />} />
            <Route path="/area/kite" element={<Kite />} />
            <Route path="/area/rectangular" element={<Rectangular />} />
            <Route path="/area/sphere" element={<Sphere />} />
            <Route path="/area/square" element={<Square />} />
            <Route path="/area/volumeOfHemisphere" element={<VolumeOfHemisphere />} />
            <Route path="/area/triangle" element={<Triangle />} />
            <Route path="/area/parallogram" element={<Parallogram />} />
            <Route path="/area/rhombus" element={<Rhombus/>} />
            <Route path="/area/trapezium" element={<Trapezium/>} />

            <Route path="/Chemistry" element={<Chemistry />} />
            <Route path="/Currency" element={<Currency />} />
            <Route path="/Engineering" element={<Engineering />} />
            <Route path="/Sports" element={<Sports />} />
            <Route path="/Fun" element={<Fun />} />
            <Route path="/Love" element={<Love />} />
            <Route path="/Graphics" element={<Graphics />} />
            <Route path="/Physics" element={<Physics />} />
            <Route path="/Health" element={<Health />} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/Financial" element={<Financial />} />
            <Route path="/Unit" element={<Unit />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
