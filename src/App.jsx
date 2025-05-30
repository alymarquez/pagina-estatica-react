import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Services } from './pages/Services/Services'
import { Contact } from './pages/Contact/Contact'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  return <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App
