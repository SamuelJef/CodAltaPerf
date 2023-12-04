import React, { useState, useEffect } from 'react';
import CardService from '../../Services/CardService';
import { getUserId } from '../../Services/CardService';
import './cards.css';
import Auth from '../../Services/auth';

const CardManipulation = () => {
    const [cards, setCards] = useState([]);
    const [newCardData, setNewCardData] = useState({
        title: '',
        description: '',
    });
    const [updatedCardData, setUpdatedCardData] = useState({
        title: '',
        description: '',
    });

    useEffect(() => {
        // Carregar os cards ao montar o componente
        loadCards();
    }, []);

    const loadCards = async () => {
        try {
            const userId = getUserId();
            const cardsData = await CardService.getAllCards(userId);
            setCards(cardsData);
        } catch (error) {
            // Trate o erro conforme necessário
        }
    };

    const handleCreateCard = async () => {
        try {
            const userId = getUserId();
            await CardService.createCard(userId, newCardData);
            // Recarregar os cards após criar um novo
            loadCards();
            // Limpar os dados do novo card
            setNewCardData({ title: '', description: '' });
        } catch (error) {
            // Trate o erro conforme necessário
        }
    };

    const handleUpdateCard = async (cardId) => {
        try {
            const userId = getUserId();
            await CardService.updateCard(userId, cardId, updatedCardData);
            // Recarregar os cards após atualizar
            loadCards();
            // Limpar os dados do card atualizado
            setUpdatedCardData({ title: '', description: '' });
        } catch (error) {
            // Trate o erro conforme necessário
        }
    };

    const handleDeleteCard = async (cardId) => {
        try {
            if (!cardId) {
                throw new Error('ID do card não fornecido');
            }

            const userId = getUserId();
            await CardService.deleteCard(userId, cardId);
            // Recarregar os cards após excluir
            loadCards();
        } catch (error) {
            // Trate o erro conforme necessário
        }
    };

    const handleLogout = async () => {
        try {
            await Auth.logout();
        } catch (error) {
            // Trate o erro conforme necessário
        }
    };



    return (
        <div className="cardManipulation">
            <button onClick={handleLogout}>Logout</button>
            <h2>Manipulação de Cards</h2>
            <div>
                <h3>Criar Novo Card</h3>
                <label>Título:</label>
                <input
                    type="text"
                    value={newCardData.title}
                    onChange={(e) => setNewCardData({ ...newCardData, title: e.target.value })}
                />
                <label>Descrição:</label>
                <input
                    type="text"
                    value={newCardData.description}
                    onChange={(e) => setNewCardData({ ...newCardData, description: e.target.value })}
                />
                <button onClick={handleCreateCard}>Criar Card</button>
            </div>

            <div>
                <h3>Atualizar Card</h3>
                {/* Campos de atualização de card */}
                <label>Título Atualizado:</label>
                <input
                    type="text"
                    value={updatedCardData.title}
                    onChange={(e) => setUpdatedCardData({ ...updatedCardData, title: e.target.value })}
                />
                <label>Descrição Atualizada:</label>
                <input
                    type="text"
                    value={updatedCardData.description}
                    onChange={(e) => setUpdatedCardData({ ...updatedCardData, description: e.target.value })}
                />
                {/* Lista de cards */}
                <ul>
                    {cards.map((card) => (
                        <li key={card._id}>
                            {card.title} - {card.description}
                            <button onClick={() => handleUpdateCard(card._id)}>Atualizar</button>
                            <button onClick={() => handleDeleteCard(card._id)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardManipulation;
