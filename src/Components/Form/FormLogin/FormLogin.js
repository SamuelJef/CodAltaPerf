
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../Services/auth';
import './FormLogin.css';

function FormLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userData = await Auth.login(email, senha);
            console.log(userData);
            
        } catch (error) {
           
            console.error('Erro ao fazer login:', error.message);
        }
    };

    return (
        <div className="secFormL">
            <form className="formL" onSubmit={handleLogin}>
                <h2>Faça seu login</h2>
                <label>Usuario:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Senha:</label>
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <div className="bntCenter">
                    <button type="submit" className="bntFormL">
                        Entrar
                    </button>
                    <Link to="/signup">Cadastrar</Link>
                </div>
            </form>
        </div>
    );
}

export default FormLogin;
