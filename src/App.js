import React from 'react';
import NavBar from './componentes/NavBar.jsx';
import { ItemListContainer } from './componentes/ItemListContainer.jsx';
import { Container } from '@mui/material';


function App() {
  return (
    <>
    <NavBar />
    <Container maxWidth="xl">
    <ItemListContainer greeting='Nos estamos preparando para que todo este Flama'>
      </ItemListContainer>

    </Container>
    </>
  );
}

export default App;
