import { useState } from 'react'
import { Mandacaru } from '../components/Sertao'
import './Cardapio.css'

function Cardapio() {
  const [secao, setSecao] = useState('Petiscos')

  const secoes = [
    {
      nome: 'Petiscos',
      itens: [
        { nome: 'Torresmo', desc: 'o nosso clássico', preco: 'R$ 34,90' },
        { nome: 'Chips de mandioca', desc: '', preco: 'R$ 26,90' },
        { nome: 'Queijo de coalho com melado', desc: '', preco: 'R$ 24,90' },
        { nome: 'Carne de panela', desc: '', preco: 'R$ 34,90' },
        { nome: 'Espetinho de coração', desc: 'coração de boi na brasa', preco: 'R$ 32,90' },
      ],
    },
    {
      nome: 'Porções',
      itens: [
        { nome: 'Dadinhos de tapioca', desc: 'os originais', preco: '6 unid. R$ 28,90 | 12 unid. R$ 39,90' },
        { nome: 'Bolinho de alheira', desc: 'maionese de azeitona preta', preco: '2 unid. R$ 19,90 | 4 unid. R$ 34,90' },
        { nome: 'Croqueta de carne de sol', desc: 'maionese de pimenta biquinho', preco: '2 unid. R$ 19,90 | 4 unid. R$ 34,90' },
        { nome: 'Torresminhos', desc: 'crocantes e sequinhos', preco: 'R$ 49,90' },
        { nome: 'Iscas de peixe', desc: 'tempurá de peixe amazônico', preco: 'R$ 59,90' },
        { nome: 'Moela de frango', desc: 'no caldo de galinha, conservinhas, pão de cuscuz', preco: 'R$ 49,90' },
        { nome: 'Bochecha de porco', desc: 'pirão de tucupi, farinha d\'água', preco: 'R$ 59,90' },
      ],
    },
    {
      nome: 'Escondidinhos',
      itens: [
        { nome: 'Carne-seca com requeijão', desc: '', preco: 'R$ 74,90' },
        { nome: 'Cogumelos com queijo de cabra', desc: '', preco: 'R$ 74,90' },
        { nome: 'Camarão com creme de moqueca', desc: '', preco: 'R$ 74,90' },
      ],
    },
    {
      nome: 'Saladas',
      itens: [
        { nome: 'Sertaneja', desc: 'folhas frescas, tomate cereja, cebola-roxa, cheiro-verde', preco: 'R$ 39,90' },
        { nome: 'Marajoara', desc: 'mussarela de búfala, castanha-do-pará, molho de ervas com iogurte', preco: 'R$ 64,90' },
        { nome: 'Porquinha', desc: 'alface romana, filé de porco grelhado, queijo Tulha, molho Caesar', preco: 'R$ 64,90' },
      ],
    },
    {
      nome: 'Tradicionais',
      itens: [
        { nome: 'Baião de dois', desc: 'queijo de coalho, linguiça, bacon e carne-seca', preco: 'mini R$ 39,90 | méd R$ 109,90 | grd R$ 129,90' },
        { nome: 'Favada', desc: 'fava amarela com linguiça, bacon e carne-seca', preco: 'mini R$ 35,90 | méd R$ 86,90 | grd R$ 109,90' },
        { nome: 'Feijão-de-corda', desc: 'feijão novo com maxixe, chuchu, abóbora e quiabo', preco: 'mini R$ 29,90 | méd R$ 65,90 | grd R$ 86,90' },
        { nome: 'Sarapatel', desc: 'miúdos de porco à moda do seu Zé Almeida', preco: 'mini R$ 32,90 | méd R$ 69,90 | grd R$ 99,90' },
        { nome: 'Caldo de mocotó', desc: 'receita exclusiva de mais de 50 anos', preco: 'a partir de R$ 29' },
      ],
    },
    {
      nome: 'Crianças',
      itens: [
        { nome: 'Carne de panela, arroz e purê', desc: 'acompanha saladinha e feijão de corda', preco: 'R$ 44,90' },
        { nome: 'Carne de sol, arroz e mandioca frita', desc: 'acompanha saladinha e feijão de corda', preco: 'R$ 44,90' },
      ],
    },
    {
      nome: 'Bebidas',
      itens: [
        { nome: 'Caipirinha tradicional', desc: 'cachaça, limão-taiti e açúcar', preco: 'R$ 29,90' },
        { nome: 'Caipirinha de frutas', desc: 'escolha até duas frutas', preco: 'R$ 39,90' },
        { nome: 'Gin tônica do sertão', desc: 'gin com caju e pimenta rosa', preco: 'R$ 44,90' },
        { nome: 'Moco Mule', desc: 'cachaça, gengibre, limão e melado de cana', preco: 'R$ 44,90' },
        { nome: 'Original pilsen 600ml', desc: '', preco: 'R$ 19,90' },
        { nome: 'Estrella Galicia lager 600ml', desc: '', preco: 'R$ 19,90' },
        { nome: 'Mocobreja Bamberg', desc: 'Munich Helles não filtrada', preco: '355ml R$ 19,90 | 600ml R$ 29,90' },
      ],
    },
    {
      nome: 'Sobremesas',
      itens: [
        { nome: 'Cajá manga', desc: 'purê de manga, sorbet de cajá e coco caramelizado', preco: 'R$ 34,90' },
        { nome: 'Pudim de tapioca', desc: 'leite de coco artesanal e calda de coco queimado', preco: 'R$ 32,90' },
        { nome: 'Mousse de chocolate com cachaça', desc: 'toque de cachaça em umburana e chantilly', preco: 'R$ 32,90' },
        { nome: 'Crème brûlée de doce de leite e umburana', desc: '', preco: 'R$ 32,90' },
        { nome: 'Cartola de engenho', desc: 'clássico pernambucano: banana, queijo manteiga, açúcar e canela', preco: 'R$ 34,90' },
        { nome: 'Doces artesanais', desc: 'abóbora, bananada, caju, cocada, goiabada ou doce de leite', preco: 'R$ 28,90' },
      ],
    },
    {
      nome: 'Cafés',
      itens: [
        { nome: 'Café coado Fazenda Pessegueiro', desc: 'Mococa, SP', preco: 'R$ 9,90' },
        { nome: 'Expresso origem Brasil', desc: 'Sul de Minas, MG', preco: 'R$ 9,90' },
        { nome: 'Cappuccino clássico', desc: 'canela ou umburana', preco: 'R$ 18,90' },
        { nome: 'Chá Sertão', desc: 'chá preto, casca de cacau, camomila, canela e caju', preco: 'R$ 18,90' },
      ],
    },
  ]

  let atual = secoes[0]
  for (let i = 0; i < secoes.length; i++) {
    if (secoes[i].nome === secao) {
      atual = secoes[i]
    }
  }

  return (
    <div className="pagina-cardapio">
      <div className="cartaz">
        <div className="faixa">
          {Array.from({ length: 22 }).map((_, i) => (
            <span key={i} className={'estrela e' + (i % 2)} />
          ))}
        </div>

        <div className="cartaz-titulo">
          <h1>CARDÁPIO</h1>
        </div>

        <div className="filtros">
          {secoes.map((s) => (
            <button
              key={s.nome}
              className={secao === s.nome ? 'ativo' : ''}
              onClick={() => setSecao(s.nome)}
            >
              {s.nome}
            </button>
          ))}
        </div>

        <div className="cartaz-corpo" key={secao}>
          <h2>{atual.nome}</h2>
          <ul>
            {atual.itens.map((item) => (
              <li key={item.nome}>
                <div className="prato-linha">
                  <div className="prato-nome">
                    <strong>{item.nome}</strong>
                    {item.desc && <span>{item.desc}</span>}
                  </div>
                  <span className="pontilhado"></span>
                  <span className="preco">{item.preco}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="cartaz-nota">Aceitamos: PIX, dinheiro e cartão.</p>

        <Mandacaru className="cartaz-cacto" />
        <svg className="cartaz-flor" viewBox="0 0 100 100" aria-hidden="true">
          <g fill="var(--sol)">
            {Array.from({ length: 12 }).map((_, i) => (
              <ellipse key={i} cx="50" cy="22" rx="7" ry="20" transform={`rotate(${i * 30} 50 50)`} />
            ))}
          </g>
          <circle cx="50" cy="50" r="16" fill="var(--marrom)" />
        </svg>
      </div>
    </div>
  )
}

export default Cardapio
