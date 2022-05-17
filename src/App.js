import React from 'react';
import NavBar from './componentes/NavBar.jsx';
import { ItemListContainer } from './componentes/ItemListContainer.jsx';
import { Container,ThemeProvider } from '@mui/material';
import {theme} from './theme.js';



function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
    <NavBar/>
    <Container maxWidth="xl">
    <ItemListContainer>
      </ItemListContainer>

    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
