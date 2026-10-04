import { Outlet } from 'react-router-dom'
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

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <Pet />
    </div>
  )
}

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'casas', element: <Casas /> },
      { path: 'cardapio', element: <Cardapio /> },
      { path: 'equipe', element: <Equipe /> },
      { path: 'budega', element: <Budega /> },
      { path: 'reservas', element: <Reservas /> },
      { path: 'contato', element: <Contato /> },
    ],
  },
]
