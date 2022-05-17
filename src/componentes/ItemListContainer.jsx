import React,{ useState,useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { ItemList } from './itemList.jsx';


export function ItemListContainer({greeting}){
    let  productos=[{
        id:'1',
        title:'Nike Air Presicion 5',
        description:'Un primer paso rápido marca la diferencia.',
        price:'$37900',
        pictureURL:'http://localhost:3000/images/thumb/NikeAirPresicion5.jpg',
        stock:5
      },
      {
        id:'2',
        title:'Nike Kyrie Fly trap 4',
        description:'Desafia tus limites con',
        price:'$44900',
        pictureURL:'http://localhost:3000//images/thumb/NikeKyrieFlytrap4.jpg',
        stock:7
      },
      {
        id:'3',
        title:'Jordan Fly Lockdown',
        description:'Fabricado por un ganador para ganadores',
        price:'$39900',
        pictureURL:'http://localhost:3000//images/thumb/JordanFlyLockdown.jpg',
        stock:4
      },
      {
        id:'4',
        title:'Under Armour Spawn 3',
        description:'La mejor armadura para cada batalla',
        price:'$39900',
        pictureURL:'http://localhost:3000//images/thumb/UnderArmourSpawn3.jpg',
        stock:4
      },
      {
        id:'5',
        title:'Adidas Pro N3XT 2021',
        description:'Te acompaña en cada entrenamiento',
        price:'$31900',
        pictureURL:'http://localhost:3000//images/thumb/AdidasProN3XT2021.jpg',
        stock:4
      },
    ]
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