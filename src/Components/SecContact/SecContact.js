import { Link } from "react-router-dom";
import "./SecContact.css"

function SecContact() {
    return (
        <div>
            <section className="contact">
                <h1 className="text">Seja Um Parceiro Nosso</h1>
                <Link to="/signup"><button className="bntContact">Cadastre-se aqui</button></Link>
            </section>
        </div>
    )
}
export default SecContact;