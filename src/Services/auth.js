import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const Auth = {
    login: async (email, senha) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, { email, senha });

            if (!response) {
                throw new Error('Erro ao fazer login');
            }

            const data = response.data;
            console.log('Usuário logado:', data);
            const userId = sessionStorage.setItem('userId', data._id);
            const id = sessionStorage.getItem('userId');
            console.log('Id do usuário:', id, userId);

            window.location.href = '/card';
            return data;
        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
            throw error;
        }
    },
    logout: async () => {
        try {
            console.log('Usuário deslogado');
            sessionStorage.removeItem('userId');
            window.location.href = '/login';
        } catch (error) {
            console.error('Erro ao fazer logout:', error.message);
            throw error;
        }
    },

    register: async (username, email, senha) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/register`, { username, email, senha });

            if (response.status !== 200) {
                throw new Error('Erro ao cadastrar usuário');
            }

            const data = response.data;
            console.log('Usuário cadastrado:', data);

            return data;
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error.message);
            throw error;
        }
    },

};

export default Auth;
