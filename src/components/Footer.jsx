import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape-dentro">
        <div>
          <h4>Mocotó</h4>
          <p>Comida sertaneja feita com os olhos no mundo e os pés no sertão.</p>
        </div>
        <div>
          <h4>Visite</h4>
          <Link to="/casas">Nossas casas</Link>
          <Link to="/budega">A budega</Link>
          <Link to="/reservas">Reservas</Link>
        </div>
        <div>
          <h4>Contato</h4>
          <p>contato@mocoto.com.br</p>
          <p>(11) 2951-3056</p>
        </div>
      </div>
      <p className="copy">© 2026 Mocotó - protótipo</p>
    </footer>
  )
}

export default Footer
