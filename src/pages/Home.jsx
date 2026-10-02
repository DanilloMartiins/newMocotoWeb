import { Link } from 'react-router-dom'
import { Mandacaru, Palma, Sol } from '../components/Sertao'
import './Home.css'

function Home() {
  const pratos = [
    { foto: '/assets/moqueca.jpg', nome: 'Escondidinho de camarão', desc: 'Com creme de moqueca' },
    { foto: '/assets/pratos1.jpg', nome: 'Baião de dois', desc: 'Queijo coalho e carne-seca' },
    { foto: '/assets/pratos11.jpg', nome: 'Torresmo', desc: 'O clássico da casa' },
    { foto: '/assets/pudim.jpg', nome: 'Pudim de tapioca', desc: 'Sobremesa pra fechar' },
  ]

  return (
    <div>
      <section className="hero">
        <Sol className="sol-hero" />
        <Palma className="palma-hero" />
        <Mandacaru className="cacto-hero" />
        <div className="hero-texto">
          <p className="chapeu">Bar e restaurante desde a Vila Medeiros</p>
          <h1>Feita com os olhos no mundo, pés no sertão</h1>
          <p>Comida sertaneja que acolhe todo paladar, do interior pra capital e de volta.</p>
          <div className="hero-botoes">
            <Link to="/reservas" className="btn-cheio">Reservar mesa</Link>
            <Link to="/cardapio" className="btn-vazio">Ver cardápio</Link>
          </div>
        </div>
      </section>

      <section className="sobre">
        <Mandacaru className="cacto-sobre" />
        <img src="/assets/museu.jpg" alt="Antigo Mocotó" />
        <div>
          <p className="chapeu">O restaurante</p>
          <h2>Do balcão da Vila Medeiros pro mundo</h2>
          <p>
            O Mocotó nasceu pequeno e virou referência da cozinha sertaneja.
            Hoje ocupa a lista dos melhores da América Latina, tem selo Bib Gourmand
            e segue com a mesma base: ingrediente do interior, respeito e panela cheia.
          </p>
          <Link to="/casas">Conheça nossas casas →</Link>
        </div>
      </section>

      <section className="destaques">
        <Palma className="palma-destaque" />
        <Mandacaru className="cacto-destaque" />
        <p className="chapeu">Pra abrir o apetite</p>
        <h2>Os queridinhos</h2>
        <div className="grade-pratos">
          {pratos.map((p) => (
            <div className="prato" key={p.nome}>
              <img src={p.foto} alt={p.nome} />
              <h3>{p.nome}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
