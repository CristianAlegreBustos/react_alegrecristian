import React, { useEffect, useState } from 'react';
import { ItemDetail } from './itemDetail.jsx';
import { Box } from '@mui/material';

export function ItemDetailContainer() {

const[productDetail,setproductDetail]=useState([]);
const[pictures,setPictures]=useState([]);
const[loading,setLoading]=useState(false);
const[error,setError]=useState("");

useEffect(() => {
    setLoading(true);
    fetch('https://api.mercadolibre.com/items/MLA1131508940').then(
        response=>{
            if (!response.ok) {
                setLoading(false);
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        }).then(
            data=>{
                setTimeout(()=>{ 
                setLoading(false);
                reorganize(data)
                setproductDetail(data);
            })
        })
        .catch(error=>setError(`Hubo un Error: ${error}`))
  }, []);

function reorganize(data){
    let arrayPicture=[]
    for (const key in data.pictures) {
        arrayPicture.push(data.pictures[key].url)
    }
    setPictures(arrayPicture)
    //data.pictures.map(picture=>setPictures(pictures.push(picture.url)))
    console.log(pictures)
}
return (
    <>
    {/* for desktop mode*/}
    <Box className='listContainer' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection:'row' ,justifyContent: 'space-evenly',alignItems: 'center',flexWrap:'wrap', rowGap:25,marginTop:20} }}>
    <ItemDetail pictureArray={pictures} productDetail={productDetail} loading={loading} error={error}></ItemDetail>
    </Box>
    {/* for responsive screens*/}
    <Box  className='listContainer' sx={{flexGrow:0, flexDirection:'column',display:{xs:'flex',flexDirection:'column' ,justifyContent: 'center',alignItems: 'center',md:'none'}}}>
    <ItemDetail pictureArray={pictures} productDetail={productDetail} loading={loading} error={error}></ItemDetail>
    </Box>
    
    
    </>
    
)
  
}
