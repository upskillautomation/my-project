import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../Images/logo.jpeg";

import { Link } from "react-router-dom";
import { Grid2 as Grid } from "@mui/material";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: "darkblue"}}>
      
          <Grid container sx={{height:100, alignItems:'center'}}>
            <Grid size={{ xs: 12, md: 2 }} sx={{alignItems:'center', ml:3}} component={Link}
                to="/">
              <img src={Logo} alt="logo" width="80px" height="70px"/>
                
            </Grid>

            <Grid size={{ xs: 12, md: 3}}>
              <Box
                sx={{
                  alignItems:'center',
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  mr: 2,
                }}
              >
                <IconButton
                  color="inherit"
                  //href="https://facebook.com"
                  target="_blank"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  //href="https://instagram.com"
                  target="_blank"
                >
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>
            
          

          <Grid size={{ xs: 12, md: 6 }} sx={{display: "flex", justifyContent: "flex-end"}}>
            <MenuItem>
              <Typography
                component={Link}
                to="/"
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Home
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography
                component={Link}
                to="/course"
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Course Details
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography
                component={Link}
                to="/career"
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Placement
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography
                component={Link}
                to="/contact"
                sx={{
                  textAlign: "center",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Contact
              </Typography>
            </MenuItem>
          </Grid>
          </Grid>
    </AppBar>
  );
}
export default Header;
