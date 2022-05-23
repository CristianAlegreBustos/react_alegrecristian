import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export function LandingPage({message}){
    //male animations
    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <LocalFireDepartmentIcon color='primary'  sx={{ 
            display: { xs: 'none', md: 'flex',fontSize:'4rem',}, 
            mr: 0.5}} >
        </LocalFireDepartmentIcon>
        
        <Typography
        variant='h5'
        sx={{
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none'
        }}
        >
        {message}
        </Typography>
        </Box>
    )
}