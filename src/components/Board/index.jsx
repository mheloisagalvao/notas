import React, { useState, useEffect } from 'react';
import firebase from '../../../firebaseConfig';

function Board() {
  const [cards, setCards] = useState([]);
  const [newCardContent, setNewCardContent] = useState('');
  const [editedCardContent, setEditedCardContent] = useState('');
  const [editedCardId, setEditedCardId] = useState('');
  const [user, setUser] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');

  const colors = [
    'bg-yellow-100',
    'bg-blue-100',
    'bg-green-100',
    'bg-pink-100'
  ];

  useEffect(() => {
    const auth = firebase.auth();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        const userDatabaseRef = firebase.database().ref(`board/cards/${user.uid}`);

        userDatabaseRef.on('value', (snapshot) => {
          const cardsData = snapshot.val();
          if (cardsData) {
            const cardsArray = Object.entries(cardsData).map(([id, data]) => ({
              id,
              ...data
            }));
            setCards(cardsArray);
          } else {
            setCards([]);
          }
        });

        return () => {
          userDatabaseRef.off();
        };
      } else {
        setUser(null);
        setCards([]);
      }
    });
  }, []);

  const handleAddCard = () => {
    if (newCardContent.trim() === '') {
      return;
    }

    firebase
      .database()
      .ref(`board/cards/${user.uid}`)
      .push({
        content: newCardContent,
        color: selectedColor
      });

    setNewCardContent('');
  };

  const handleEditCard = (cardId, cardContent) => {
    setEditedCardId(cardId);
    setEditedCardContent(cardContent);
  };

  const handleSaveEdit = (cardId) => {
    if (editedCardContent.trim() === '') {
      return;
    }

    firebase
      .database()
      .ref(`board/cards/${user.uid}/${cardId}`)
      .update({
        content: editedCardContent
      });

    setEditedCardId('');
    setEditedCardContent('');
  };

  const handleDeleteCard = (cardId) => {
    firebase.database().ref(`board/cards/${user.uid}/${cardId}`).remove();
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="p-6 space-y-4 bg-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyNote</h1>
        {user && (
          <div className="flex items-center space-x-4">
            <p>Welcome, {user.displayName}</p>
            <button
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              onClick={handleLogout}
            >
              Sair
            </button>
          </div>
        )}
      </div>
      {user ? (
        <div className="flex space-x-4">
          <textarea
            className="p-2 w-full bg-white border border-gray-300"
            value={newCardContent}
            onChange={(e) => setNewCardContent(e.target.value)}
            placeholder="Adicionar notinha *-*"
          />
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={handleAddCard}
          >
            Nova nota
          </button>
        </div>
      ) : (
        <p>Please login to access the board.</p>
      )}
      <ColorSelector
        colors={colors}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
      />
      <div className="flex flex-wrap space-y-4 gap-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`p-4 rounded-md shadow-md flex space-x-4 items-center ${card.color}`}
            style={{ flexBasis: '23%' }}
          >
            {editedCardId === card.id ? (
              <div className="flex-grow">
                <textarea
                  className="p-2 w-full bg-white border border-gray-300"
                  value={editedCardContent}
                  onChange={(e) => setEditedCardContent(e.target.value)}
                />
                <div className="flex space-x-4 mt-2">
                  <button
                    className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                    onClick={() => handleSaveEdit(card.id)}
                  >
                    Save
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => setEditedCardId('')}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-grow">
                <p>{card.content}</p>
                <div className="flex space-x-2 mt-2">
                  <button
                    className="px-3 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => handleEditCard(card.id, card.content)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => handleDeleteCard(card.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

function ColorSelector({ colors, selectedColor, onSelectColor }) {
  return (
    <div className="flex space-x-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-6 h-6 rounded-full cursor-pointer ${color} ${
            selectedColor === color ? 'border-2 border-gray-500' : ''
          }`}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </div>
  );
}

export default Board;