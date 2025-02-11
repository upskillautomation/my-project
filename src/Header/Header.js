
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../Images/logo.jpeg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "darkblue" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              mr: 2,
            }}
          >
            <img src={Logo} alt="logo" width="50px" height="50px" />
          </Box>

          {/* Menu for mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
              sx={{ ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/course" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Course Details</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/career" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Placement</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/contact" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo for larger screens */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              mr: 2,
            }}
          >
            <img src={Logo} alt="logo" width="70px" height="60px" />
          </Box>

          {/* Menu for larger screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button
              component={Link}
              to="/"
              sx={{ color: "white", display: "block" }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/course"
              sx={{ color: "white", display: "block" }}
            >
              Course Details
            </Button>
            <Button
              component={Link}
              to="/career"
              sx={{ color: "white", display: "block" }}
            >
              Placement
            </Button>
            <Button
              component={Link}
              to="/contact"
              sx={{ color: "white", display: "block" }}
            >
              Contact
            </Button>
          </Box>

          {/* Social Media Icons */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              ml: 2,
            }}
          >
          

<IconButton color="inherit" component="a" href="https://www.instagram.com/upskillautomation?igsh=b2l0bTBpeHU2dXJv" target="_blank" rel="noopener noreferrer">
  <InstagramIcon />
</IconButton>

<IconButton color="inherit" component="a" href="https://www.linkedin.com/in/upskill-automation-institute-a0581334b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
  <LinkedInIcon />
</IconButton>


          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

