import SEOHead from '../components/SEOHead'
import { Mandacaru, Palma } from '../components/Sertao'
import Faixa from '../components/Faixa'
import './Budega.css'

function Budega() {
  const secoes = [
    {
      nome: 'Do nosso forno',
      itens: [
        { nome: 'Brioche de mandioca', preco: 'R$ 29,90' },
        { nome: 'Pão integral', preco: 'R$ 26,90' },
        { nome: 'Pão especial', desc: 'sextas e sábados', preco: 'R$ 28,90' },
      ],
    },
    {
      nome: 'Do nosso tacho',
      itens: [
        { nome: 'Doces artesanais', desc: 'potes de 200ml — abóbora com coco e laranja, bananada com rapadura, caju em calda, cocada com castanha-do-pará, goiabada com vinho tinto, doce de leite com fava de aridan', preco: 'R$ 24,90 cada' },
      ],
    },
    {
      nome: 'Do nosso bar',
      itens: [
        { nome: 'MocoBlend edição especial', desc: 'jequitibá-rosa, jaqueira e amburana 700ml', preco: 'R$ 99,80' },
        { nome: 'Energético sertanejo', desc: 'catuaba, jurubeba, pó de guaraná e marapuama 700ml', preco: 'R$ 69,80' },
        { nome: 'Francesinha', desc: 'cachaça João Mendes ouro, baunilha natural e umburana 500ml', preco: 'R$ 99,80' },
        { nome: 'Jota Mel', desc: 'cachaça João Mendes e mel de abelhas 700ml', preco: 'R$ 69,80' },
        { nome: 'Mocobreja Bamberg', desc: 'Helles não filtrada — Votorantim, SP', preco: '355ml R$ 19,90 | 600ml R$ 29,90' },
      ],
    },
    {
      nome: 'Da nossa despensa',
      itens: [
        { nome: 'Café Pessegueiro', desc: 'Mococa, SP 250g', preco: 'R$ 30,90' },
        { nome: 'Calda de rapadura', desc: 'Vila Medeiros, SP 750ml', preco: 'R$ 32,90' },
        { nome: 'Farinha Biju', desc: 'Trindade, GO 500g', preco: 'R$ 16,90' },
        { nome: 'Farinha de mandioca', desc: 'Jupi, PE 1kg', preco: 'R$ 24,90' },
        { nome: 'Farinha de milho', desc: 'Lindóia, SP 250g', preco: 'R$ 16,90' },
        { nome: 'Manteiga-de-garrafa', desc: 'Piauí, PA 200ml', preco: 'R$ 22,90' },
        { nome: 'Melado de cana', desc: 'Quissamã, RJ 900g', preco: 'R$ 36,90' },
        { nome: 'Molho de pimenta agridoce', desc: '250ml', preco: 'R$ 36,90' },
        { nome: 'Molhos de pimenta orgânicos', desc: 'Inconfidentes, MG — amarelo, verde, tradicional, extra forte 45ml', preco: 'R$ 26,90 cada | kit com 4 R$ 89,90' },
        { nome: 'Pimenta biquinho orgânica', desc: 'Inconfidentes, MG 180g', preco: 'R$ 26,90' },
        { nome: 'Polvilho doce para tapioca', desc: '500g', preco: 'R$ 13,90' },
        { nome: 'Tapioca granulada', desc: '500g', preco: 'R$ 15,90' },
        { nome: 'Rapadura mineira', desc: 'Maria da Fé, MG 600g', preco: 'R$ 10,90' },
        { nome: 'Rapadura paraibana', desc: 'Campina Grande, PB 240g', preco: 'R$ 5,90' },
        { nome: 'Vinagre de caju', desc: 'Assis, SP 250ml', preco: 'R$ 22,90' },
      ],
    },
    {
      nome: 'Souvenirs',
      itens: [
        { nome: 'Camisetas', desc: 'coleção 2023', preco: 'R$ 59,90' },
        { nome: 'Livro Mocotó: o pai, o filho e o restaurante', preco: 'R$ 99,80' },
        { nome: 'Tapiqueira de ferro fundido', desc: 'Oka | Renda | Mandala', preco: 'R$ 79,90' },
        { nome: 'Avental', desc: 'coleção 2023', preco: 'R$ 89,90' },
        { nome: 'Cervegela', desc: 'amarelo | azul | vermelho', preco: 'R$ 19,90' },
      ],
    },
  ]

  return (
    <>
      <SEOHead
        title="A budega | Mocotó"
        description="Empório Mocotó: farinha, rapadura, cachaça, doces e camisetas pra levar pra casa."
        path="/budega"
      />
      <div className="budega-hero">
      <Mandacaru className="cacto-budega" />
      <Palma className="palma-budega" />
      <div className="pagina">
        <p className="chapeu">Empório Mocotó</p>
        <h1>A budega</h1>
        <p className="intro">
          Farinha do interior, rapadura, cachaça de alambique e as camisetas da casa.
          O que sai da nossa cozinha e do nosso bar também vira pra você levar pra casa.
        </p>

        <div className="grade-budega">
          {secoes.map((s) => (
            <div className="secao-budega" key={s.nome}>
              <h2>{s.nome}</h2>
              <ul>
                {s.itens.map((item) => (
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
          ))}
        </div>
      </div>
    </div>
      <Faixa frase="Família é a nossa liga" tom="tan" />
    </>
  )
}

export default Budega
