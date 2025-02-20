import React from "react";
import {
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { Email, Phone, LocationOn } from "@mui/icons-material";
const StyledFooter = styled("footer")(({ theme }) => ({
  background: "linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)",
  color: "#ffffff",
  padding: theme.spacing(6, 0),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    opacity: 0.5,
  },
}));

const GridItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  gap: theme.spacing(1),
  "& svg": {
    fontSize: "2rem",
    transition: "all 0.3s ease",
  },
  "&:hover svg": {
    transform: "scale(1.1)",
    color: "#64ffda",
  },
}));

const StyledLink = styled("a")(({ theme }) => ({
  color: "#ffffff",
  textDecoration: "none",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -2,
    left: 0,
    width: 0,
    height: "2px",
    backgroundColor: "#64ffda",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
  "&:focus": {
    outline: "2px solid #64ffda",
    outlineOffset: "4px",
  },
}));

const ScrollTopButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(4),
  bottom: theme.spacing(4),
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
}));

const MLFooter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerSections = [
    {
      title: "Upskill Automation Institute",
      links: ["Kolhapur"],
    },

    {
      title: "Contact",
      links: ["906 715 1699", "888 873 7294"],
    },
    {
      title: "Email",
      links: ["info@upskillautomation.com"],
    },
  ];

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6">Upskill Automation Institute</Typography>
            <br />
            <Box display="flex" alignItems="center" mb={2}>
              <IconButton>
                <LocationOn color="primary" />
              </IconButton>
              <Typography variant="body1">
                1st Floor, Royal Prestige, Shahupuri , Kolhapur, Near vardhan Hospital.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography>Contact :</Typography>
            <br />

            <Box display="flex" alignItems="center">
              <IconButton>
                <Phone color="primary" />
              </IconButton> <br/><br/>
              <Typography variant="body1">906 715 1699</Typography>
             
            </Box>

            <Box display="flex" alignItems="center">
             
              <IconButton>
                <Phone color="primary" />
              </IconButton>
              <Typography variant="body1">888 873 7294</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography>Email :</Typography>
            <br />

            <Box display="flex" alignItems="center" mb={2}>
              <IconButton>
                <Email color="primary" />
              </IconButton>
              <Typography variant="body1">
                info@upskillautomation.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 2, textAlign: "right", position: "relative" }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Upskill Automation Institute. All
            rights reserved.
          </Typography>
          
        </Box>

        <ScrollTopButton
          onClick={scrollToTop}
          aria-label="scroll to top"
        ></ScrollTopButton>
      </Container>
    </StyledFooter>
  );
};

export default MLFooter;
