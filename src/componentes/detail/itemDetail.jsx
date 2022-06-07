import React ,{useContext, useState}from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { ButtonGroup,Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import {contextCart} from '../../context/cartContext.jsx';
import { GetFirstPicture,selectColor } from '../../library/library';
import { CreateColorButtom,CreateTalleButtom } from './buttoms.jsx';
import { CreateCardPicture } from './carousel.jsx';
import { ItemCount } from './ItemCount.jsx';
import { LandingPage } from '../landingPages/landingPage.jsx';

export function ItemDetail({productDetail,loading,error}){
    const {addItem,cart}= useContext(contextCart);
    const theme = useTheme();
    const [mainImage,setMainImage]=useState();
    const [talleMessage,setTalleMessage]=useState();
    const [alertStockMessage,setAlertStock]=useState();
    //To the like buttom, (heart)
    const [value, setValue] = React.useState('recents');

    

const handleChange = (event, newValue) => {
    setValue(newValue); 
  };

// Set the Size of the shoes in the Talle
const [talle,setTalle]= useState("");

function handleInput(e) {
    setTalle(e.target.value);
 }

/*************************/

// Set the color of the shoes 
const [color,setColor]= useState(0);

function handleColor(e) {
    setColor(e.target.value);
 }

/*************************/
// Set the colorName of the shoes 

function selectColor(productDetail,color){
    let colorName;
    for( const key in productDetail.color){
        if(key===`${color}`){
            colorName= productDetail.color[color];
        }
    }
    return colorName;
}

function onAdd(quantityToAdd,productId,price,stock,thumbnail,productName){
    if (talle===undefined){
        setTalleMessage('Seleccione un talle para continuar')
    }else{
        if (quantityToAdd <=stock){
            let item={
                id:productId,
                product_Name:productName,
                quantity:quantityToAdd,
                price:price,
                stock:stock-quantityToAdd,
                thumbImage:thumbnail,
                talle:talle,
                color: productDetail.color[color]
            }
            addItem(item)
        }else{
            setAlertStock(`There is not enough stock for this article`)
        }
    }   
    
 }


return(
        <>
    {loading ? <LandingPage message={"Loading..."}> </LandingPage>:
    <Card sx={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
    
     <CardContent  sx={{display:'flex', flexDirection:'column',width:'100%'}}>
            <CardMedia
                component="img"
                height="500"
                image= {`${mainImage||color==0 && GetFirstPicture(productDetail.picture0)||color==1 && GetFirstPicture(productDetail.picture1)||color==2 && GetFirstPicture(productDetail.picture2)}`}
                alt = {productDetail.title}
            /> 
            <CardContent sx={{display:'flex', flexDirection:'row',gap:1,overflow:'clip',paddingLeft:0,paddingRight:0}} >
                    {color == 0 && CreateCardPicture(productDetail.picture0,setMainImage)}
                    {color == 1 && CreateCardPicture(productDetail.picture1,setMainImage)}
                    {color == 2 && CreateCardPicture(productDetail.picture2,setMainImage)}
            </CardContent>
    </CardContent> 
    <CardContent sx={{display:'flex', flexDirection:'column', width:'35%', justifyContent:'space-between'}}>
        <Box>
            <Typography color="whitesmoke" sx={{display:'flex',fontWeight:400,fontSize:'0.875rem'}}>
            {`${productDetail.condition==="nuevo"? "Nuevo": "Usado"} | ${productDetail.sold_quantity} vendidos`}
            </Typography>
            <Box sx={{display:'Flex'}}>
                <Typography variant="h5" color="white" sx={{display:'flex',fontWeight:700,fontSize:'1.375rem'}}>
                {productDetail.title}
                </Typography>
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    sx={{m:0, p:0, pt:0, color:'#ff1744'}} 
                    icon={<FavoriteIcon  />}
                />
            </Box>
        </Box>
        <Box >
            <Typography variant="h4" color="whitesmoke" sx={{display:'flex',fontWeight:300,fontSize:'2.25rem'}}>
            {`$ ${productDetail.price}`}
            </Typography>
            <Typography  color="white" sx={{display:'flex',fontWeight:500,fontSize:'1.2rem'}}>
            {`en 12  $${(productDetail.price*1.5862)/12}`}
            </Typography>
        </Box>
        <Box sx={{display:'Flex', flexDirection:'column',gap:1}}> 
            <Typography  color="white" sx={{display:'flex',fontWeight:"600",fontSize:'1rem'}}>
                {`Talle: ${talle}`}
            </Typography>
           
            <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{displa:'flex',flexWrap:'wrap',gap:1,alignContent:'center'}} >
                {CreateTalleButtom(productDetail.talle,handleInput)}
            </ButtonGroup>

            {talle===""&& <Typography sx={{color:'red', fontWeight:"600"}} >Para continuar debes elegir un talle</Typography>}
        </Box>
        <Box sx={{display:'flex', flexDirection:'column',gap:2}}>
            <Typography color="white" sx={{fontSize:"1rem", fontWeight:"600"}}> {`Color: ${selectColor(productDetail,color)}`}</Typography>
            <Box sx={{display:'flex',flexDirection:'column', rowGap:2}}>
            <ButtonGroup variant="outlined" aria-label="outlined button group"sx={{display:'flex',flexDirection:'row', gap:2}}>
                {CreateColorButtom(productDetail.color,handleColor)}
            </ButtonGroup>
            {<Typography sx={{color:'red', fontWeight:"600"}} >Elige el color que mas te guste</Typography>}
            </Box>
        </Box>    
        
        <Box  sx={{display:'flex', flexDirection:'column',rowGap:2}}>
        <Typography color="white" sx={{fontSize:"1rem", fontWeight:"600"}}> { productDetail.stock>0 ? "Stock Disponible":"Stock No Disponible"}</Typography>
        </Box>
        <ItemCount stock={productDetail.stock} initial={0} onAdd={onAdd} productId={productDetail.apiId} price={productDetail.price} thumbnail={productDetail.img_thumbnail} productName={productDetail.title} colorI={color} talle={talle}></ItemCount>
      </CardContent>
     
     </Card>
     }
        </>
    )
}