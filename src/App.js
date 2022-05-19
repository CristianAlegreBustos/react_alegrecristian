import React from 'react';
import NavBar from './componentes/NavBar.jsx';
import { ItemListContainer } from './componentes/ItemListContainer.jsx';
import { Container,ThemeProvider } from '@mui/material';
import {theme} from './theme.js';
import {ItemDetailContainer} from './componentes/ItemDetailContainer.jsx';



function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
    <NavBar/>
    <Container maxWidth="xl">
   { /*<ItemListContainer> </ItemListContainer>*/}
    <ItemDetailContainer></ItemDetailContainer>
    </Container>
    </ThemeProvider>
    </>
  );
}

export default App;
