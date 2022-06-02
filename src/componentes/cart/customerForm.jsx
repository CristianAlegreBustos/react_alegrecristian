import React, { useEffect, useState ,useContext} from 'react';
import { Card, TextField, Typography } from '@mui/material';


export function CustomerForm(){
    return( 
        <Card sx={{display:'flex', flexDirection:'column', width:'80%',alignItems:'left',bgcolor:'white',margin:2,gap:2}}>
        <Typography variant="h5" component="h5" sx={{textAlign:'center'}}>
            Complete sus datos para confirmar la compra
        </Typography>
            <TextField
                helperText="Ingrese su nombre completo"
                id="clientName"
                label="Nombre Completo"
                variant="filled"
                sx={{marginLeft:2,marginRight:2}}
            />
            <TextField
                helperText="Ingrese su numero de telefono o celular"
                id="clientPhone"
                label="Telefono"
                variant="filled"
                sx={{marginLeft:2,marginRight:2}}
            />
            <TextField
                helperText="Ingrese su email"
                id="clientEmail"
                label="Email"
                variant="filled"
                sx={{marginLeft:2,marginRight:2,marginBottom:2}}
            />
        </Card>
    )
}