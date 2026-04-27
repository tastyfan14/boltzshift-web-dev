import Footer from '@components/sections/Footer/Footer'
import Header from '@components/sections/Header/Header'
import Reveal from '@features/Reveal/Reveal'
import About from '@pages/About'
import Blog from '@pages/Blog'
import Contact from '@pages/Contact'
import Home from '@pages/Home'
import Works from '@pages/Works'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/works' element={<Works />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Reveal><Footer /></Reveal>
    </>
  )
}

export default App