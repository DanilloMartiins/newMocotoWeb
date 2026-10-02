import './Faixa.css'

// faixa com frase da casa, igual as do site original
function Faixa({ frase, tom }) {
  return (
    <section className={'faixa faixa-' + (tom || 'creme')}>
      <p>“{frase}”</p>
    </section>
  )
}

export default Faixa
