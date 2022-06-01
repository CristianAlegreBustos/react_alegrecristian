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
import { ItemCount } from './ItemCount';
import {contextCart} from '../../context/cartContext.jsx';
import { GetFirstPicture } from '../../library/library';
import { CreateColorButtom,CreateTalleButtom } from './buttoms.jsx';
import { CreateCardPicture } from './carousel.jsx';


export function ItemDetail({productDetail,loading,error}){
    const {addItem,cart}= useContext(contextCart);
    const theme = useTheme();
    const [mainImage,setMainImage]=useState();
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
function verifyInitial(productId){
    let quantity= cart.map(element=>element.id == productId && element.quantity);
    debugger;
    if (quantity[0]>0){
       return quantity[0];
    }else{
       return 0;
    }
}

function onAdd(quantityToAdd,productId,price,stock,thumbnail,productName){
    if (quantityToAdd <=stock){
        let item={
            id:productId,
            product_Name:productName,
            quantity:quantityToAdd,
            price:price,
            stock:stock-quantityToAdd,
            thumbImage:thumbnail
        }
        addItem(item)
        alert(`You Added ${item.quantity} of the ${item.id}  to the Cart`)
    }else{
        alert(`There is not enough stock for this article`)
    }
 }


return(
   
        <>
    {loading && "loading..."}
    <Card sx={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
    
     <CardContent  sx={{display:'flex', flexDirection:'column',width:'100%'}}>
            <CardMedia
                component="img"
                height="500"
                image= {mainImage||color==0 && GetFirstPicture(productDetail.picture0)||color==1 && GetFirstPicture(productDetail.picture1)||color==2 && GetFirstPicture(productDetail.picture2)}
                alt = {productDetail.title}
            /> 
            <CardContent sx={{display:'flex', flexDirection:'row',gap:1,overflow:'clip',paddingLeft:0,paddingRight:0}} >
                    {color==0 && CreateCardPicture(productDetail.picture0,setMainImage)}
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
        </Box>
        <Box sx={{display:'flex', flexDirection:'row',gap:2}}>
            <Typography color="white" sx={{fontSize:"1rem", fontWeight:"400"}}> {`Color:`}</Typography>
            <Box sx={{display:'flex',flexDirection:'column', rowGap:2}}>
            <ButtonGroup variant="outlined" aria-label="outlined button group"sx={{display:'flex',flexDirection:'row', gap:2}}>
                {CreateColorButtom(productDetail.color,handleColor)}
            </ButtonGroup>
            </Box>
        </Box>    
        
        <Box  sx={{display:'flex', flexDirection:'column',rowGap:2}}>
        <Typography color="white" sx={{fontSize:"1rem", fontWeight:"600"}}> { productDetail.stock>0 ? "Stock Disponible":"Stock No Disponible"}</Typography>
        </Box>
     <ItemCount stock={productDetail.stock} initial={verifyInitial(productDetail.apiId)} onAdd={onAdd} productId={productDetail.apiId} price={productDetail.price} thumbnail={productDetail.img_thumbnail} productName={productDetail.title}></ItemCount>
      </CardContent>
     </Card>
        </>
    )
}