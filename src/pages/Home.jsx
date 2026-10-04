import { Head } from 'vite-react-ssg'
import { SITE_URL, SEO_PADRAO } from '../seo.js'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Mandacaru, Palma, Sol } from '../components/Sertao'
import Faixa from '../components/Faixa'
import './Home.css'

// cada foto abre o maps do endereço da casa
const mapas = [
  { foto: '/assets/museu1-1.webp', nome: 'Vila Medeiros', link: 'https://goo.gl/maps/PMF5d9Xk9sR2' },
  { foto: '/assets/mocoto-vilaclementino.webp', nome: 'Vila Clementino', link: 'https://maps.app.goo.gl/XXpoQK9Qt9DuD1AZ8' },
  { foto: '/assets/mocoto-leopoldina.webp', nome: 'Vila Leopoldina', link: 'https://goo.gl/maps/kvthQfHnP855LUvq8?coh=178572&entry=tt' },
  { foto: '/assets/pinheiros.webp', nome: 'Café Pinheiros', link: 'https://www.google.com/maps/search/?api=1&query=Mocot%C3%B3+Caf%C3%A9+Mercado+de+Pinheiros' },
]
function Home() {
  const faixa = useRef(null)

  // TODO confirmar com o restaurante: faixa de preço, CEP, geo e horários estruturados
  const restaurante = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Mocotó',
    servesCuisine: ['Nordestina', 'Brasileira'],
    telephone: '(11) 2951-3056',
    url: SITE_URL,
    image: SITE_URL + '/og.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Nossa Sra do Loreto, 1100',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    sameAs: [
      'https://www.instagram.com/mocotorestaurante?stkn=ZDF4aGtzbTcwc2Zi',
      'https://www.facebook.com/share/1c3oUjqcAa/',
    ],
  }

  // roda a faixa pro lado (um card por clique)
  function rolar(dir) {
    faixa.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  // so prato com nome certo, sem inventar legenda
  const pratos = [
    { foto: '/assets/moqueca.webp', nome: 'Escondidinho de camarão', desc: 'Com creme de moqueca' },
    { foto: '/assets/pratos1.webp', nome: 'Baião de dois', desc: 'Queijo coalho e carne-seca' },
    { foto: '/assets/pratos3.webp', nome: 'Do tacho', desc: 'Receita da casa' },
    { foto: '/assets/pratos11.webp', nome: 'Torresmo', desc: 'O clássico da casa' },
    { foto: '/assets/caipirinha.webp', nome: 'Caipirinha', desc: 'Do nosso bar' },
    { foto: '/assets/pudim.webp', nome: 'Pudim de tapioca', desc: 'Sobremesa pra fechar' },
  ]

  return (
    <div>
      <Head>
        <title>{SEO_PADRAO.titulo}</title>
        <meta name="description" content={SEO_PADRAO.descricao} />
        <link rel="canonical" href={SITE_URL + '/'} />
        <script type="application/ld+json">{JSON.stringify(restaurante)}</script>
      </Head>
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

      <Faixa frase="Do sertão na quebrada para o mundo" tom="tan" />

      <section className="sobre">
        <Mandacaru className="cacto-sobre" />
        <img src="/assets/museu.webp" alt="Antigo Mocotó" />
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
        <div className="carrossel-linha">
          <button className="seta" onClick={() => rolar(-1)} aria-label="Anterior">‹</button>
          <div className="faixa-pratos" ref={faixa}>
            {pratos.map((p) => (
              <div className="prato" key={p.nome}>
                <img src={p.foto} alt={p.nome} loading="lazy" />
                <h3>{p.nome}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
          <button className="seta" onClick={() => rolar(1)} aria-label="Próximo">›</button>
        </div>
      </section>

      <section className="fecho">
        <p className="fecho-frase">“O sertão é do mundo”</p>
        <div className="fecho-gaiolas">
          <img src="/assets/producaoanimal.png" alt="Brasil sem gaiolas" />
          <p>Mocotó adere à campanha <strong>Brasil Sem Gaiolas</strong> do Fórum Animal.</p>
          <a href="https://www.instagram.com/p/C4L0cj_R6T9/?igsh=bm4wZDFzZDJseGhs" target="_blank" rel="noreferrer">Saiba mais ›</a>
        </div>
      </section>
    </div>
  )
}

export default Home
