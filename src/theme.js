import { createTheme} from '@mui/material';

export const theme = createTheme({
    palette:{
      primary:{
        main:'#ff9100', //orange
        light:'#ff9100',
        contrastText: "white"
      },
      secondary:{
        main:'#1976d2',//blue
        contrastText: "white"
      },
      third:{
        main:'#ff1744',//red
        contrastText: "white"
      },
      background:{
        paper:"#2196f3",
        default:'#ffff'
      }
    }
    
  });