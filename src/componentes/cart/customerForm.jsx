import React,{useState} from 'react';
import { Card, TextField, Typography } from '@mui/material';



export function CustomerForm({verifyData}){
    const[validData,setDataValid]=useState(true);//In this case true means the data is valid

    const[matchCellPhonePattern,setMatchCellPhonePattern]=useState(false)
    const[matchEmailPattern,setMatchEmailPattern]=useState(false)
    const[matchNamePattern, setMatchNamePattern]=useState(false)

    function verifyCellphone(event){
        const regex = /^[1-9]{1}[0-9][^1]{2}[0-9]{5,8}$/g;
        if (!regex.test(event.target.value)) {
            setMatchCellPhonePattern(true);//error
            setDataValid(false);
            verifyData(validData)
        }else{
            setMatchCellPhonePattern(false);//noerror
            setDataValid(true);
            verifyData(validData)
        }

    }

    function verifyEmail(event){
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!regex.test(event.target.value)) {
            setMatchEmailPattern(true);//error
            setDataValid(false);
            verifyData(validData)
        }else{
            setMatchEmailPattern(false);//noerror
            setDataValid(true);
            verifyData(validData)
        }
    }

    function verifyName(event){
        const regex = /^[a-z ,.'-]+$/i;
        if (!regex.test(event.target.value)) {
            setMatchNamePattern(true);//error
            setDataValid(false);
            verifyData(validData)
        }else{
            setMatchNamePattern(false);//noerrror
            setDataValid(true);
            verifyData(validData)
        }
    }

    return( 
        <Card sx={{display:'flex', flexDirection:'column', width:'80%',alignItems:'left',bgcolor:'white',margin:2,gap:2}}>
        <Typography variant="h5" component="h5" sx={{textAlign:'center'}}>
            Complete sus datos para confirmar la compra
        </Typography>
            <TextField
                error={matchNamePattern}
                helperText="Ingrese su nombre completo"
                id="clientName"
                label="Nombre Completo"
                variant="filled"
                onChange={(event=>verifyName(event))}
                sx={{marginLeft:2,marginRight:2}}
            />
            <TextField
                error={matchCellPhonePattern }
                helperText="Ingrese su numero de telefono o celular sin 0 ni 15"
                id="clientPhone"
                label="Telefono"
                variant="filled"
                onChange={(event) => verifyCellphone(event)}
                sx={{marginLeft:2,marginRight:2}}
            />
            <TextField
                error={matchEmailPattern}
                helperText="Ingrese un email valido"
                id="clientEmail"
                label="Email"
                variant="filled"
                onChange={(event) => verifyEmail(event)}
                sx={{marginLeft:2,marginRight:2,marginBottom:2}}
            />
        </Card>
    )
}