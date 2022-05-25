import React, { useEffect, useState ,useContext} from 'react';
import { Box, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { CardMedia,BottomNavigationAction } from '@mui/material';
import {contextCart} from '../context/cartContext.jsx';
import { TableRow,TableCell } from '@mui/material';




export function CartItem({thumbImage,detalle,nameProduct,price,cantidad,productId}){
    const {removeItem}= useContext(contextCart);
    return(
        <TableRow sx={{'&:last-child td, &:last-child th': { border: 0 }}}
        key={productId}
        >
            <TableCell component="th" scope="row">
            <CardMedia
                    component="img"
                    height="100"
                    image= {thumbImage}
                    alt = {detalle}
                /> 
            </TableCell>
            <TableCell component="th" scope="row">
                <Typography>{nameProduct}</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
                <Typography>{`$${price}`}</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
                <Typography>{cantidad}</Typography>
            </TableCell>
            <TableCell component="th" scope="row">
                <BottomNavigationAction
                    label="Delete Product"
                    value="Delete"
                    sx={{m:0, p:0, pt:0, color:'#ff1744'}} 
                    icon={<DeleteIcon/>}
                    onClick={()=>removeItem(productId)}
                />
            </TableCell>
        </TableRow>
    )
}