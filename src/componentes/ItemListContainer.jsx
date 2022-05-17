import React,{ useState,useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { ItemList } from './itemList.jsx';
import { productos } from './arrayProduct.js';


export function ItemListContainer({greeting}){
    const [productList,setProductList]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");

    useEffect(()=>{
        setLoading(true);
        const asyncList=new Promise((res,rej)=>
        {
          setTimeout(()=>{
            res(productos)
          },2000);
        });
    
        asyncList.then((result)=>{setProductList(result);setLoading(false);},
        error=>{setError(`No pudimos obtener los productos: ${error}`);setLoading(false);})
        .catch((error)=>{
          setError(`Hubo un error: ${error}`);
          setLoading(false);
        });
        
      },[]);

    return(
        <>
        {/* for desktop mode*/}
        <Box className='listContainer' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection:'row' ,justifyContent: 'space-evenly',alignItems: 'center',flexWrap:'wrap', rowGap:25,marginTop:20} }}>
        <ItemList productList={productList} loading={loading} error={error}></ItemList>
        </Box>
        {/* for responsive screens*/}
        <Box  className='listContainer' sx={{flexGrow:0, flexDirection:'column',display:{xs:'flex',flexDirection:'column' ,justifyContent: 'center',alignItems: 'center',md:'none'}}}>
        <ItemList productList={productList} loading={loading} error={error}></ItemList>
        </Box>
        
        
        </>
    )
}