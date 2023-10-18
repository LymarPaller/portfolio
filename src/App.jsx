import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom"
import Home from "../pages/home/Home"
import Maintenance from "../pages/maintenance/Maintenance"
import Navbar from "../components/navbar/Navbar"
import WebDev from "../pages/web-dev/WebDev"
import ContactSection from "../components/contact-section/ContactSection"
import LandingPage from "../pages/landingPage/LandingPage"
import { AnimatePresence } from "framer-motion"
import AnimatePage from "./AnimatePage"

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={
          <>
          <AnimatePage>
            <LandingPage/>
          </AnimatePage>
          </>
        }/>
        <Route path="/home" element={
          <>
            <Navbar/>
            <AnimatePage>
              <Home/>
              <ContactSection/>
            </AnimatePage>
          </>
        }/>
        <Route path="/web-developer" element={
          <>
            <Navbar/>
            <AnimatePage>
              <WebDev/>
              <ContactSection/>
            </AnimatePage>
          </>
        }/>
        <Route path="/*" element={
          <>
            <Navbar/>
            <AnimatePage>
              <Maintenance/>
            </AnimatePage>
          </>
        }/>
      </Routes>
    </AnimatePresence>
  )
}

export default App
