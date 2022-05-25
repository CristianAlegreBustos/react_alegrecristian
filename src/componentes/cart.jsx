import React, { useEffect, useState,useContext } from 'react';
import {contextCart} from '../context/cartContext.jsx';
import { CartItem } from './cartItem.jsx';
import { Paper, TableRow, Typography } from '@mui/material';
import { TableHead,TableBody } from '@mui/material';
import { ColumnCartName } from './columnCartName.jsx';
import { TableContainer,Table,TableCell,Button } from '@mui/material';
import { Box } from '@mui/system';
import { LandingPage } from './landingPage.jsx';



export function Cart(){
    const {cart,clear}= useContext(contextCart);
    return(
        <>
        {cart.length===0 || cart===undefined ? <LandingPage message={'El Carrito esta vacio'} message2={'Comienza a Cargarlo Aqui'}>  </LandingPage> :
        <TableContainer component={Paper} sx={{marginTop:2}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <ColumnCartName></ColumnCartName>
                 </TableHead>
                 <TableBody sx={{marginTop:2}}>
                 {cart !== 0 && cart.map((product)=>
                    <CartItem key={product.id} thumbImage={product.thumbImage} detalle={product.product_Name} nameProduct={product.product_Name} price={product.price} cantidad={product.quantity} productId={product.id}></CartItem>
                  )}
                 </TableBody>
            </Table>
            <Box sx={{bgcolor:'orange',color:'#1976d2',display:'flex',alignItems:'center' ,justifyContent:'space-around'}}>
                    <Typography align="center" fontWeight={700}>
                     {cart.length>0 && `Productos Totales ${cart.map(product=>product.quantity).reduce((num1,num2)=>num1+num2)}`}
                    </Typography>
                    <Typography align="center" fontWeight={700}>
                     {cart.length>0 && `Precio Total $ ${cart.map(product=>product.price*product.quantity).reduce((num1,num2)=>num1+num2)}`}
                    </Typography>
                    <Button onClick={()=>clear()} sx={{'&:hover':{bgcolor:'gray', color:'red',fontSize:'0.9rem'} ,bgcolor:'red',color:'white', p:2,m:0.5}} > Vaciar Carrito</Button>

                    <Button onClick={()=>clear()} sx={{'&:hover':{bgcolor:'green', color:'white',fontSize:'0.9rem' } ,bgcolor:'white',color:'red',border:2,borderColor:'orangered', p:2}} > Terminar Compra</Button>
                 </Box>
        </TableContainer>
    }
    </>
    );
}