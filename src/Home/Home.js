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
//     </div>
//   );
// }

// export default Home;
import React from "react";
import Layout from "../Layout";
import HomeSlider from "../Slider/Slider";
import Slider from "react-slick";
import emailjs from "@emailjs/browser"; 
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
  };

  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const StatCard = ({ count, label, icon }) => (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: 2,
        borderRadius: 4,
        boxShadow: 3,
        height:250
      }}
    >
      <Avatar
        sx={{
          bgcolor: "#f0f4f8",
          color: "#004d40",
          width: 56,
          height: 56,
          mr: 2,
        }}
      >
        {icon}
      </Avatar>
      <Box>
        <Typography variant="h5" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" sx={{mt:3}}>
          {count}
        </Typography>
      </Box>
     
    </Card>
  );
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
      p: 3,
      borderRadius: 0,
      boxShadow: 4,
      height:400,
      
    }}
  >
    <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
      
    </Typography>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        emailjs.sendForm(
            "your_service_id",
            "your_template_id",
            e.target,
            "65OIAIsKtu8cr6p6X"
          )
          .then(() => {
            alert("Form submitted successfully!");
            e.target.reset();
          })
          .catch((error) => {
            console.error("Email send error:", error);
            alert("Something went wrong!");
          });
      }}
    >
      <Box display="flex" flexDirection="column" gap={4}>
        <input
          name="user_name"
          placeholder="Your Name"
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
             height:"50px"
          }}
        />
        <input
          name="user_mobile"
          placeholder="Mobile Number"
          type="tel"
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            height:"50px"
          }}
        />
        <select
          name="user_course"
          required
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
             height:"50px"
          }}
        >
          <option value="">Select Course</option>
          <option value="Automation">Automation</option>
          <option value="Web Coding">Web Coding</option>
        </select>
        <Button type="submit" variant="contained" color="primary" sx={{height:50}}>
          Enroll Now
        </Button>
      </Box>
    </form>
  </Card>
</Grid>

      </Grid>

      <Container maxWidth="xl" sx={{ mt: 16 }} >
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
            <Typography variant="h4" sx={{ color: "#003366", fontWeight: "bold", mb: 2 }}>
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
            <Typography variant="h4" sx={{ color: "#880e4f", fontWeight: "bold", mb: 2 }}>
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


        <Container maxWidth="xl" sx={{ margin: "auto", mt: 8, backgroundColor:"#ffffed",  borderRadius: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Grid container spacing={5} sx={{  p: 10, borderRadius: 2 }}>
              {/* <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 2, color: "black" }}>
                  Vision:
                </Typography>
                <Typography variant="body1" sx={{ color: "black" }}>
                  At Upskill Automation, our vision is to be the leading provider of automation training and education, empowering individuals and organizations to succeed in the rapidly evolving field of automation.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 2, color: "black" }}>
                  Mission:
                </Typography>
                <Typography variant="body1" sx={{ color: "black" }}>
                  Our mission is to provide high-quality training and education in automation technologies, including PLC, HMI, SCADA, IoT and more. We're committed to help our students and clients stay up-to-date with the latest advancements in automation and achieve their career goals.
                </Typography>
              </Grid> */}

              <Grid size={{ xs: 12, md: 6, xl: 3 }}>
            <StatCard
              
              label="Vision:"
              count=" At Upskill Automation, our vision is to be the leading provider of automation training and education, empowering individuals and organizations to succeed in the rapidly evolving field of automation."
              icon={<RemoveRedEyeIcon fontSize="medium" />}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6, xl: 3 }}>
            <StatCard
              
              label="Mission:"
              count=" Our mission is to provide high-quality training and education in automation technologies, including PLC, HMI, SCADA, IoT and more. We're committed to help our students and clients stay up-to-date with the latest advancements in automation and achieve their career goals."
              icon={<ModeStandbyIcon fontSize="medium" />}
            />
          </Grid>
            </Grid>

            
          </motion.div>
        </Container>

        <Container maxWidth="lg" sx={{ mt: 6, backgroundColor: "darkBlue", p: 4, color: "white", borderRadius: 2 }}>
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

        <Fade in={open} timeout={2000}>
          <Box>
            <PopUp width={isSmallScreen ? "300px" : "400px"} onClose={handleClose} />
          </Box>
        </Fade>

      </Layout>
    </div>
  );
}

export default Home;
