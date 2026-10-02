import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [aberto, setAberto] = useState(false)

  function fechar() {
    setAberto(false)
  }

  return (
    <header className="topo">
      <div className="topo-dentro">
        <Link to="/" className="logo" onClick={fechar}>
          <img src="/assets/mocoto.png" alt="Mocotó" />
        </Link>
        <button className="menu-btn" onClick={() => setAberto(!aberto)}>
          ☰
        </button>
        <nav className={aberto ? 'links aberto' : 'links'}>
          <Link to="/" onClick={fechar}>Início</Link>
          <Link to="/casas" onClick={fechar}>Nossas Casas</Link>
          <Link to="/cardapio" onClick={fechar}>Cardápio</Link>
          <Link to="/budega" onClick={fechar}>A budega</Link>
          <Link to="/reservas" className="btn-reserva" onClick={fechar}>Reservas</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
