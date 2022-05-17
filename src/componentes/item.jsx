import React from "react";
import { ItemCount } from "./ItemCount.jsx";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";

export function ItemCard({key,id, title, description, price, pictureURL,stock}){
    const onAdd=(qtt)=>{
        alert( `Agregando ${qtt} Items al Carrito`);
    };
    return(
<Card key={key} id={id} elevation={4} sx={{ maxWidth: 345}}>
        <CardMedia
          component="img"
          height="200"
          image={pictureURL}
          alt={title}

        />
        <CardContent  sx={{pl:0,pr:0,p:1.4,bgcolor:"orange" }}>
        <Typography color="white" variant="body2" sx={{textAlign:"center",fontWeight:"600"}}>
           {description}
          </Typography>
        </CardContent>
        <CardContent  >
          <Typography color="white" gutterBottom variant="h5"  component="div" sx={{mt:1.5, mb:1.5}}>
          {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center", fontWeight:800,color:'#ff1744'}}>
           {price}
          </Typography>
          
        </CardContent>         

       {//  <ItemCount stock={stock} initial={0} onAdd={onAdd}>
        //</ItemCount>
      }
      </Card>
    );
}