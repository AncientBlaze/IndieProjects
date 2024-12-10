import { Routes, Route, Outlet } from 'react-router'
import Clock from './Components/Clock'
import StopWatch from './Components/StopWatch'
import './App.css'
import Navbar from './Components/Navbar'
import Alarm from './Components/Alarm'
import Portfolio from './Components/Portfolio'
import { useMode } from './utils/globalState'

function App() {
  const [mode] = useMode();
  return (
    <div className={`${mode ? "dark" : "light"} *:transition-all overflow-hidden `}>
      <Navbar passedMode={mode} />
      <Routes>
        <Route path="/" element={<Portfolio passedMode={mode} />}></Route>
        <Route path="/alarm" element={
          <div className='flex flex-col justify-center items-center h-[90vh] w-full dark:bg-[#121212] bg-white'>
            <Alarm passedMode={mode} />
          </div>
        }>
        </Route>
        <Route path="/clock" element={
          <div className='flex flex-col justify-center items-center h-[90vh] w-full dark:bg-[#121212] bg-white'>
            <Clock passedMode={mode} />
          </div>
        } />
        <Route path="/stopwatch" element={
          <div className='flex flex-col justify-center items-center h-[90vh] w-full dark:bg-[#121212] bg-white'>
            <StopWatch passedMode={mode} />
          </div>
        } />
      </Routes>
      <Outlet/>
    </div>
  )
}

export default App

