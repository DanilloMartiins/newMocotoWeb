import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Icon({ d }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

const tabs = [
  { to: '/', nome: 'Início', logo: true },
  { to: '/casas', nome: 'Casas', d: 'M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' },
  { to: '/cardapio', nome: 'Cardápio', d: 'M7 2v20 M7 2h3v5H7z M17 2c-2 0-3 4-3 7 0 2 1 3 3 3v10 M17 2v20' },
  { to: '/equipe', nome: 'Equipe', d: 'M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1 M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z M21 19v-1a4 4 0 0 0-3-3.87 M15.5 3.13a3.5 3.5 0 0 1 0 6.74' },
  { to: '/contato', nome: 'Contato', d: 'M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z M21 6l-9 7-9-7' },
]

function Navbar() {
  return (
    <>
      <header className="topo">
        <div className="topo-dentro">
          <Link to="/" className="logo">
            <img src="/assets/mocoto.png" alt="Mocotó" />
          </Link>
          <nav className="links">
            <NavLink to="/">Início</NavLink>
            <NavLink to="/casas">Nossas Casas</NavLink>
            <NavLink to="/cardapio">Cardápio</NavLink>
            <NavLink to="/equipe">A Equipe</NavLink>
            <NavLink to="/budega">A budega</NavLink>
            <NavLink to="/contato">Contato</NavLink>
            <Link to="/reservas" className="btn-reserva">Reservas</Link>
          </nav>
          <Link to="/reservas" className="btn-reserva topo-cta">Reservas</Link>
        </div>
      </header>
      <nav className="tabbar">
        {tabs.map((t) => (
          <NavLink key={t.to} to={t.to} end={t.to === '/'}>
            {t.logo ? <img src="/assets/mocoto.png" alt="Início" className="tab-logo" /> : <Icon d={t.d} />}
            <span>{t.nome}</span>
          </NavLink>
        ))}
      </nav>
    </>
  )
}

export default Navbar
