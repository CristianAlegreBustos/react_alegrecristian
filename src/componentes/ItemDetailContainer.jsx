import React, { useEffect, useState } from 'react';
import { ItemDetail } from './itemDetail.jsx';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

export function ItemDetailContainer() {

const[productDetail,setproductDetail]=useState([]);
const[pictures,setPictures]=useState([]);
const[loading,setLoading]=useState(false);
const[error,setError]=useState("");

const { productId } = useParams();

useEffect(() => {
    setLoading(true); //MLA1131508940
    debugger;
    fetch(`https://api.mercadolibre.com/items/${productId}`).then(
        response=>{
            debugger;
            if (!response.ok) {
                setLoading(false);
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        }).then(
            data=>{
                debugger;
                setLoading(false);
                reorganize(data);
                setproductDetail(data);
        })
        .catch(error=>setError(`Hubo un Error: ${error}`))
  }, [productId]);

function reorganize(data){
    let arrayPicture=[]
    for (const key in data.pictures) {
        arrayPicture.push(data.pictures[key].url)
    }
    setPictures(arrayPicture)
    
}
return (
    <>
    {/* for desktop mode*/}
    <Box className='detailContainer' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection:'row' ,justifyContent: 'space-evenly',alignItems: 'center',flexWrap:'wrap', rowGap:25,marginTop:20,marginBottom:20} }}>
    <ItemDetail pictureArray={pictures} productDetail={productDetail} loading={loading} error={error}></ItemDetail>
    </Box>
    {/* for responsive screens*/}
    <Box  className='detailContainer' sx={{flexGrow:0, flexDirection:'column',display:{xs:'flex',flexDirection:'column' ,justifyContent: 'center',alignItems: 'center',md:'none'}}}>
    <ItemDetail pictureArray={pictures} productDetail={productDetail} loading={loading} error={error}></ItemDetail>
    </Box>
    
    
    </>
    
)
  
}
