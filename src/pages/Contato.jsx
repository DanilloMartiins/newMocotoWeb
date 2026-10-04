import SEOHead from '../components/SEOHead'
import Faixa from '../components/Faixa'
import './Contato.css'

// endereços e horários copiados do site original
const casas = [
  {
    nome: 'Vila Medeiros',
    end: 'Av. Nossa Sra do Loreto, 1100 — São Paulo/SP',
    horario: 'Seg a qui 12–22h • Sex 12–23h • Sáb 11h30–23h • Dom 11h30–17h',
    reserva: 'https://widget.getinapp.com.br/GPobdKkE',
    mapa: 'https://goo.gl/maps/PMF5d9Xk9sR2',
  },
  {
    nome: 'Vila Clementino',
    end: 'R. Pedro de Toledo, 450 — São Paulo/SP',
    horario: 'Todos os dias, 12h às 16h',
    tel: '(11) 3566-3732',
    reserva: 'https://reservation.getin.app/O6pjaRP5',
    mapa: 'https://maps.app.goo.gl/XXpoQK9Qt9DuD1AZ8',
  },
  {
    nome: 'Vila Leopoldina',
    end: 'R. Aroaba, 333 — São Paulo/SP',
    horario: 'Ter a sáb 12–22h • Dom 12–16h',
    tel: '(11) 3294-4814',
    reserva: 'https://reservation.getin.app/M1mArV13',
    mapa: 'https://goo.gl/maps/kvthQfHnP855LUvq8?coh=178572&entry=tt',
  },
  {
    nome: 'Café Pinheiros',
    end: 'R. Pedro Cristi, 89 — São Paulo/SP',
    horario: 'Seg a sáb, 11h às 17h',
    tel: '(11) 3530-1365',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Mocot%C3%B3+Caf%C3%A9+Mercado+de+Pinheiros',
  },
  {
    nome: 'Balaio IMS',
    end: 'Av. Paulista, 2424 — São Paulo/SP',
    horario: 'Ter a qui 12–16h • Sex e sáb 12–16h e 19–22h • Dom 12–17h',
    tel: '(11) 2842-9123',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Balaio+IMS+Av+Paulista+2424',
  },
]

function Contato() {
  return (
    <>
      <SEOHead
        title="Contato | Mocotó"
        description="Fale com o Mocotó: endereços, telefones, e-mails e redes sociais."
        path="/contato"
      />
      <div className="pagina-contato">
        <p className="chapeu">Fale com a gente</p>
        <h1>Contato</h1>
        <div className="contato-social">
          <a href="https://www.instagram.com/mocotorestaurante?stkn=ZDF4aGtzbTcwc2Zi" target="_blank" rel="noreferrer" aria-label="Instagram do Mocotó">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.facebook.com/share/1c3oUjqcAa/" target="_blank" rel="noreferrer" aria-label="Facebook do Mocotó">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3.5H9V21h3.5v-8.5h2.5l1-3.5h-3.5V6.8c0-.7.4-1.3 1.5-1.3H15z" />
            </svg>
          </a>
        </div>
        <div className="grade-contato">
          {casas.map((c) => (
            <div className="cartao-contato" key={c.nome}>
              <h3>{c.nome}</h3>
              <p>{c.end}</p>
              <p className="horario">{c.horario}</p>
              {c.tel && <p>{c.tel}</p>}
              <div className="contato-botoes">
                <a href={c.mapa} target="_blank" rel="noreferrer">Ver no mapa</a>
                {c.reserva && <a href={c.reserva} target="_blank" rel="noreferrer">Reservar</a>}
              </div>
            </div>
          ))}
        </div>
        <div className="contato-extra">
          <div>
            <h3>Imprensa</h3>
            <p><a className="email" href="mailto:mariana.branda@mocoto.com.br">mariana.branda@mocoto.com.br</a></p>
          </div>
          <div>
            <h3>Negócios e participações</h3>
            <p>(11) 2951-3056 Ramal 4</p>
            <p><a className="email" href="mailto:ricardo@mocoto.com.br">ricardo@mocoto.com.br</a></p>
          </div>
          <div>
            <h3>Trabalhe com a gente</h3>
            <p>Manda seu currículo pra <a className="email" href="mailto:contato@mocoto.com.br">contato@mocoto.com.br</a></p>
          </div>
        </div>
      </div>
      <Faixa frase="Acolher bem sem olhar a quem" tom="creme" />
    </>
  )
}

export default Contato
