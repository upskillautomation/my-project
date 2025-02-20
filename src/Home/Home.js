import React from "react";
import Layout from "../Layout";
import HomeSlider from "../Slider/Slider";
import Slider from "react-slick";
import {
  Card,
  CardContent,
  Container,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import img1 from "./home.png";
import img2 from "../Images/slide2.jpeg";
import img3 from "../Images/slide3.jpeg";
import PopUp from "./PopUp";
import { useMediaQuery } from "@mui/material";

function Home() {
   const isSmallScreen = useMediaQuery("(max-width:600px)");
  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 3 cards at once
    slidesToScroll: 1,
    centerMode: true, // Ensures center slide is focused
    focusOnSelect: true,
    centerPadding: "0", // Ensures no space is left on either side of the centered slide
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
  return (
    <div>
      <Layout>
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

        <Container maxWidth="xl"
          sx={{ margin: "auto", mt: 8, p: 2,  color: "blue", borderRadius: 2 }}
          elevation={4}
        >
          
            <Grid container spacing={5} sx={{border :"1px solid blue", p:10, borderRadius: 2}}>
              {/* Vision Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 2, color:"black" }}>
                  Vision:
                </Typography>
                <Typography variant="body1" sx={{color:"black"}}>
                At Upskill Automation, our vision is to be the leading provider of
automation training and education, empowering individuals and
organizations to succeed in the rapidly evolving field of automation.
                </Typography>
              </Grid>

              {/* Mission Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 2, color:"black" }}>
                  Mission:
                </Typography>
                <Typography variant="body1" sx={{color:"black"}}>
                Our mission is to provide high-quality training and education in
automation technologies, including PLC, HMI, SCADA, IoT and more.
We're committed to help our students and clients stay up-to-date with
the latest advancements in automation and achieve their career goals.

                </Typography>
              </Grid>
            </Grid>
        </Container>

        <Container maxWidth="lg" sx={{ mt: 6, backgroundColor: "darkBlue" , p:4, color:'white', borderRadius: 2}}>
          <Grid container spacing={5}>
            {/* Vision Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                About Us :
              </Typography>
              <Typography variant="body1" sx={{textAlign:"justify"}}>
              At Upskill Automation, we're dedicated to empowering individuals and
organizations with the skills and knowledge needed to succeed in the
rapidly evolving field of automation.<br/><br/>
Our basic objective is to provide training of Cutting-edge Industrial
Automation Technologies to fresh engineers for bridging the
demand-supply gap of ever growing demand of Industrial Automation
Engineers and to enhance domain knowledge of working
professionals with the advancement in this domain.<br/><br/>
Upskill Automation provides advanced solutions to empower and
enrich candidates with various training programs that cover a huge
array of specialties in the technical communication and behavioral
aspects of working in a company. With a team of seasoned
automation experts and educators, we aim to bridge the gap between
theoretical learning and real-world application. Whether you're a
beginner or a professional looking to upskill Automation, our courses
are tailored to meet diverse learning needs, from mastering the
basics of PLCs, SCADA, HMI, Robotics, Autocad & Eplan programming
to exploring advanced control strategies.<br/><br/>
Join us on a journey to unlock your potential and shape the future of
smart manufacturing and intelligent systems. Together, let's innovate,
automate and lead.

              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <img src="https://cdn.prod.website-files.com/6188a89516ba2d18dfc2dcd4/651144cdf79f97f73b5e1036_Real%20Estate%20Agency%20Automation%20Blog%20Cover-p-1080.webp" width={isSmallScreen ? "300px" : "550px"}/>
             <Typography>Join us on a journey to unlock your potential and shape the future of
smart manufacturing and intelligent systems. Together, let's innovate,
automate and lead.</Typography>
            </Grid>
          </Grid>
        </Container>

        <HomeSlider />
        <PopUp  width={isSmallScreen ? "300px" : "400px"}/>
      </Layout>
    </div>
  );
}

export default Home;
