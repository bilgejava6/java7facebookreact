import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Label } from "@mui/icons-material";
const theme = createTheme();
export default function Home() {

    

    return(
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xl" sx={{
            flexDirection: 'row', 
            alignItems:'center', justifyContent: 'center'}}>
          <CssBaseline />
          
            <Grid2 container sx={{
                marginTop: 8,
            }}>
                <Grid2 item xs={2} sx={{
                    backgroundColor: '#E8A0BF',
                    height: '80vh',
                    marginRight: '10px',
                    borderRadius: '10px',  
                    paddingTop: 3,                 
                }} >
                   <Avatar
                    alt="Remy Sharp"
                    src="https://randomuser.me/api/portraits/men/96.jpg"
                    sx={{ width: 100, height: 100 }}
                    />
                    <label>Muhammet Hoca</label> <br />
                    <label>muhammethoca</label> <br />
                    <label>ankara</label> <br />
                    <label>bilgiler bilgiler bilgiler bilgiler</label> <br />
                    
                </Grid2>
                <Grid2 item xs={4} sx={{
                    backgroundColor: '#C0DBEA',
                    height: '80vh',
                    marginRight: '10px',
                    borderRadius: '10px',
                }}>
                </Grid2>
                <Grid2 item xs={2}  sx={{
                    backgroundColor: '#E8A0BF',
                    height: '80vh',
                    marginRight: '10px',
                    borderRadius: '10px',
                }}>
                </Grid2>
                
            </Grid2>
              
        </Container>
      </ThemeProvider>
    )
}