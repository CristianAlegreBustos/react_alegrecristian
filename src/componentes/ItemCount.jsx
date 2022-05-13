import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export function ItemCount({stock,initial,onAdd}){
    //Create state initial = 1;
const [init, setInit] = useState(initial);




    return(
    <Card sx={{ maxWidth: 345, bgcolor:(theme)=> theme.palette.mode==='#1c54b2'?'#1769aa':'#1c54b2'}}>
        <CardMedia
          component="img"
          height="100"
          image="#"
          alt="Camisa"
        />
        <CardContent sx={{color:'white'}} >
          <Typography gutterBottom variant="h5" component="div">
            Camisa Tiger
          </Typography>
          <Typography variant="body2" >
            Camisa para calentar el invierno
          </Typography>
        </CardContent>                                                               
        <CardActions sx={{display:'flex', flexDirection:'column' }}>
        <Box  sx={{display:'flex', flexDirection:'row' ,alignItems:'center',columnGap:2.5}}>
          <Button onClick={()=>setInit( init>0 ? init-1 : 0 )} size="small" 
          sx={{fontSize:'x-large',fontWeigth:800,bgcolor:(theme) => theme.palette.mode === '#b2102f' ? '#ffa733' : '#ff9100',p:0,minWidth:40,color:"white"}}>-</Button>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:'large'}}>
            {init}
          </Typography>
          <Button onClick={()=>setInit(init<stock? init+1: init)} size="small" sx={{fontSize:'x-large',fontWeigth:800,bgcolor:(theme) => theme.palette.mode === '#b2102f' ? '#ffa733' : '#ff9100',p:0,minWidth:40,color:"white"}}>+</Button>
        </Box>
          <Button disabled={init===0?true:false} onClick={()=>onAdd(init)} size="large" sx={{color:'white',bgcolor:'red', m:2.5}}>Agregar al Carrito</Button>
        </CardActions>
      </Card>
    );
}

