import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ItemCount } from './ItemCount.jsx';


export function ItemListContainer({greeting}){
    const onAdd=(qtt)=>{
        alert( `Agregando ${qtt} Items al Carrito`);
    };
    return(
        <>
        {/* for desktop mode*/}
        <Box className='listContainer' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection:'column' ,justifyContent: 'center',alignItems: 'center'} }}>
            <Typography
            variant="p"
            noWrap
            component="p"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
                {greeting}
            </Typography>
        </Box>
        {/* for responsive screens*/}
        <Box  className='listContainer' sx={{flexGrow:0, flexDirection:'column',display:{xs:'flex',flexDirection:'column' ,justifyContent: 'center',alignItems: 'center',md:'none'}}}>
        <Typography
            variant="p"
            noWrap
            component="p"
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
                {greeting}
            </Typography>
        </Box>
        <ItemCount stock={10} initial={0} onAdd={onAdd}>

        </ItemCount>
        </>
    )
}