import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pet from './components/Pet'
import './App.css'

const Home = React.lazy(() => import('./pages/Home'))
const Casas = React.lazy(() => import('./pages/Casas'))
const Cardapio = React.lazy(() => import('./pages/Cardapio'))
const Equipe = React.lazy(() => import('./pages/Equipe'))
const Budega = React.lazy(() => import('./pages/Budega'))
const Reservas = React.lazy(() => import('./pages/Reservas'))
const Contato = React.lazy(() => import('./pages/Contato'))

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
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
      { index: true, Component: Home },
      { path: 'casas', Component: Casas },
      { path: 'cardapio', Component: Cardapio },
      { path: 'equipe', Component: Equipe },
      { path: 'budega', Component: Budega },
      { path: 'reservas', Component: Reservas },
      { path: 'contato', Component: Contato },
    ],
  },
]
