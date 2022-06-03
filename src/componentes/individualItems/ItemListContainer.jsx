//Este componente es el layout para la vista previa de los productos

import React,{ useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { ItemList } from './itemList.jsx';
import {collection,getDocs,getFirestore, query,where} from "firebase/firestore";

export function ItemListContainer({greeting}){
    const [productList,setProductList]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("");
   
    const { categoryId } = useParams();

    useEffect(()=>{
        setLoading(true);
        const db=getFirestore();
        if(categoryId === undefined){
          const productList=collection(db,"Products");
          getDocs(productList).then((snapshot)=>{
            if (snapshot.size===0){
              setLoading(false);
            }
            setLoading(false);
            setProductList(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))
          })
        }else{
          const productList=query(collection(db,"Products"), where("categoryId","==",categoryId));
          getDocs(productList).then((snapshot)=>{
            if (snapshot.size===0){
              setLoading(false);
            }
            setLoading(false);
            setProductList(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))
          })
        }
        
        
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