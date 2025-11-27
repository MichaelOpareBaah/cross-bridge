
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './pages/Home'
import DemandCourseDetail from './pages/DemandCourseDetail'
import AboutUs from './pages/AboutUs'
import Courses from './pages/Courses'
import ContactUs from './pages/ContactUs'
import News from './pages/News'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home/>}></Route>
      <Route path='about-us' element={<AboutUs/>}></Route>
      <Route path='demand-course-detail/:id' element={<DemandCourseDetail />}></Route>
      <Route path='/courses/demand-course-detail/:id' element={<DemandCourseDetail />}></Route>
      <Route path='courses' element={<Courses />}></Route>
       <Route path='contact-us' element={<ContactUs />}></Route>
       <Route path='alumni-news' element={<News />}></Route>

  
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
