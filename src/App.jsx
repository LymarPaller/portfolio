import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Maintenance from "../pages/maintenance/Maintenance"
import Navbar from "../components/navbar/Navbar"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Home/>
          </>
        }/>
        <Route path="/webdev" element={
          <>
            <Navbar/>
            {/* <Maintenance/> */}
          </>
        }/>
        <Route path="/*" element={
          <>
            <Navbar/>
            {/* <Maintenance/> */}
          </>
        }/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
