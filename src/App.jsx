import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Maintenance from "../pages/maintenance/Maintenance"
import Navbar from "../components/navbar/Navbar"
import WebDev from "../pages/web-dev/WebDev"
import ContactSection from "../components/contact-section/ContactSection"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Home/>
            <ContactSection/>
          </>
        }/>
        <Route path="/web-developer" element={
          <>
            <Navbar/>
            <WebDev/>
            <ContactSection/>
          </>
        }/>
        <Route path="/*" element={
          <>
            <Navbar/>
            <Maintenance/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
