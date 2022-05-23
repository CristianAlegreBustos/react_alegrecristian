import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LoginIcon from '@mui/icons-material/Login';
import LockIcon from '@mui/icons-material/Lock';
import {Cart} from './CartWidget.jsx';
import { Link, NavLink } from 'react-router-dom';


// Estas son mis paginas a linkear
const pages=['Inicio','Calzado','Accesorios','Ropa'];

//object function
function chooseObjectId(page){
  switch (page) {
    case 'Inicio':
    
    return '/';
      break;
    case 'Calzado':

    return '/category/zapatillas de basquet';
    break;
    case 'Accesorios':
      return '/category/accesorios de basquet';
    break;
    case 'Ropa':
      return '/category/ropa de basquet'
    break;
    default: 
      return 'error';
      break;
  }

}

// Esta funcion crea un objeto por cada pagina y sus atributos html. 
let navBar_Items = pages.map(page=>({text:page,url:`./${page}`,className:'navbarItem',objectId:`id_${page}`,categoryId:chooseObjectId(page)}));



// funcion que crea el navbar
function NavBar(){
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  //const handleOpenUserMenu = (event) => {
//    setAnchorElUser(event.currentTarget);
  //};

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    return (
      <AppBar color='secondary' position='static'>
        <Container maxWidth="xl">
          <Toolbar disableGutters className='Toolbar' sx={{ 
            display:{md:'flex'}
          }}>
          
        
          {/* for responsive screens*/}
          <Box  sx={{flexGrow:0, flexDirection:'row',justifyContent:'space-evenly',alignContent:'center',alignItems:'center',alignSelf:'center',columnGap:8,display:{xs:'flex',md:'none'}}}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> 
          <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                
              }}
            >
              {navBar_Items.map(function(item){
                return (
                    <MenuItem  key={item.objectId}  onClick={handleCloseNavMenu} sx={{
                      fontWeight:700,
                    }}>
                    <Link to={encodeURI(item.categoryId)}><Typography color="primary" textAlign="center">{item.text}</Typography></Link> 
                    </MenuItem>
                );
            })}
            </Menu>
            <LocalFireDepartmentIcon color='primary' sx={{ 
            display: { xs: 'flex', md: 'none' }, 
            mr: 0.5 }} >
            </LocalFireDepartmentIcon>
        
            <Link to={'/'} style={{textDecoration:'none'}}><Typography
            variant="h5"
            noWrap
            color='white'
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            Tienda FB
          </Typography></Link>
          <Cart quantity={4}></Cart>
          <Button variant='contained' className='navbarItem_registrar'  startIcon={<LockIcon/>} sx={{ my: 1.5,justifyContent:'center',
           boxShadow:3, display: 'flex' }}></Button>

           
           <Button variant='contained' className='navbarItem_ingresar'  startIcon={<LoginIcon/>}  sx={{ my: 1.5,justifyContent:'center', 
            boxShadow:3,
            display: 'flex' }}></Button>
          </Box>


          {/* for desktop mode*/}
          <Box   sx={{flexGrow:1, display:{xs:'none',md:'flex', flexDirection:'row',justifyContent:'space-evenly',alignContent:'center',alignItems:'center'}}}>
          <Box sx={{display:'flex', flexDirection:'row', alignItems:'center' }}>
          <LocalFireDepartmentIcon color='primary' className='FireIcon'
          sx={{
            display: { xs: 'none', md: 'flex' },
            fontSize:60,
            mr:1,
          }}
          >
          </LocalFireDepartmentIcon>
          <Link to={'/'} style={{textDecoration:'none'}}><Typography
            variant="h6"
            noWrap
            color="white"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            Tienda FB
          </Typography> </Link>
          </Box>
          {navBar_Items.map(function(item){
                return (
                <Link to={encodeURI(item.categoryId)} style={{textDecoration:'none'}}>
                  <Button key={item.objectId} className={item.className} id={item.objectId}
                     target={item.target}
                     onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                     >
                       {item.text}
                     </Button>
                </Link>
                );
            })}
          <Cart  quantity={4}></Cart>
          <Button variant='contained' className='navbarItem_registrar'  startIcon={<LockIcon/>} sx={{ my: 1.5,
           boxShadow:3, display: 'flex' }}>Ingresar</Button>

           <Button variant='contained' className='navbarItem_ingresar'  startIcon={<LoginIcon/>}  sx={{ my: 1.5, 
            boxShadow:3, 
            display: 'flex' }}>Registrarse</Button>
          </Box>
           
            </Toolbar> 
        </Container>
      </AppBar>

      
    )
}
export default NavBar;