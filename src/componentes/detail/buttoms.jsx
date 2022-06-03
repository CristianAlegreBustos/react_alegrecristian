import React,{useState} from 'react'
import { Button } from '@mui/material';


//onClick={e => handleInput(e, "value")}


export function CreateTalleButtom(TalleList,handleInput){
    let talleButton=[];
  for( const key in TalleList){
     talleButton.push(<Button sx={{'&:focus':{color:'orange',bgcolor:'white', border:'none',outline:'red solid 2px'},'&:hover':{color:'orange',bgcolor:'white'},color:'white',bgcolor:'orange'}} key={key} value={TalleList[key]} onClick={e => handleInput(e, "value")} >{TalleList[key]}</Button>);
  }
  return talleButton
}

export function CreateColorButtom(ColorList,handleColor){
    let ColorButton=[];
    for( const key in ColorList){
        ColorButton.push(<Button sx={{'&:focus':{color:'orange',bgcolor:'white', border:'none',outline:'red solid 2px'},'&:hover':{color:'orange',bgcolor:'white'},color:'white',bgcolor:'orange'}} key={key} value={key} onClick={e => handleColor(e, "value")} >{ColorList[key]}</Button>);
    }
    return ColorButton;
}

