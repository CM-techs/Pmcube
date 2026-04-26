import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Join from './Join'
import About from './About'
import Courses1 from './Course1'
import Courses2 from './Course2'
import Courses3 from './Course3'
import "./Nav.css";
import Gallery from './Gallery'
import Admin from './Admin'
import Adhome from './Adhome'
import Usernav from './Usernav'
import Adminnav from './Adminnav'
import Studentdata from './Studentdata'
import Coursesdata from './Coursesdata'
import Trainerdata from './Trainerdata'
import Joinees from './Joinees'
import Swal from 'sweetalert2'

function App() {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");

  return (
    <>
      <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='join' element={<Join />} />
        <Route path='about' element={<About />} />
        <Route path='course1' element={<Courses1 />} />
        <Route path='course2' element={<Courses2 />} />
        <Route path='course3' element={<Courses3 />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='admin' element={<Admin setIsAdmin={setIsAdmin} />} />
        <Route path='/adhome' element={<Adhome />} />
        <Route path='/studentdata' element={<Studentdata />} />
        <Route path='/coursesdata' element={<Coursesdata />} />
        <Route path='/trainerdata' element={<Trainerdata />} />
        <Route path='/joinees' element={<Joinees />} />
      </Routes>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
