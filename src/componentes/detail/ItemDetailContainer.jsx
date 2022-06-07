import React, { useEffect, useState } from 'react';
import { ItemDetail } from './itemDetail.jsx';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getDoc, getFirestore, doc } from 'firebase/firestore';

export function ItemDetailContainer() {
const[productDetail,setproductDetail]=useState([]);
const[loading,setLoading]=useState(false);
const[error,setError]=useState("");

const { productId } = useParams();


useEffect(() => {
  setLoading(true);
  const db=getFirestore();
  const q=doc(db,`Products/${productId}`);
  getDoc(q).then((snapshot)=>{
        if (snapshot.lenght===0){
            setLoading(false);
            setError('There was an error in the database')
        }
    setLoading(false);
    setproductDetail({apiId: snapshot.apiId, talle:[snapshot.talle], ...snapshot.data()});   
        }
  )
  }, [productId]);

return (
    <>
    {/* for desktop mode*/}
    <Box className='detailContainer' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', flexDirection:'row' ,justifyContent: 'space-evenly',alignItems: 'center',flexWrap:'wrap', rowGap:25,marginTop:20,marginBottom:20} }}>
    { productDetail && <ItemDetail productDetail={productDetail} loading={loading} error={error} ></ItemDetail>}
    </Box>
    {/* for responsive screens*/}
    <Box  className='detailContainer' sx={{flexGrow:0, flexDirection:'column',display:{xs:'flex',flexDirection:'column' ,justifyContent: 'center',alignItems: 'center',md:'none'}}}>
    { productDetail &&<ItemDetail productDetail={productDetail} loading={loading} error={error} ></ItemDetail>}
    </Box>
    
    
    </>
    
)
  
}
