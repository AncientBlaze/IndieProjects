import { Routes, Route } from 'react-router'
import Clock from './Components/Clock'
import StopWatch from './Components/StopWatch'
import './App.css'
import Navbar from './Components/Navbar'
import Alarm from './Components/Alarm'
import Portfolio from './Components/Portfolio'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Portfolio />
        }>
        </Route>
        <Route path="/alarm" element={
          <>
            <div className='flex flex-col justify-center items-center h-[100vh] w-full bg-red-600'>
              <Alarm />
            </div>
          </>
        }>
        </Route>
        <Route path="/clock" element={
          <>
            <div className='flex flex-col justify-center items-center h-[100vh] w-full bg-red-600'>
              <Clock />
            </div>
          </>
        } />
        <Route path="/stopwatch" element={
          <>
            <div className='flex flex-col justify-center items-center h-[100vh] w-full bg-red-600'>
              <StopWatch />
            </div>
          </>
        } />
      </Routes>
    </>
  )
}

export default App
