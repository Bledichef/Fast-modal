# Fast Modal Library

[![Version](https://img.shields.io/npm/v/fast-modal-library.svg)](https://www.npmjs.com/package/fast-modal-library)
[![License](https://img.shields.io/npm/l/fast-modal-library.svg)](https://github.com/Bledichef/Fast-modal.git)

Bibliothèque React Simple Modal

## Installation

```bash
npm install fast-modal-library
```


Utilisation
La bibliothèque Fast Modal vous permet d'intégrer facilement des modales dans vos applications React.

import React from 'react';
import Modal from 'fast-modal-library';

const App = () => {
  const openModal = () => {
    // Logique pour ouvrir la modal
  };

  const closeModal = () => {
    // Logique pour fermer la modal
  };

  return (
    <div>
      <h1>Mon application React</h1>
      <button onClick={openModal}>Ouvrir la Modal</button>

      <Modal contentModal="Contenu de la modal" hide={closeModal} />
    </div>
  );
};

export default App;

Options disponibles
contentModal: Le contenu à afficher dans la modal.
hide: Fonction pour fermer la modal.

## Exemple d'utilisation

Voici un exemple simple d'utilisation de la bibliothèque Fast Modal dans un projet React.

```jsx
// Import des dépendances nécessaires
import React, { useState } from 'react';
import Modal from 'fast-modal-library';

const App = () => {
  // Déclaration de l'état pour contrôler l'ouverture/fermeture de la modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour ouvrir la modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Mon application React</h1>
      <button onClick={openModal}>Ouvrir la Modal</button>

      {/* Utilisation de la composante Modal de la bibliothèque */}
      <Modal contentModal="Contenu de la modal" hide={closeModal} isOpen={isModalOpen} />
    </div>
  );
};

export default App;

```

///////////////////////////////////////////////////////////////////////

Fast Modal Library
Version
License

Simple React Modal Library

Installation
bash
Copy code
npm install fast-modal-library
Usage
The Fast Modal library allows you to easily integrate modals into your React applications.



## Available Options
- `contentModal`: The content to display in the modal.
- `hide`: Function to close the modal.

# Fast-modal
