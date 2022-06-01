import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Link } from 'react-router-dom';

export function LandingPage({message,message2}){
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
        <Link to={'/'}> {message2}</Link>
        </Box>
    )
}