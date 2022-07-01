import React from 'react';
import NavBar from './componentes/navbar/NavBar.jsx';
import { ItemListContainer } from './componentes/individualItems/ItemListContainer.jsx';
import { Container,ThemeProvider } from '@mui/material';
import {theme} from './theme.js';
import {ItemDetailContainer} from './componentes/detail/ItemDetailContainer.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {CartContextHOC} from './context/cartContext.jsx';
import { Cart } from './componentes/cart/cart.jsx';

function App() {

  return (
    <>
    <CartContextHOC>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <NavBar/>
    <Container maxWidth="xl">
      <Routes>
        <Route path="/react_alegrecristian" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/react_alegrecristian/itemDetail/:productId" element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path="/react_alegrecristian/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </Container>
    </ThemeProvider>
    </BrowserRouter>
    </CartContextHOC>
    </>
  );
}

export default App;
