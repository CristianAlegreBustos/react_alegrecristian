//Este componente es el layout para la vista previa de los productos

import React,{ useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { ItemList } from './itemList.jsx';
import { productos } from './arrayProduct.js';

export function ItemListContainer({greeting}){
    const [productList,setProductList]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");
   
    const { categoryId } = useParams();

    useEffect(()=>{
      console.log(categoryId);
        setLoading(true);
        const asyncList=new Promise((res,rej)=>
        {
          setTimeout(()=>{
            res(productos)
          },2000);
        });
    
        asyncList.then((result)=>{
        debugger;
        let arrayFilter=[];
        result.map(product=>(product.categoryId===categoryId && arrayFilter.push(product)));
        setProductList(arrayFilter);
        debugger;
        categoryId==='inicio'||categoryId===undefined && setProductList(result);
        setLoading(false);},
        error=>{setError(`No pudimos obtener los productos: ${error}`);setLoading(false);})
        .catch((error)=>{
          setError(`Hubo un error: ${error}`);
          setLoading(false);
        });
        
      },[categoryId]);

    return(
        <>
        {/* for desktop mode*/}
        <Box className='listContainer' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection:'row' ,justifyContent: 'space-evenly',alignItems: 'center',flexWrap:'wrap', rowGap:25,marginTop:20, mb:20} }}>
        <ItemList productList={productList} loading={loading} error={error}></ItemList>
        </Box>
        {/* for responsive screens*/}
        <Box  className='listContainer' sx={{flexGrow:0, flexDirection:'column',display:{xs:'flex',flexDirection:'column' ,justifyContent: 'center',alignItems: 'center',md:'none'}}}>
        <ItemList productList={productList} loading={loading} error={error}></ItemList>
        </Box>
        
        
        </>
    )
}