import { useState } from 'react'
import Faixa from '../components/Faixa'
import './Equipe.css'

// texto original do site, na integra - a roupa é de cordel, a palavra é deles
const chef = {
  foto: '/assets/rodrigo-oliveira.webp', nome: 'Rodrigo Oliveira', cargo: 'Chef',
  texto: [
    'Rodrigo Oliveira, é filho de pernambucanos e cozinheiro. Há mais de 20 anos, comanda a casa que conta a história da sua família, o Mocotó. Ganhou inúmeros prêmios nacionais e internacionais.',
    'Lançou o livro “Mocotó - o pai, o filho e o restaurante”, o Mocotó Café, no Mercado de Pinheiros e o Balaio IMS, dentro do Instituto Moreira Salles, na Avenida Paulista. Em 2023, abriu uma nova unidade do Mocotó na Vila Leopoldina.',
    'Atualmente se dedica também a projetos agroecológicos no Sítio Mulungu, em São Paulo e na Fazenda Maniva, em Pernambuco.',
  ],
}

const equipe = [
  {
    foto: '/assets/ZeAlmeida.webp', nome: 'Seu Zé Almeida', cargo: 'Fundador',
    texto: [
      'Nasceu em 1938 em Mulungu, no sertão pernambucano. Chegou a São Paulo aos 25 anos. Trabalhou em diversos lugares até que em 1973, em sociedade com dois irmãos, montou a casa do norte Irmãos Almeida. Esse negócio é o precurssor do Mocotó e Seu Zé é o começo de tudo.',
    ],
  },
  {
    foto: '/assets/Gil.webp', nome: 'Gilberto Silva', cargo: 'Sub-chef',
    texto: [
      'Nasceu em Lagoa do Itaenga, na Zona da Mata pernambucana. Veio para São Paulo com 20 anos direto para uma distribuidora de alimentos. Entrou no Mocotó como extra nos fins de semana lavando os copos. Hoje é nosso sub-chef e comanda a cozinha junto com o chef Rodrigo Oliveira.',
    ],
  },
  {
    foto: '/assets/rafael-bernardoni-1.webp', nome: 'Rafael Bernardoni', cargo: 'Chef de eventos',
    texto: [
      'Da zona norte de São Paulo, aprendeu a cozinhar quando serviu na Força Aérea Brasileira e fez curso técnico de cozinha. Em 2012, começou a estagiar no Mocotó e em poucos meses se tornou cozinheiro. Fez Gastronomia na FMU, foi subchefe e hoje é o nosso chef de eventos.',
    ],
  },
  {
    foto: '/assets/GabrielSalvini.webp', nome: 'Gabriel Salvini', cargo: 'Cozinheiro de criação',
    texto: [
      'Formado em Gastronomia na Anhembi Morumbi, aprendeu a gostar das panelas cozinhando com a mãe e a avó. Pesquisou a cozinha brasileira e se apaixonou pelo trabalho do chef Rodrigo Oliveira. Estagiou no Esquina Mocotó e no Balaio IMS. Hoje está na Vila Medeiros como cozinheiro de criação, responsável pelo controle e qualidade.',
    ],
  },
  {
    foto: '/assets/Sandoval.webp', nome: 'Sandoval Soares', cargo: 'Cozinha de produção',
    texto: [
      'Nasceu em Palmeiras dos Índios, Alagoas. Veio para São Paulo com 17 anos e teve alguns trabalhos como ajudante de pedreiro e em uma fábrica de instrumentos musicais. Começou no Mocotó na limpeza em 2006 e hoje comanda a cozinha de produção.',
    ],
  },
  {
    foto: '/assets/Gean.webp', nome: 'Gean Rocha', cargo: 'Compras',
    texto: [
      'Cearense, de Amontada, no interior do estado e veio com a mãe para São Paulo quando tinha 3 anos. Entrou para Força Aérea onde começou a cuidar da logística da cozinha. De lá passou para o Mocotó e hoje é responsável pelo nosso setor de compras.',
    ],
  },
  {
    foto: '/assets/Ricardo.webp', nome: 'Ricardo Lima', cargo: 'Gestor e sócio',
    texto: [
      'Nativo da Vila Medeiros. Cursou Turismo e é pós-graduado Master em Gestão de Gastronomia. Trabalhou com eventos e administração e começou no Mocotó em 2004 no salão, quando tudo ainda era pequeno. Hoje é nosso gestor e sócio.',
    ],
  },
  {
    foto: '/assets/Silvia.webp', nome: 'Silvia Guzela', cargo: 'Gestora e sócia',
    texto: [
      'Paulistana, formada em gastronomia, Ciências Contábeis e pós-graduada em controladoria financeira. Por um tempo vivenciou a cozinha mas escolheu seguir como carreira a gestão dos números e de pessoas. Em 2012 entrou no Mocotó como Gerente financeira. Hoje é nossa gestora e sócia.',
    ],
  },
  {
    foto: '/assets/adriana.webp', nome: 'Adriana Salay', cargo: 'Comunicação',
    texto: [
      'Nasceu em Santo André. Cursou história e fez mestrado para estudar os hábitos alimentares do Brasil. Se apaixonou pelo tema e começou a trabalhar com gastronomia. Hoje faz doutorado e cuida da nossa comunicação.',
    ],
  },
]

function Cartao({ pessoa }) {
  const [virado, setVirado] = useState(false)

  function virar() {
    setVirado(!virado)
  }

  return (
    <div
      className={virado ? 'cordel virado' : 'cordel'}
      onClick={virar}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') virar() }}
    >
      <div className="cordel-dentro">
        <div className="face frente">
          <img src={pessoa.foto} alt={pessoa.nome} loading="lazy" />
          <h3>{pessoa.nome}</h3>
          <p className="cargo">{pessoa.cargo}</p>
        </div>
        <div className="face verso">
          <h4>{pessoa.nome}</h4>
          {pessoa.texto.map((p, i) => (
            <p key={i} className="linha">{p}</p>
          ))}
          <p className="dica">toque pra voltar ↻</p>
        </div>
      </div>
    </div>
  )
}

function Equipe() {
  return (
    <>
      <div className="pagina-equipe">
        <p className="chapeu">Nossa gente</p>
        <h1>A equipe</h1>
        <p className="intro">
          Família é a nossa liga. Toque em cada folheto pra
          ler a história de quem faz o Mocotó.
        </p>
        <div className="quadro-chef">
        <img src={chef.foto} alt={chef.nome} />
        <div>
          <p className="chapeu">O chef</p>
          <h2>{chef.nome}</h2>
          {chef.texto.map((p, i) => (
            <p key={i} className="linha">{p}</p>
          ))}
        </div>
      </div>
      <div className="grade-equipe">
        {equipe.map((p) => (
          <Cartao key={p.nome} pessoa={p} />
        ))}
      </div>
      </div>
      <Faixa frase="Acolher bem sem olhar a quem" tom="vinho" />
    </>
  )
}

export default Equipe
