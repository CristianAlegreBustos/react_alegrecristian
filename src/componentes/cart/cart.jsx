import React, {useContext,useState } from 'react';
import {contextCart} from '../../context/cartContext.jsx';
import { CartItem } from './cartItem.jsx';
import { ButtonGroup, Paper, Typography } from '@mui/material';
import { TableHead,TableBody } from '@mui/material';
import { ColumnCartName } from './columnCartName.jsx';
import { TableContainer,Table,Button } from '@mui/material';
import { Box } from '@mui/system';
import { LandingPage } from '../landingPages/landingPage.jsx';
import {  CustomerForm } from './customerForm.jsx';
import { finishOrder } from '../../library/sendToFirebase.jsx';


export function Cart(){
    const {cart,clear, getID,orderID}= useContext(contextCart);
    const [allData,setAllData]=useState(true);//In this case true means button disabled.

function verifyData(validData){
        let clientName=document.getElementById("clientName");
        let clientPhone=document.getElementById("clientPhone");
        let clientEmail=document.getElementById("clientEmail");
     
        if (clientName !== null && clientPhone !== null && clientName !== null ){
            if (clientName.value==="" ||clientPhone.value===""  ||clientEmail.value===""||  validData===false){
                setAllData(true);
              
            }else{
                setAllData(false);
            }
        }
        
    };

    function clientData(){
        //this elemets are in the customerForm
        let clientName=document.getElementById("clientName").value;
        let clientPhone=document.getElementById("clientPhone").value;
        let clientEmail=document.getElementById("clientEmail").value;
        finishOrder(clientName,clientPhone,clientEmail,cart, getID);
        clear();
        document.getElementById("clientName").value="";
        document.getElementById("clientPhone").value="";
        document.getElementById("clientEmail").value="";
    }
    
    return(
     <>
        {cart.length===0 || cart===undefined ?  <LandingPage message={'El Carrito esta vacio'} message2={'Comienza a Cargarlo Aqui'}>  </LandingPage> :
        <>
        <Box sx={{display:'flex', flexDirection:'row',alignItems:'center'}}>
        <CustomerForm verifyData={verifyData}></CustomerForm>
        <TableContainer component={Paper} sx={{marginTop:2}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <ColumnCartName></ColumnCartName>
                 </TableHead>
                 <TableBody sx={{marginTop:2}}>
                 {cart !== 0 && cart.map((product)=>product.id !==undefined &&
                    <CartItem key={product.id} thumbImage={product.thumbImage} detalle={product.product_Name} nameProduct={product.product_Name} price={product.price} cantidad={product.quantity} productId={product.id} color={product.color} talle={product.talle}></CartItem>
                  )}
                 </TableBody>
            </Table>
            <Box sx={{bgcolor:'orange',color:'#1976d2',display:'flex',flexDirection:'column',alignItems:'center',gap:2,padding:2}}>
                    <Box sx={{display:'flex', flexDirection:'row',gap:2}}>
                    <Typography align="center" fontWeight={700}>
                     {cart.length>0  && `Productos Totales ${cart.map(product=>product.quantity).reduce((num1,num2)=>num1+num2 )}`}
                    </Typography>
                    <Typography align="center" fontWeight={700}>
                     {cart.length>0 && `Precio Total $ ${cart.map(product=>product.price*product.quantity).reduce((num1,num2)=>num1+num2)}`}
                    </Typography>
                    </Box>
             </Box>
        </TableContainer>
        </Box>
        <Box sx={{display:'flex',  justifyContent:'center'}}>
        <ButtonGroup sx={{gap:2}}>
            <Button style={{borderRightColor:'white'}} onClick={()=>clear()} sx={{'&:hover':{bgcolor:'gray', color:'red',fontSize:'0.9rem'} ,bgcolor:'red',color:'white',border:2,borderColor:'white',p:2}} > Vaciar Carrito</Button>
            <Button  disabled={allData}  onClick={()=>clientData()} sx={{'&:hover':{bgcolor:'green', color:'white',fontSize:'0.9rem' } ,bgcolor:'white',color:'red',border:2,borderColor:'orangered', p:2}} > Terminar Compra</Button>
        </ButtonGroup>
           
        </Box>
        {orderID&& `El pedido fue echo. El id de su compra es ${orderID}` }
        </>
    }
  </>
    );
}