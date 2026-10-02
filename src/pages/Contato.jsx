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
]

function Contato() {
  return (
    <>
      <div className="pagina-contato">
        <p className="chapeu">Fale com a gente</p>
        <h1>Contato</h1>
        <div className="contato-geral">
          <p><strong>(11) 2951-3056</strong></p>
          <p>contato@mocoto.com.br</p>
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
            <p>mariana.branda@mocoto.com.br</p>
          </div>
          <div>
            <h3>Negócios e participações</h3>
            <p>(11) 2951-3056 Ramal 4</p>
            <p>ricardo@mocoto.com.br</p>
          </div>
          <div>
            <h3>Trabalhe com a gente</h3>
            <p>Manda seu currículo pra contato@mocoto.com.br</p>
          </div>
        </div>
      </div>
      <Faixa frase="Acolher bem sem olhar a quem" tom="creme" />
    </>
  )
}

export default Contato
