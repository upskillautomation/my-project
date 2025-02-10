// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import Logo from "../Images/logo.jpeg";

// import { Link } from "react-router-dom";
// import { Grid2 as Grid } from "@mui/material";

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" sx={{backgroundColor: "darkblue"}}>
      
//           <Grid container sx={{height:100, alignItems:'center'}}>
//             <Grid size={{ xs: 12, md: 2 }} sx={{alignItems:'center', ml:3}} component={Link}
//                 to="/">
//               <img src={Logo} alt="logo" width="80px" height="70px"/>
                
//             </Grid>

//             <Grid size={{ xs: 12, md: 3}}>
//               <Box
//                 sx={{
//                   alignItems:'center',
//                   display: {
//                     xs: "none",
//                     md: "flex",
//                   },
//                   mr: 2,
//                 }}
//               >
//                 <IconButton
//                   color="inherit"
//                   //href="https://facebook.com"
//                   target="_blank"
//                 >
//                   <FacebookIcon />
//                 </IconButton>
//                 <IconButton
//                   color="inherit"
//                   //href="https://instagram.com"
//                   target="_blank"
//                 >
//                   <InstagramIcon />
//                 </IconButton>
//               </Box>
//             </Grid>
            
          

//           <Grid size={{ xs: 12, md: 6 }} sx={{display: "flex", justifyContent: "flex-end"}}>
//             <MenuItem>
//               <Typography
//                 component={Link}
//                 to="/"
//                 sx={{
//                   textAlign: "center",
//                   textDecoration: "none",
//                   color: "inherit",
//                 }}
//               >
//                 Home
//               </Typography>
//             </MenuItem>
//             <MenuItem>
//               <Typography
//                 component={Link}
//                 to="/course"
//                 sx={{
//                   textAlign: "center",
//                   textDecoration: "none",
//                   color: "inherit",
//                 }}
//               >
//                 Course Details
//               </Typography>
//             </MenuItem>
//             <MenuItem>
//               <Typography
//                 component={Link}
//                 to="/career"
//                 sx={{
//                   textAlign: "center",
//                   textDecoration: "none",
//                   color: "inherit",
//                 }}
//               >
//                 Placement
//               </Typography>
//             </MenuItem>
//             <MenuItem>
//               <Typography
//                 component={Link}
//                 to="/contact"
//                 sx={{
//                   textAlign: "center",
//                   textDecoration: "none",
//                   color: "inherit",
//                 }}
//               >
//                 Contact
//               </Typography>
//             </MenuItem>
//           </Grid>
//           </Grid>
//     </AppBar>
//   );
// }
// export default Header;

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
            <IconButton color="inherit" component="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <FacebookIcon />
</IconButton>
<IconButton color="inherit" component="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
  <InstagramIcon />
</IconButton>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

