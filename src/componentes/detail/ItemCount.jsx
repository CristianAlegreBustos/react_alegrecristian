import React, { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useButton } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export function ItemCount({stock,initial,onAdd,productId,price,thumbnail,productName}){
    //Create state initial = 1;
const [init, setInit] = useState(initial);
const [displayAddButtom, setAddButtom] = useState(true);

function changeDisplayButtom() {
  setAddButtom(false);
}

//color
const red = {
  500: '#ff1744',
  600: '#ff4569',
  700: '#b2102f',
};

//estilos
const AddCarButtonRoot = styled('button')`
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-size: 1rem;
  background-color: ${red[500]};
  padding: 13px 5px;
  border-radius:4px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  margin:0.5rem;
  &:hover {
    background-color: ${red[600]};
  }

  &.active {
    background-color: ${red[700]};
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

//Crear bottom para agregar al carrito
const AddCarButton = React.forwardRef(function CustomButton(props, ref) {
  const { children } = props;
  const { active, disabled, focusVisible, getRootProps } = useButton({
    ...props,
    ref,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <AddCarButtonRoot {...getRootProps()} className={clsx(classes)}>
      {children}
    </AddCarButtonRoot>
  );
});

//agregando al nodo
AddCarButton.propTypes = {
  children: PropTypes.node,
};

// Creando los botones para agregar o quitar al carrito 

//Color
const orange = {
  500: '#ff9100',
  600: '#ffa733',
  700: '#b26500',
};
//Styles
const CustomCountButtonRoot = styled('button')`
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  font-size: 0.8rem;
  background-color: ${orange[500]};
  padding: 10px 12px;
  border-radius:4px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  margin:0rem;
  &:hover {
    background-color: ${orange[600]};
  }

  &.active {
    background-color: ${orange[700]};
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
//Function que crea el boton
const CustomCountButton = React.forwardRef(function CustomButton(props, ref) {
  const { children } = props;
  const { active, disabled, focusVisible, getRootProps } = useButton({
    ...props,
    ref,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <CustomCountButtonRoot {...getRootProps()} className={clsx(classes)}>
      {children}
    </CustomCountButtonRoot>
  );
});

//agregando al nodo
CustomCountButton.propTypes = {
  children: PropTypes.node,
};
    return(   
      <>                                                         
        <CardActions sx={{flexDirection:'row',columnGap:5, display:`${displayAddButtom ? "flex" : "none"}`}}>
        <Box  sx={{display:'flex', flexDirection:'row' ,alignItems:'center',columnGap:1.5}}>
          <CustomCountButtonRoot onClick={()=>setInit( init>0 ? init-1 : 0 )} size="small" sx={{fontSize:20}}
         >-</CustomCountButtonRoot>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:'large'}}>
            {init}
          </Typography>
          <CustomCountButtonRoot onClick={()=>setInit(init<stock? init+1: init)} size="small" sx={{fontSize:20,p:'10px 10px'}}>+</CustomCountButtonRoot>
        </Box>
        <AddCarButton disabled={init===0?true:false}  onClick={()=>{onAdd(init,productId,price,stock,thumbnail, productName);changeDisplayButtom()}}  size="small"  sx={{ m:"0",p:"0"}}>Agregar al Carrito</AddCarButton>
        </CardActions>
         <Link to={`/cart`} style={{textDecoration:'none', display:`${displayAddButtom ? "none" : "flex"}`}}><AddCarButton  size="small" sx={{ m:"0",p:"0",display:`${displayAddButtom ? "none" : "block"}`}}>Ir al Carrito</AddCarButton></Link>
         </>
    );
}

