import React from 'react';
import CardMedia from '@mui/material/CardMedia';

export function CreateCardPicture(PictureList,setMainImage){
    let Pictures=[];
    for (const key in PictureList){
        Pictures.push(
            <CardMedia
                key={key}
                component="img"
                height="90"
                image= {PictureList[key]}
                alt = "Detail of Shoes"
                onMouseEnter={()=>setMainImage(PictureList[key])}
                onMouseLeave={()=>setMainImage(PictureList[0])}
                sx={{cursor:'pointer', width:'25%',objectFit:'fill'}}
            />  
        )
    }
    return Pictures;
}