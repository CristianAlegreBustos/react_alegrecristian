import React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import SellIcon from '@mui/icons-material/Sell';


export function Cart({quantity}){
    return(
        <>
        <Badge badgeContent={quantity} color="secondary">
            <SellIcon color="action" sx={{color:(theme) => theme.palette.mode === '#b2102f' ? '#ff4569' : '#ff1744'}}/>
        </Badge>
        </>
    );
};