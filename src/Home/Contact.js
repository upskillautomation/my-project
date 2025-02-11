import React from "react";
import {
  Grid2 as Grid,
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import Layout from "../Layout";
const ContactUs = () => {
  return (
    <Layout>
      <Box sx={{ p: 4, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
        <Grid container spacing={4}>
          {/* Contact Details Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ p: 2, backgroundColor: "#ffffff", height: "100%" }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Contact Us
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Upskill Automation Institute <br />
                  
                </Typography>
                <Typography variant="body2" gutterBottom>
                  
                  We’d love to hear from you! Whether you have questions
                      about our courses, training programs, or placement
                      opportunities, our team is here to assist you.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <IconButton>
                      <LocationOn color="primary" />
                    </IconButton>
                    <Typography variant="body1">
                    1st Floor, Royal Prestige, Shahupuri , Kolhapur, Near vardhan Hospital.
                     
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mb={2}>
                    <IconButton>
                      <Email color="primary" />
                    </IconButton>
                    <Typography variant="body1">
                      info@upskillautomation.com
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <IconButton>
                      <Phone color="primary" />
                    </IconButton>
                    <Typography variant="body1">906 715 1699</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Inquiry Form Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ p: 2, height: "100%" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Send Us an Inquiry
                </Typography>
                <form>
                  <Box sx={{ mt: 2 }}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      label="Mobile Number"
                      variant="outlined"
                      margin="normal"
                      type="tel"
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      margin="normal"
                      type="email"
                    />

                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ mt: 2 }}
                    >
                      Submit
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default ContactUs;
