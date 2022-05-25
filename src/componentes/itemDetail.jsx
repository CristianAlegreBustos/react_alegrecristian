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
import {contextCart} from '../context/cartContext.jsx';



export function ItemDetail({pictureArray,productDetail,loading,error}){
    const {addItem}= useContext(contextCart);
    const theme = useTheme();
    const duplicateColors= []; // Verify the duplicate elements
    const duplicateDesing= []; // Verify the Desing elements

const [mainImage,setMainImage]=useState(pictureArray && pictureArray[0]);
//To the like buttom, (heart)
const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
/*********************** */
  // Set the Size of the shoes in the Talle

const [talle,setTalle]= useState("");

function handleInput(e) {
   setTalle(e.target.value);
}


function onAdd(quantityToAdd,productId,price,stock,thumbnail,productName){
    debugger;
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

// capitalize string
function capitalize(str) {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

return(
        <>
    {loading && "loading..."}
    <Card sx={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
    
     <CardContent  sx={{display:'flex', flexDirection:'column',width:'100%'}}>
            <CardMedia
                component="img"
                height="500"
                image= {mainImage || pictureArray[0]}
                alt = {productDetail.title}
            /> 
            <CardContent sx={{display:'flex', flexDirection:'row', justifyContent:'center',pl:'0',pr:'0', columnGap:2}}>
    {pictureArray.map((picture,index)=>
    index <3 && 
            <CardMedia
                key={index}
                component="img"
                height="150"
                image= {picture}
                alt = "Detail of Shoes"
                onMouseEnter={()=>setMainImage(picture)}
                onMouseLeave={()=>setMainImage(pictureArray[0])}
                sx={{cursor:'pointer'}}
            />  
            )}
     </CardContent>
    </CardContent> 
    <CardContent sx={{display:'flex', flexDirection:'column', width:'35%', justifyContent:'space-between'}}>
        <Box>
            <Typography color="whitesmoke" sx={{display:'flex',fontWeight:400,fontSize:'0.875rem'}}>
            {`${productDetail.condition==="new"? "Nuevo": "Usado"} | ${productDetail.sold_quantity} vendidos`}
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
        <Box sx={{display:'Flex', flexDirection:'column'}}> 
            <Typography  color="white" sx={{display:'flex',fontWeight:"600",fontSize:'1rem'}}>
                {`Talle: ${talle}`}
            </Typography>
            <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{flexWrap:'wrap', justifyContent: 'space-between',rowGap:1}} >
                {productDetail.variations && productDetail.variations.map(item=> item.available_quantity> 0 &&
                    <Button sx={{color:'white',bgcolor:'orange'}} key={`talle-${item.id}`} id={item.id} value={item.attribute_combinations[2]!==undefined ? item.attribute_combinations[2].value_name:item.attribute_combinations[1].value_name} onClick={e => handleInput(e, "value")} >{item.attribute_combinations[2]!== undefined? item.attribute_combinations[2].value_name:item.attribute_combinations[1].value_name}</Button>
                )}
            </ButtonGroup>
        </Box>
        <Box sx={{display:'flex', flexDirection:'row',gap:1}}>
            <Typography color="white" sx={{fontSize:"1rem", fontWeight:"400"}}> {`Color:`}</Typography>
            {productDetail.variations && productDetail.variations.map((item,index)=> item.available_quantity> 0 && ! duplicateColors.includes(item.attribute_combinations[0].value_name) && duplicateColors.push(item.attribute_combinations[0].value_name) &&
            <Box key={index} sx={{display:'flex', flexDirection:'column', columnGap:2}}>
            
            <ButtonGroup variant="outlined" aria-label="outlined button group" >
            <Button sx={{color:'white',bgcolor:'orange'}} key={`color-${item.id}`} value={item.attribute_combinations[0].value_name}>{item.attribute_combinations[0].value_name}</Button>
            </ButtonGroup>
            </Box>
            )}
        </Box>
        {productDetail.variations && productDetail.variations.map((item,key)=> item.available_quantity> 0 && item.attribute_combinations[1].name==='Diseño de la tela' && ! duplicateDesing.includes(item.attribute_combinations[1].value_name) && duplicateDesing.push(item.attribute_combinations[1].value_name) &&
        <Box key={key} sx={{display:'flex', flexDirection:'row',columnGap:2}}>
            <Typography color="white" sx={{fontSize:"1rem", fontWeight:"400"}}> {`${capitalize(item.attribute_combinations[1].name)}:`}</Typography>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button sx={{color:'white',bgcolor:'blue'}} key={`desing-${item.id}`} value={ item.attribute_combinations[1].value_name}>{item.attribute_combinations[1].value_name}</Button>
        </ButtonGroup>
        </Box>
        )}        
        
        <Box  sx={{display:'flex', flexDirection:'column',rowGap:2}}>
        <Typography color="white" sx={{fontSize:"1rem", fontWeight:"600"}}> { productDetail.available_quantity>0 ? "Stock Disponible":"Stock No Disponible"}</Typography>
        </Box>
     <ItemCount stock={productDetail.available_quantity} initial={0} onAdd={onAdd} productId={productDetail.id} price={productDetail.price} thumbnail={productDetail.thumbnail} productName={productDetail.title}></ItemCount>
      </CardContent>
     </Card>
        </>
    )
}

/*<FormControl sx={{display:"flex", flexDirection:"row", columnGap:3, alignItems:"center"}}>
<Typography sx={{fontSize:"1rem", fontWeight:"400"}}> { "Cantidad"}</Typography>
<NativeSelect
defaultValue={30}
inputProps={{
 name: 'cantidad',
 id: 'uncontrolled-native',
}}
>
  { productDetail.available_quantity>0 && 
  [...Array(productDetail.available_quantity+1).keys()].map( unidad=> unidad!==0 &&
      <option key={unidad} value={unidad}>{unidad==1? unidad+" Unidad" : unidad + " Unidades" }</option>  )}
</NativeSelect>
<Typography sx={{fontSize:"0.8rem", fontWeight:"400"}}> {`(${productDetail.available_quantity} Disponible)`}</Typography>

  </FormControl>*/