import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';

import { deepPurple } from '@mui/material/colors';


import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { Image } from "../../components/image/index";
import fullLogo from '../../assets/image/full.png';

import { useNavigate } from "react-router";

import NavTabs from '../navigation/navigation';

import { AvatarStyles } from './styles';
import DackMode from '../ThemeProvider/ThemeProvider';



export default function MenuAppBar() {
    const [auth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate("/");
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }} >
            
            
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                        <Image
                            src={fullLogo}
                            alt="logo"
                            width={"90px"}
                        />

                    </Typography>
                    <NavTabs />
                    {auth && (
                        <div>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <DackMode/>
                                <MenuItem onClick={handleClose}>Configuração</MenuItem>
                                <MenuItem onClick={handleGoBack}>Sair</MenuItem>
                                
                            </Menu>
                        </div>
                    )}
                    <AvatarStyles>
                        <Avatar sx={{ bgcolor: deepPurple[700] }} onClick={handleMenu}>IG</Avatar>
                    </AvatarStyles>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
