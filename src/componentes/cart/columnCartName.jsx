import React, { useEffect, useState } from 'react';
import { TableRow,TableCell } from '@mui/material';

export function ColumnCartName(){
    return(
    <TableRow sx={{bgcolor:'orange'}}>
        <TableCell  style={{color:'white'}} align="center">Picture</TableCell>
        <TableCell  style={{color:'white'}} align="center">Nombre del Producto</TableCell>
        <TableCell  style={{color:'white'}} align="center">Talle</TableCell>
        <TableCell  style={{color:'white'}} align="center">Color</TableCell>
        <TableCell  style={{color:'white'}} align="center">Precio</TableCell>
        <TableCell  style={{color:'white'}} align="center">Cantidad</TableCell>
        <TableCell  style={{color:'white'}} align="center">Eliminar</TableCell>
    </TableRow>
    )
}