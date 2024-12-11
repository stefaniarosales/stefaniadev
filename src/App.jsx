import Navbar from "./components/navbar/Navbar"
import Start from "./components/start/Start"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import ProjectDetail from "./components/projects/ProjectDetail"
import Contact from "./components/contact/Contact"

import {Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route/>
        <Route/>
      </Routes>
    </>
  )
}

export default App
