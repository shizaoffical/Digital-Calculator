import React from 'react'
import { AnimatePresence } from 'framer-motion';
import {  Route, Routes, useLocation } from 'react-router-dom';
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
import Pyramid from './pages/Area/Pyramid';
import BernoullliNumbers from './pages/Physics/fluidMechanics/BernoullliNumbers';
import BroadCrustedWeir from './pages/Physics/fluidMechanics/BroadCrustedWeir';
import BreakHorsePower from "./pages/Physics/fluidMechanics/BreakHorsePower";
import EulerNumbers from './pages/Physics/fluidMechanics/EulerNumbers';
import FlowRate from './pages/Physics/fluidMechanics/FlowRate';
import FourierNumber from './pages/Physics/fluidMechanics/FourierNumber';
import HydraulicRadius from './pages/Physics/fluidMechanics/HydraulicRadius';
import KnudsenNumber from './pages/Physics/fluidMechanics/KnudsenNumber';
import FroudeNumber from './pages/Physics/fluidMechanics/FroudeNumber';
import LevisNumber from './pages/Physics/fluidMechanics/LevisNumber';
import MeanDepth from './pages/Physics/fluidMechanics/MeanDepth';
import NussletNumber from './pages/Physics/fluidMechanics/NussletNumber';
import MachNumber from './pages/Physics/fluidMechanics/MachNumber';
import PoiseuilleEquation from './pages/Physics/fluidMechanics/PoiseuilleEquation';
import PrandantNumber from './pages/Physics/fluidMechanics/PrandantNumber';
import PecletNumber from './pages/Physics/fluidMechanics/PecletNumber';
import PumpEfficiency from './pages/Physics/fluidMechanics/PumpEfficiency';
import Renold from './pages/Physics/fluidMechanics/Renold';
import Schmidt from './pages/Physics/fluidMechanics/Schmidt';
import SherWoodNumber from './pages/Physics/fluidMechanics/SherWoodNumber';
import SpecificGasConstant from './pages/Physics/fluidMechanics/SpecificGasConstant';
import SpecificVolume from './pages/Physics/fluidMechanics/SpecificVolume';
import StockLaw from './pages/Physics/fluidMechanics/StockLaw';
import VoltageAcrossIndustry from './pages/Physics/fluidMechanics/VoltageAcrossIndustry';
import WaterHoroscope from './pages/Physics/fluidMechanics/WaterHoroscope';
import WeberNumber from './pages/Physics/fluidMechanics/WeberNumber';
import ACtoDC from './pages/Physics/Electromagnetism/ACtoDC';
import AntennaArray from './pages/Physics/Electromagnetism/AntennaArray';
import AntennaGain from './pages/Physics/Electromagnetism/AntennaGain';
import AperatureAntenna from './pages/Physics/Electromagnetism/ApertureAntenna';
import CapitanceCalculator from './pages/Physics/Electromagnetism/CapacitanceCalculator';
import CapacitiveCalculator from './pages/Physics/Electromagnetism/CapacitiveCalculator';
import CylindericalCalculator from './pages/Physics/Electromagnetism/CylindericialCalculator';
import DipoleCalculator from './pages/Physics/Electromagnetism/DipoleCalculator';
import EnergyStorage from './pages/Physics/Electromagnetism/EnergyStorage';
import Frequency from './pages/Physics/Electromagnetism/Frequency';
import InductiveReactance from './pages/Physics/Electromagnetism/InductiveReactance';
import OhmLaw from './pages/Physics/Electromagnetism/OhmsLaw';
import ParallelPlateCapacitor from './pages/Physics/Electromagnetism/ParallelPlateCapacitor';
import PlanetWeight from './pages/Physics/Electromagnetism/PlanetWeight';
import Wavelength from './pages/Physics/Electromagnetism/Wavelength';
import Transformer from './pages/Physics/Electromagnetism/Transformer';
import HeatFlow from './pages/Physics/thermodyanamics/HeatFlow';
import SUAVT from './pages/Physics/thermodyanamics/SUVAT';
import HeatTransferr from './pages/Physics/thermodyanamics/HeatTransferr';
import ThermalConsductivity from './pages/Physics/thermodyanamics/ThermalConductivity';
import AmountOfSubstance from './pages/Physics/Classical/AmountOfSubstance';
import AverageVelocity from './pages/Physics/Classical/AverageVelocity';

function AnimatedPath() {
    const location = useLocation();
  return (
   <>
       <AnimatePresence>
       <Routes location={location} key={location.pathname}>
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
          <Route path="/area/pyramid" element={<Pyramid/>} />

          <Route path="/Chemistry" element={<Chemistry />} />
          <Route path="/Currency" element={<Currency />} />
          <Route path="/Engineering" element={<Engineering />} />
          <Route path="/Sports" element={<Sports />} />
          <Route path="/Fun" element={<Fun />} />
          <Route path="/Love" element={<Love />} />
          <Route path="/Graphics" element={<Graphics />} />
{/* ********************************** physics********************* */}
          <Route path="/physics" element={<Physics />} />
          {/* fluid machanics */}
          <Route path="/physics/fluid-machine/bernoulli-numbers" element={<BernoullliNumbers />} />
          <Route path="/physics/fluid-machine/break-horse-power" element={<BreakHorsePower/>} />
          <Route path="/physics/fluid-machine/broad-crusted-weir" element={<BroadCrustedWeir />} />
          <Route path="/physics/fluid-machine/euler-numbers" element={<EulerNumbers />} />
          <Route path="/physics/fluid-machine/flow-rate" element={<FlowRate />} />
          <Route path="/physics/fluid-machine/fourier-number" element={<FourierNumber/>} />
          <Route path="/physics/fluid-machine/froude-number" element={<FroudeNumber/>} />
          <Route path="/physics/fluid-machine/hydraulic-radius" element={<HydraulicRadius/>} />
          <Route path="/physics/fluid-machine/knudsen-number" element={<KnudsenNumber/>} />
          <Route path="/physics/fluid-machine/levis-number" element={<LevisNumber/>} />
          <Route path="/physics/fluid-machine/mean-depth" element={<MeanDepth/>} />
          <Route path="/physics/fluid-machine/nusslet-number" element={<NussletNumber/>} />
          <Route path="/physics/fluid-machine/mach-number" element={<MachNumber/>} />
          <Route path="/physics/fluid-machine/poiseuille-equation" element={<PoiseuilleEquation/>} />
          <Route path="/physics/fluid-machine/prandtl-number" element={<PrandantNumber/>} />
          <Route path="/physics/fluid-machine/peclel-number" element={<PecletNumber/>} />
          <Route path="/physics/fluid-machine/pump-efficiency" element={<PumpEfficiency/>} />
          <Route path="/physics/fluid-machine/renold" element={<Renold/>} />
          <Route path="/physics/fluid-machine/schmidt" element={<Schmidt/>} />
          <Route path="/physics/fluid-machine/sherWood-number" element={<SherWoodNumber/>} />
          <Route path="/physics/fluid-machine/specific-gas-constant" element={<SpecificGasConstant/>} />
          <Route path="/physics/fluid-machine/specific-volume" element={<SpecificVolume/>} />
          <Route path="/physics/fluid-machine/stock-law" element={<StockLaw/>} />
          <Route path="/physics/fluid-machine/voltage-across-industry" element={<VoltageAcrossIndustry/>} />
          <Route path="/physics/fluid-machine/water-horoscope" element={<WaterHoroscope/>} />
          <Route path="/physics/fluid-machine/weber-number" element={<WeberNumber/>} />
          {/* electromagnitism */}
          <Route path="/physics/fluid-machine/AC-to-DC" element={<ACtoDC/>} />
          <Route path="/physics/fluid-machine/antenna-array" element={<AntennaArray/>} />
          <Route path="/physics/fluid-machine/antenna-gain" element={<AntennaGain/>} />
          <Route path="/physics/fluid-machine/aperature-antenna" element={<AperatureAntenna/>} />
          <Route path="/physics/fluid-machine/capitance-calculator" element={<CapitanceCalculator/>} />
          <Route path="/physics/fluid-machine/capacitive-calculator" element={<CapacitiveCalculator/>} />
          <Route path="/physics/fluid-machine/cylinderical-calculator" element={<CylindericalCalculator/>} />
          <Route path="/physics/fluid-machine/dipole-calculator" element={<DipoleCalculator/>} />
          <Route path="/physics/fluid-machine/energy-storage" element={<EnergyStorage/>} />
          <Route path="/physics/fluid-machine/frequency" element={<Frequency/>} />
          <Route path="/physics/inductive-reactance" element={<InductiveReactance/>} />
          <Route path="/physics/ohm-law" element={<OhmLaw/>} />
          <Route path="/physics/parallel-plate-Capacitor" element={<ParallelPlateCapacitor/>} />
          <Route path="/physics/planet-weight" element={<PlanetWeight/>} />
          <Route path="/physics/wave-length" element={<Wavelength/>} />
          <Route path="/physics/transformer" element={<Transformer/>} />
          {/* thermdynamics */}
          <Route path="/physics/heatflow" element={<HeatFlow/>} />
          <Route path="/physics/suvat" element={<SUAVT/>} />
          <Route path="/physics/heat-transferr" element={<HeatTransferr/>} />
          <Route path="/physics/thermal-consductivity" element={<ThermalConsductivity/>} />
       {/* classical */}
       <Route path="/physics/amount-of-Substance" element={<AmountOfSubstance/>} />
       <Route path="/physics/average-velocity" element={<AverageVelocity/>} />

          <Route path="/Health" element={<Health />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Financial" element={<Financial />} />
          <Route path="/Unit" element={<Unit />} />
        </Route>

      </Routes>
       </AnimatePresence>
   </>
  )
}

export default AnimatedPath