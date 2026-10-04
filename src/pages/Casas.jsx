import { Head } from 'vite-react-ssg'
import { SITE_URL } from '../seo.js'
import { Link } from 'react-router-dom'
import Faixa from '../components/Faixa'
import './Casas.css'

function Casas() {
  const casas = [
    { foto: '/assets/museu1-1.webp', nome: 'Vila Medeiros', desc: 'A matriz, onde tudo começou', horario: 'Seg a qui 12–22h • Sex 12–23h • Sáb 11h30–23h • Dom 11h30–17h', link: 'https://widget.getinapp.com.br/GPobdKkE' },
    { foto: '/assets/mocoto-vilaclementino.webp', nome: 'Vila Clementino', desc: 'Zona sul, salão amplo', horario: 'Todos os dias, 12h às 16h', link: 'https://reservation.getin.app/O6pjaRP5' },
    { foto: '/assets/mocoto-leopoldina.webp', nome: 'Vila Leopoldina', desc: 'Zona oeste, clima de roça', horario: 'Ter a sáb 12–22h • Dom 12–16h', link: 'https://reservation.getin.app/M1mArV13' },
    { foto: '/assets/pinheiros.webp', nome: 'Café Pinheiros', desc: 'Café e quitutes o dia todo', horario: 'Seg a sáb, 11h às 17h', link: '/reservas' },
    { foto: '/assets/balaio-ims.webp', nome: 'Balaio IMS', desc: 'Na Paulista, dentro do IMS', horario: 'Ter a qui 12–16h • Sex e sáb 12–16h e 19–22h • Dom 12–17h', link: 'https://balaioims.com.br/' },
  ]

  // telefones e endereço da matriz já existem no código (Contato); matriz sem tel próprio = TODO
  const telefones = {
    'Vila Clementino': '(11) 3566-3732',
    'Vila Leopoldina': '(11) 3294-4814',
    'Café Pinheiros': '(11) 3530-1365',
    'Balaio IMS': '(11) 2842-9123',
  }

  const enderecos = {
    'Vila Medeiros': 'Av. Nossa Sra do Loreto, 1100 — São Paulo/SP',
    'Vila Clementino': 'R. Pedro de Toledo, 450 — São Paulo/SP',
    'Vila Leopoldina': 'R. Aroaba, 333 — São Paulo/SP',
    'Café Pinheiros': 'R. Pedro Cristi, 89 — São Paulo/SP',
    'Balaio IMS': 'Av. Paulista, 2424 — São Paulo/SP',
  }

  // TODO confirmar com o restaurante: tel da matriz, faixa de preço, CEPs, geo e horários estruturados
  const lugares = casas.map((c) => {
    const end = c.end || enderecos[c.nome] || ''
    return {
      '@type': 'Restaurant',
      name: 'Mocotó ' + c.nome,
      url: SITE_URL,
      image: SITE_URL + '/og.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: end.split('—')[0].trim(),
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      ...(telefones[c.nome] ? { telephone: telefones[c.nome] } : {}),
    }
  })

  return (
    <>
      <Head>
        <title>Nossas casas | Mocotó</title>
        <meta name="description" content="Conheça as casas do Mocotó: Vila Medeiros, Vila Clementino, Vila Leopoldina, Café Pinheiros e Balaio IMS." />
        <link rel="canonical" href={SITE_URL + '/casas'} />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@graph': lugares })}</script>
      </Head>
      <div className="pagina">
        <p className="chapeu">Onde nos achar</p>
        <h1>Nossas casas</h1>
        <div className="grade-casas">
        {casas.map((c) => (
          <div className="casa" key={c.nome}>
            <img src={c.foto} alt={c.nome} />
            <div className="casa-corpo">
              <h3>{c.nome}</h3>
              <p>{c.desc}</p>
              <p className="horario">{c.horario}</p>
              {c.link.startsWith('http') ? <a href={c.link} target="_blank" className="btn-casa">Reservar</a> : <Link to={c.link} className="btn-casa">Reservar</Link>}
            </div>
          </div>
        ))}
      </div>
      </div>
      <Faixa frase="O sertão é do mundo" tom="creme" />
    </>
  )
}

export default Casas
