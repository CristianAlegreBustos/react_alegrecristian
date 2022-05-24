import React from 'react';
import NavBar from './componentes/NavBar.jsx';
import { ItemListContainer } from './componentes/ItemListContainer.jsx';
import { Container,ThemeProvider } from '@mui/material';
import {theme} from './theme.js';
import {ItemDetailContainer} from './componentes/ItemDetailContainer.jsx';
import {BrowserRouter,Routes,Route, useParams} from "react-router-dom";
import { LandingPage } from './componentes/landingPage.jsx';
import {CartContextHOC} from './context/cartContext.jsx';




function App() {

  return (
    <>
    <CartContextHOC>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <NavBar/>
    <Container maxWidth="xl">
      <Routes>
        <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/itemDetail/:productId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path="/cart" element={<LandingPage message={ 'Finalizando Compra'}></LandingPage>}></Route>
      </Routes>
    </Container>
    </ThemeProvider>
    </BrowserRouter>
    </CartContextHOC>
    </>
  );
}

export default App;
