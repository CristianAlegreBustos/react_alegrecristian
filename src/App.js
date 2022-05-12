import React from 'react';
import NavBar from './componentes/NavBar.jsx';
import { ItemListContainer } from './componentes/ItemListContainer.jsx';

function App() {
  return (
    <><NavBar />
    <ItemListContainer greeting='Nos estamos preparando para que todo este Flama'>
      </ItemListContainer>
    </>

  );
}

export default App;
