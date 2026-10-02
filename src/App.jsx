import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Casas from './pages/Casas'
import Cardapio from './pages/Cardapio'
import Equipe from './pages/Equipe'
import Budega from './pages/Budega'
import Reservas from './pages/Reservas'
import Contato from './pages/Contato'
import Pet from './components/Pet'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/casas" element={<Casas />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/budega" element={<Budega />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
        <Pet />
      </div>
    </Router>
  )
}

export default App
