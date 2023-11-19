import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'black',
    paddingLeft: '25px',
    paddingTop: '10px',
    paddingBottom: '10px',

    
  }));

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: '35px',
    fontWeight: "bold",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'

}))

const divStyle = {
    paddingLeft: '40px'
}

const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    margin: theme.spacing(3),
    fontSize: '20px',
    textTransform: 'uppercase', 
    textDecoration: 'none',
  }))



const Navbar = () => {
    return (
        <StyledAppBar position="static">
            <Toolbar>
                <StyledTypography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <img src={'../img/blanklogo.png'} width="60px" height="60px" alt="logo"></img>
                    <div style={divStyle}> Wat Street </div>
                </StyledTypography>
                <StyledButton>Home</StyledButton>
                <StyledButton>About</StyledButton>
                <StyledButton>Contact</StyledButton>
                <StyledButton> Join Our Team </StyledButton>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Navbar;