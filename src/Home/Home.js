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

function Home() {
  
  const sliderSettings = {
    dots: true,
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
                <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                  Vision:
                </Typography>
                <Typography variant="body1">
                  To become the global leader in PLCs,SCADA,HMI,Robotics
                  ,Autocad & Eplan education, fostering a new generation of
                  automation experts who revolutionize industries with
                  sustainable, scalable, and cuttingedge control technologies.
                </Typography>
              </Grid>

              {/* Mission Section */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                  Mission:
                </Typography>
                <Typography variant="body1">
                  To empower learners with the knowledge and skills to design,
                  program, and implement efficient and innovative industrial
                  automation solutions using PLCs,SCADA,HMI,Robotics ,Autocad &
                  Eplan driving the future of smart manufacturing and
                  intelligent systems.
                </Typography>
              </Grid>
            </Grid>
        </Container>

        <Container maxWidth="lg" sx={{ mt: 6, backgroundColor: "darkBlue" , p:4, color:'white', borderRadius: 2}}>
          <Grid container spacing={5}>
            {/* Vision Section */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
                About Us:
              </Typography>
              <Typography variant="body1">
                At PLCs,SCADA,HMI,Robotics ,Autocad & Eplan Course program, we
                are passionate about empowering individuals and organizations to
                thrive in the era of Industry. <br />
                <br />
                Our comprehensive PLCs,SCADA,HMI,Robotics ,Autocad & Eplan
                training programs are designed to provide hands-on experience
                and in-depth knowledge in industrial automation and control
                systems.
                <br />
                <br />
                With a team of seasoned automation experts and educators, we aim
                to bridge the gap between theoretical learning and real-world
                application.
                <br />
                <br /> Whether you're a beginner or a professional looking to
                upskill, our courses are tailored to meet diverse learning
                needs, from mastering the basics of PLCs,SCADA,HMI,Robotics
                ,Autocad & Eplan programming to exploring advanced control
                strategies. Join us on a journey to unlock your potential and
                shape the future of smart manufacturing and intelligent systems.
                Together, let's innovate, automate, and lead.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <img src="https://cdn.prod.website-files.com/6188a89516ba2d18dfc2dcd4/651144cdf79f97f73b5e1036_Real%20Estate%20Agency%20Automation%20Blog%20Cover-p-1080.webp" width="400px"/>
            </Grid>
          </Grid>
        </Container>

        <HomeSlider />
        <PopUp/>
      </Layout>
    </div>
  );
}

export default Home;
