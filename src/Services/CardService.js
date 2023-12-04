import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const getUserId = () => {
    const userId = sessionStorage.getItem('userId');
    console.log('Id do usuário:', userId);
    if (!userId) {
        throw new Error('Usuário não logado');
    }
    return userId;
};

const CardService = {
    getAllCards: async () => {
        try {
            const userId = getUserId();
            const response = await axios.get(`${API_BASE_URL}/cards/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar cards:', error.message);
            throw error;
        }
    },

    createCard: async (userId, newCardData) => {
        try {
            await axios.post(`${API_BASE_URL}/cards/${userId}`, newCardData);
        } catch (error) {
            console.error('Erro ao criar card:', error.message);
            throw error;
        }
    },

    updateCard: async (userId, id, updatedData) => {
        try {
            await axios.put(`${API_BASE_URL}/cards/${userId}/${id}`, updatedData);
        } catch (error) {
            console.error('Erro ao atualizar card:', error.message);
            throw error;
        }
    },

    deleteCard: async (userId, id) => {
        try {
            await axios.delete(`${API_BASE_URL}/cards/${userId}/${id}`);
        } catch (error) {
            console.error('Erro ao excluir card:', error.message);
            throw error;
        }
    },
};

export default CardService;
