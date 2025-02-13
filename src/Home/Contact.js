// import React from "react";
// import {
//   Grid2 as Grid,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   IconButton,
// } from "@mui/material";
// import { Email, Phone, LocationOn } from "@mui/icons-material";
// import Layout from "../Layout";
// const ContactUs = () => {
//   return (
//     <Layout>
//       <Box sx={{ p: 4, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
//         <Grid container spacing={4}>
//           {/* Contact Details Section */}
//           <Grid size={{ xs: 12, md: 6 }}>
//             <Card sx={{ p: 2, backgroundColor: "#ffffff", height: "100%" }}>
//               <CardContent>
//                 <Typography variant="h4" gutterBottom>
//                   Contact Us
//                 </Typography>
//                 <Typography variant="h5" gutterBottom>
//                   Upskill Automation Institute <br />
                  
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
                  
//                   We’d love to hear from you! Whether you have questions
//                       about our courses, training programs, or placement
//                       opportunities, our team is here to assist you.
//                 </Typography>
//                 <Box sx={{ mt: 2 }}>
//                   <Box display="flex" alignItems="center" mb={2}>
//                     <IconButton>
//                       <LocationOn color="primary" />
//                     </IconButton>
//                     <Typography variant="body1">
//                     1st Floor, Royal Prestige, Shahupuri , Kolhapur, Near vardhan Hospital.
                     
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center" mb={2}>
//                     <IconButton>
//                       <Email color="primary" />
//                     </IconButton>
//                     <Typography variant="body1">
//                       info@upskillautomation.com
//                     </Typography>
//                   </Box>
//                   <Box display="flex" alignItems="center">
//                     <IconButton>
//                       <Phone color="primary" />
//                     </IconButton>
//                     <Typography variant="body1">906 715 1699</Typography>
//                   </Box>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Inquiry Form Section */}
//           <Grid size={{ xs: 12, md: 6 }}>
//             <Card sx={{ p: 2, height: "100%" }}>
//               <CardContent>
//                 <Typography variant="h5" gutterBottom>
//                   Send Us an Inquiry
//                 </Typography>
//                 <form>
//                   <Box sx={{ mt: 2 }}>
//                     <TextField
//                       fullWidth
//                       label="Name"
//                       variant="outlined"
//                       margin="normal"
//                     />
//                     <TextField
//                       fullWidth
//                       label="Mobile Number"
//                       variant="outlined"
//                       margin="normal"
//                       type="tel"
//                     />
//                     <TextField
//                       fullWidth
//                       label="Email"
//                       variant="outlined"
//                       margin="normal"
//                       type="email"
//                     />

//                     <Button
//                       fullWidth
//                       variant="contained"
//                       color="primary"
//                       size="large"
//                       sx={{ mt: 2 }}
//                     >
//                       Submit
//                     </Button>
//                   </Box>
//                 </form>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </Layout>
//   );
// };

// export default ContactUs;
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
                      1st Floor, Royal Prestige, Shahupuri, Kolhapur, Near Vardhan Hospital.
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

          {/* Google Maps Section */}
          <Grid size={{ xs: 12, md: 12 }}>
            <Card sx={{ p: 2, mt: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Find Us on Google Maps
                </Typography>
                <Box sx={{ width: "100%", height: "450px", overflow: "hidden" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.519363453688!2d74.24208850000001!3d16.7009182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1017b1371ec05%3A0xd83d69140f14ff47!2sUpskill%20Automation%20Institute%20-%20Industrial%20Automation%20PLC%2C%20SCADA%2C%20HMI%2C%20Servo%2C%20Autocad%2C%20EPlan!5e0!3m2!1sen!2sin!4v1739429685341!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default ContactUs;
