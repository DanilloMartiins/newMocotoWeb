import { useState } from 'react'
import './Pet.css'

const regras = [
  'Leve seu pet para fazer as necessidades antes de se sentar.',
  'Seu pet deve ser sociável com outros cães e pessoas.',
  'Caso o seu pet não goste de interação, avise quem se aproximar.',
  'Se seu pet gostar muito de interagir, certifique-se de que os outros são receptivos.',
  'Latidos excessivos não são legais em um restaurante.',
  'Para evitar acidentes não deixe o seu pet no meio da passagem.',
  'Patinha em cima da mesa ou lambidas no prato não são adequadas.',
]

function Pet() {
  const [aberto, setAberto] = useState(false)

  return (
    <>
      <button className="pet-selo" onClick={() => setAberto(true)} aria-label="Pet friendly">
        <img src="/assets/PetSelo.png" alt="" aria-hidden="true" className="pet-icone-desk" />
        <img src="/assets/pata.png" alt="" aria-hidden="true" className="pet-icone-mob" />
        <span>Pet friendly</span>
      </button>
      {aberto && (
        <div className="pet-fundo" onClick={() => setAberto(false)}>
          <div className="pet-modal" onClick={(e) => e.stopPropagation()}>
            <button className="pet-fechar" onClick={() => setAberto(false)} aria-label="Fechar">×</button>
            <p className="chapeu">Traga seu amigo</p>
            <h2>Seu melhor amigo é bem-vindo no Mocotó!</h2>
            <div className="pet-grade">
              <div>
                <p>
                  Avise nossa equipe que temos um convidado especial para
                  prepararmos uma mesa e aproveite nossa experiência oferecida
                  por <strong>GranPlus</strong>.
                </p>
                <p>Para maior conforto do seu amigo, oferecemos:</p>
                <ul>
                  <li>Água fresquinha e filtrada.</li>
                  <li>Gancho para prender a guia.</li>
                  <li>Colchonete para o pet, se preferir.</li>
                  <li>Agrado do chef.</li>
                </ul>
                <img src="/assets/dog.png" alt="Cachorro do Mocotó" className="pet-dog" />
              </div>
              <div className="pet-lembre">
                <h3>Lembre-se</h3>
                <ul>
                  {regras.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Pet
