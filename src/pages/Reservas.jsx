import { Head } from 'vite-react-ssg'
import { SITE_URL } from '../seo.js'
import { useState } from 'react'
import Faixa from '../components/Faixa'
import './Reservas.css'

function Reservas() {
  const [nome, setNome] = useState('')
  const [casa, setCasa] = useState('Vila Medeiros')
  const [data, setData] = useState('')
  const [ok, setOk] = useState(false)

  function enviar(e) {
    e.preventDefault()
    if (nome === '' || data === '') {
      return
    }
    setOk(true)
  }

  return (
    <>
      <Head>
        <title>Reservas | Mocotó</title>
        <meta name="description" content="Reserve sua mesa no Mocotó: Vila Medeiros, Vila Clementino ou Vila Leopoldina." />
        <link rel="canonical" href={SITE_URL + '/reservas'} />
      </Head>
      <div className="pagina reserva-pagina">
      <p className="chapeu">Garanta sua mesa</p>
      <h1>Reservas</h1>
      <div className="reserva-grade">
        <form className="form" onSubmit={enviar}>
          <label>Nome</label>
          <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" />
          <label>Casa</label>
          <select value={casa} onChange={(e) => setCasa(e.target.value)}>
            <option>Vila Medeiros</option>
            <option>Vila Clementino</option>
            <option>Vila Leopoldina</option>
            <option>Café Pinheiros</option>
          </select>
          <label>Data</label>
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
          <button type="submit">Pedir reserva</button>
          {ok && <p className="aviso">Valeu {nome}! Pedido pra {casa} anotado, confirmação por telefone.</p>}
        </form>
        <div className="reserva-info">
          <h3>Prefere chamar direto?</h3>
          <p>(11) 2951-3056</p>
          <p>contato@mocoto.com.br</p>
          <h3>Horários</h3>
          <p>Varia por casa, veja em Nossas Casas</p>
        </div>
      </div>
      </div>
      <Faixa frase="O sertão é do mundo" tom="creme" />
    </>
  )
}

export default Reservas
