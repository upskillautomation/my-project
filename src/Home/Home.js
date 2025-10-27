// import React from "react";
// import Layout from "../Layout";
// import HomeSlider from "../Slider/Slider";
// import Slider from "react-slick";
// import {
//   Card,
//   Button,
//   Container,
//   Grid2 as Grid,
//   Typography,
// } from "@mui/material";
// import img1 from "./home.png";
// import img2 from "../Images/slide2.jpeg";
// import img3 from "../Images/slide3.jpeg";
// import PopUp from "./PopUp";
// import { useMediaQuery } from "@mui/material";
// import { Link } from "react-router-dom";

// function Home() {
//   const isSmallScreen = useMediaQuery("(max-width:600px)");

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1, // Show 3 cards at once
//     slidesToScroll: 1,
//     centerMode: true, // Ensures center slide is focused
//     focusOnSelect: true,
//     centerPadding: "0", // Ensures no space is left on either side of the centered slide
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           centerMode: true,
//           centerPadding: "0",
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           centerMode: true,
//           centerPadding: "0",
//         },
//       },
//     ],
//   };
//   return (
//     <div>
//       <Layout>
//         <Slider {...sliderSettings}>
//           <div>
//             <img src={img1} width="100%" height="450px" alt="automation" />
//           </div>
//           <div>
//             <img src={img2} width="100%" height="450px" alt="automation" />
//           </div>
//           <div>
//             <img src={img3} width="100%" height="450px" alt="automation" />
//           </div>
//         </Slider>

//         <Container maxWidth="xl" sx={{ mt: 6 }}>
//           <Grid
//             container
//             spacing={4}
//             sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
//           >
//             {/* Automation Course Card */}
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   p: 3,
//                   height: "100%",
//                   borderRadius: 3,
//                   backgroundColor: "#f0f8ff",
//                 }}
//                 elevation={4}
//               >
//                 <Typography
//                   variant="h5"
//                   sx={{ color: "#003366", fontWeight: "bold", mb: 2 }}
//                 >
//                   Automation Course
//                 </Typography>
//                 <Typography variant="body1">
//                   Learn industrial automation technologies including:
//                 </Typography>
//                 <ul style={{ paddingLeft: "1.2rem", marginTop: "1rem" }}>
//                   <li>PLC Programming</li>
//                   <li>SCADA</li>
//                   <li>HMI Design</li>
//                   <li>IoT Integration</li>
//                   <li>Robotics</li>
//                   <li>AutoCAD & EPLAN</li>
//                 </ul>
//                 <Button variant="outlined" component={Link} to="/course">
//                   More Details
//                 </Button>
//               </Card>
//             </Grid>

//             {/* Web Development Course Card */}
//             <Grid item xs={12} md={6}>
//               <Card
//                 sx={{
//                   p: 3,
//                   height: "100%",
//                   borderRadius: 3,
//                   backgroundColor: "#fff0f5",
//                 }}
//                 elevation={4}
//               >
//                 <Typography
//                   variant="h5"
//                   sx={{ color: "#880e4f", fontWeight: "bold", mb: 2 }}
//                 >
//                   Web Development Course
//                 </Typography>
//                 <Typography variant="body1">
//                   Master front-end technologies including:
//                 </Typography>
//                 <ul style={{ paddingLeft: "1.2rem", marginTop: "1rem" }}>
//                   <li>HTML</li>
//                   <li>CSS</li>
//                   <li>Bootstrap</li>
//                   <li>Material UI (MUI)</li>
//                   <li>JavaScript</li>
//                   <li>React JS</li>
//                 </ul>
//                 <Button variant="outlined" component={Link} to="/web-details">
//                   {" "}
//                   More Details
//                 </Button>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//         <Container
//           maxWidth="xl"
//           sx={{ margin: "auto", mt: 8, p: 2, color: "blue", borderRadius: 2 }}
//           elevation={4}
//         >
//           <Grid
//             container
//             spacing={5}
//             sx={{ border: "1px solid blue", p: 10, borderRadius: 2 }}
//           >
//             {/* Vision Section */}
//             <Grid size={{ xs: 12, md: 6 }}>
//               <Typography
//                 variant="h4"
//                 component="h2"
//                 sx={{ mb: 2, color: "black" }}
//               >
//                 Vision:
//               </Typography>
//               <Typography variant="body1" sx={{ color: "black" }}>
//                 At Upskill Automation, our vision is to be the leading provider
//                 of automation training and education, empowering individuals and
//                 organizations to succeed in the rapidly evolving field of
//                 automation.
//               </Typography>
//             </Grid>

//             {/* Mission Section */}
//             <Grid size={{ xs: 12, md: 6 }}>
//               <Typography
//                 variant="h4"
//                 component="h2"
//                 sx={{ mb: 2, color: "black" }}
//               >
//                 Mission:
//               </Typography>
//               <Typography variant="body1" sx={{ color: "black" }}>
//                 Our mission is to provide high-quality training and education in
//                 automation technologies, including PLC, HMI, SCADA, IoT and
//                 more. We're committed to help our students and clients stay
//                 up-to-date with the latest advancements in automation and
//                 achieve their career goals.
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>

//         <Container
//           maxWidth="lg"
//           sx={{
//             mt: 6,
//             backgroundColor: "darkBlue",
//             p: 4,
//             color: "white",
//             borderRadius: 2,
//           }}
//         >
//           <Grid container spacing={5}>
//             {/* Vision Section */}
//             <Grid size={{ xs: 12, md: 6 }}>
//               <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
//                 About Us :
//               </Typography>
//               <Typography variant="body1" sx={{ textAlign: "justify" }}>
//                 At Upskill Automation, we're dedicated to empowering individuals
//                 and organizations with the skills and knowledge needed to
//                 succeed in the rapidly evolving field of automation.
//                 <br />
//                 <br />
//                 Our basic objective is to provide training of Cutting-edge
//                 Industrial Automation Technologies to fresh engineers for
//                 bridging the demand-supply gap of ever growing demand of
//                 Industrial Automation Engineers and to enhance domain knowledge
//                 of working professionals with the advancement in this domain.
//                 <br />
//                 <br />
//                 Upskill Automation provides advanced solutions to empower and
//                 enrich candidates with various training programs that cover a
//                 huge array of specialties in the technical communication and
//                 behavioral aspects of working in a company. With a team of
//                 seasoned automation experts and educators, we aim to bridge the
//                 gap between theoretical learning and real-world application.
//                 Whether you're a beginner or a professional looking to upskill
//                 Automation, our courses are tailored to meet diverse learning
//                 needs, from mastering the basics of PLCs, SCADA, HMI, Robotics,
//                 Autocad & Eplan programming to exploring advanced control
//                 strategies.
//                 <br />
//                 <br />
//               </Typography>
//             </Grid>
//             <Grid size={{ xs: 12, md: 6 }}>
//               <img
//                 src="https://cdn.prod.website-files.com/6188a89516ba2d18dfc2dcd4/651144cdf79f97f73b5e1036_Real%20Estate%20Agency%20Automation%20Blog%20Cover-p-1080.webp"
//                 width={isSmallScreen ? "300px" : "550px"}
//               />
//               <br />
//               <br />
//               <Typography>
//                 Join us on a journey to unlock your potential and shape the
//                 future of smart manufacturing and intelligent systems. Together,
//                 let's innovate, automate and lead.
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>
       

//         <HomeSlider />
//         <PopUp width={isSmallScreen ? "300px" : "400px"} />
//       </Layout>
import Layout from "../Layout";
import HomeSlider from "../Slider/Slider";
import Slider from "react-slick";
import emailjs from "@emailjs/browser"; 
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Card,
  Button,
  Container,
  Grid2 as Grid,
  Typography,
  useMediaQuery,
  Box,
  Fade,
  Avatar,
  CircularProgress,
  Alert,
  Snackbar,
  TextField,
  MenuItem,
} from "@mui/material";
import img1 from "./home.png";
import img2 from "../Images/slide2.jpeg";
import img3 from "../Images/slide3.jpeg";
import PopUp from "./PopUp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import coding from "./coding.png";
import automation from  "./automation.png";

function Home() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  // State management
  const [popupOpen, setPopupOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    course: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  // Memoized slider settings
  const sliderSettings = useMemo(() => ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  }), []);

  // Handlers
  const handlePopupClose = useCallback(() => setPopupOpen(false), []);
  
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  }, [formErrors]);

  const validateForm = useCallback(() => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\s/g, ""))) {
      errors.mobile = "Please enter a valid 10-digit mobile number";
    }
    
    if (!formData.course) {
      errors.course = "Please select a course";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);

  const handleSnackbarClose = useCallback(() => {
    setSnackbar(prev => ({ ...prev, open: false }));
  }, []);

  // Memoized StatCard component
  const StatCard = React.memo(({ count, label, icon, color = "#004d40" }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "flex-start",
          p: 3,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          height: "100%",
          minHeight: 200,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            transform: "translateY(-4px)",
          },
        }}
      >
        <Avatar
          sx={{
            bgcolor: `${color}15`,
            color: color,
            width: 56,
            height: 56,
            mr: 2,
            flexShrink: 0,
          }}
        >
          {icon}
        </Avatar>
        <Box>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, color: color }}>
            {label}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            {count}
          </Typography>
        </Box>
      </Card>
    </motion.div>
  ));

  // Statistics data
  const statsData = useMemo(() => [
    {
      label: "Vision",
      count: "At Upskill Automation, our vision is to be the leading provider of automation training and education, empowering individuals and organizations to succeed in the rapidly evolving field of automation.",
      icon: <RemoveRedEyeIcon fontSize="large" />,
      color: "#1976d2"
    },
    {
      label: "Mission",
      count: "Our mission is to provide high-quality training and education in automation technologies, including PLC, HMI, SCADA, IoT and more. We're committed to help our students and clients stay up-to-date with the latest advancements in automation and achieve their career goals.",
      icon: <ModeStandbyIcon fontSize="large" />,
      color: "#d32f2f"
    },
    {
      label: "Students Trained",
      count: "500+ professionals upskilled in automation and web development technologies",
      icon: <PeopleIcon fontSize="large" />,
      color: "#388e3c"
    },
    {
      label: "Success Rate",
      count: "95% of our students successfully transition to automation roles or advance their careers",
      icon: <CheckCircleIcon fontSize="large" />,
      color: "#f57c00"
    },
  ], []);

  return (
    <div>
      <Layout>
      <Grid container>
        <Grid size={{xs:12, md:8}}>
        <Slider {...sliderSettings}>
          <div>
            <img src={img1} width="100%" height="450px" alt="automation" />
          </div>
          <div>
            <img src={img2} width="100%" height="450px" alt="automation" />
          </div>
          <div>
            <img src={img3} width="100%" height="450px" alt="automation" />
          </div>
        </Slider>

      </Grid>
      <Grid size={{xs:12, md:4}}>
  <Card elevation={0}
    sx={{
      p: 4,
      borderRadius: 2,
      boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
      height: "100%",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
    }}
  >
    <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}>
      Quick Enrollment
    </Typography>
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
          setSnackbar({
            open: true,
            message: "Please fix the errors in the form",
            severity: "error"
          });
          return;
        }

        setIsSubmitting(true);
        
        try {
          await emailjs.sendForm(
            "your_service_id",
            "your_template_id",
            e.target,
            "65OIAIsKtu8cr6p6X"
          );
          
          setSnackbar({
            open: true,
            message: "Enrollment request submitted successfully! We'll contact you soon.",
            severity: "success"
          });
          
          // Reset form
          setFormData({ name: "", mobile: "", course: "" });
          e.target.reset();
        } catch (error) {
          console.error("Email send error:", error);
          setSnackbar({
            open: true,
            message: "Failed to submit. Please try again or contact us directly.",
            severity: "error"
          });
        } finally {
          setIsSubmitting(false);
        }
      }}
    >
      <Box display="flex" flexDirection="column" gap={3}>
        <TextField
          name="user_name"
          label="Your Name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange}
          error={!!formErrors.name}
          helperText={formErrors.name}
          required
          fullWidth
          variant="outlined"
          disabled={isSubmitting}
          inputProps={{ 'aria-label': 'Your Name' }}
        />
        
        <TextField
          name="user_mobile"
          label="Mobile Number"
          placeholder="Enter 10-digit mobile number"
          value={formData.mobile}
          onChange={handleInputChange}
          error={!!formErrors.mobile}
          helperText={formErrors.mobile}
          type="tel"
          required
          fullWidth
          variant="outlined"
          disabled={isSubmitting}
          inputProps={{ 'aria-label': 'Mobile Number', maxLength: 10 }}
        />
        
        <TextField
          name="user_course"
          label="Select Course"
          value={formData.course}
          onChange={handleInputChange}
          error={!!formErrors.course}
          helperText={formErrors.course}
          select
          required
          fullWidth
          variant="outlined"
          disabled={isSubmitting}
          inputProps={{ 'aria-label': 'Course Selection' }}
        >
          <MenuItem value="">Select a course</MenuItem>
          <MenuItem value="Automation">Industrial Automation</MenuItem>
          <MenuItem value="Web Coding">Web Development</MenuItem>
        </TextField>
        
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          size="large"
          disabled={isSubmitting}
          startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SchoolIcon />}
          sx={{
            height: 56,
            fontWeight: "bold",
            textTransform: "none",
            fontSize: "1.1rem",
            borderRadius: 2,
            boxShadow: 3,
            "&:hover": {
              boxShadow: 6,
            },
          }}
        >
          {isSubmitting ? "Submitting..." : "Enroll Now"}
        </Button>
      </Box>
    </form>
  </Card>
</Grid>

      </Grid>

      <Container maxWidth="xl" sx={{ mt: 12, mb: 8 }} >
  <Grid
    container
    spacing={4}
    sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
  >
    {/* Automation Course Card */}
    <Grid size={{xs:12, md:5}}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card
          sx={{
            p: 0,
            height: { xs: "auto", md: 700 },
            borderRadius: 3,
            backgroundColor: "#f0f8ff",

          }}
          elevation={1}
        >
          <img
            src={automation}
            alt="Automation Course"
            style={{ width: "100%", height: "350px", objectFit: "cover", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
          />
          <Box p={3}>
            <Typography variant="h4" sx={{ color: "#003366", fontWeight: "bold", mb: 2, fontSize: { xs: "1.75rem", md: "2.125rem" } }}>
              Automation Course
            </Typography>
            <Typography variant="body1">
              Learn industrial automation technologies including:
            </Typography>
            <ul style={{ paddingLeft: "1.2rem", marginTop: "1rem" }}>
              <li>Advanced Automation Control Systems & Robotics Fundamentals</li>
              <li>Programming and Automation Essentials</li>
              <li>SCADA Fundamentals and Application Training.</li>
            </ul>
            <Button variant="outlined" component={Link} to="/course">
              More Details
            </Button>
          </Box>
        </Card>
      </motion.div>
    </Grid>

    {/* Web Development Course Card */}
    <Grid size={{xs:12, md:5}} >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card
          sx={{
            p: 0,
            height: { xs: "auto", md: 700 },
            borderRadius: 3,
            backgroundColor: "#fff0f5",
          }}
          elevation={1}
        >
          <img
            src={coding}
            alt="Web Development"
            style={{ width: "100%", height: "350px", objectFit: "cover", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
          />
          <Box p={3}>
            <Typography variant="h4" sx={{ color: "#880e4f", fontWeight: "bold", mb: 2, fontSize: { xs: "1.75rem", md: "2.125rem" } }}>
              Web Development Course
            </Typography>
            <Typography variant="body1">
              Master front-end technologies including:
            </Typography>
            <ul style={{ paddingLeft: "1.2rem", marginTop: "1rem" }}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Material UI (MUI)</li>
              <li>JavaScript</li>
              <li>React JS</li>
            </ul>
            <Button variant="outlined" component={Link} to="/web-details">
              More Details
            </Button>
          </Box>
        </Card>
      </motion.div>
    </Grid>
  </Grid>
</Container>


        <Container maxWidth="xl" sx={{ margin: "auto", mt: 12, mb: 8, backgroundColor:"#f8f9fa", borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={5} sx={{  p: 10, borderRadius: 2 }}>
              {statsData.map((stat, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                  <StatCard
                    label={stat.label}
                    count={stat.count}
                    icon={stat.icon}
                    color={stat.color}
                  />
                </Grid>
              ))}
            </Grid>

            
          </motion.div>
        </Container>

        <Container maxWidth="lg" sx={{ mt: 12, mb: 8, background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)", p: 6, color: "white", borderRadius: 3, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={5}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                  About Us :
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "justify" }}>
                  At Upskill Automation, we're dedicated to empowering individuals and organizations with the skills and knowledge needed to succeed in the rapidly evolving field of automation.
                  <br /><br />
                  Our basic objective is to provide training of Cutting-edge Industrial Automation Technologies to fresh engineers for bridging the demand-supply gap of ever growing demand of Industrial Automation Engineers and to enhance domain knowledge of working professionals with the advancement in this domain.
                  <br /><br />
                  Upskill Automation provides advanced solutions to empower and enrich candidates with various training programs that cover a huge array of specialties in the technical communication and behavioral aspects of working in a company. With a team of seasoned automation experts and educators, we aim to bridge the gap between theoretical learning and real-world application. Whether you're a beginner or a professional looking to upskill Automation, our courses are tailored to meet diverse learning needs, from mastering the basics of PLCs, SCADA, HMI, Robotics, Autocad & Eplan programming to exploring advanced control strategies.
                  <br /><br />
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <img
                  src="https://cdn.prod.website-files.com/6188a89516ba2d18dfc2dcd4/651144cdf79f97f73b5e1036_Real%20Estate%20Agency%20Automation%20Blog%20Cover-p-1080.webp"
                  width={isSmallScreen ? "300px" : "550px"}
                />
                <br /><br />
                <Typography>
                  Join us on a journey to unlock your potential and shape the future of smart manufacturing and intelligent systems. Together, let's innovate, automate and lead.
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </Container>

        <HomeSlider />

        <Fade in={popupOpen} timeout={2000}>
          <Box>
            <PopUp width={isSmallScreen ? "300px" : "400px"} onClose={handlePopupClose} />
          </Box>
        </Fade>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert 
            onClose={handleSnackbarClose} 
            severity={snackbar.severity} 
            sx={{ width: "100%" }}
            variant="filled"
          >
            {snackbar.message}
          </Alert>
        </Snackbar>

      </Layout>
    </div>
  );
}

export default Home;
