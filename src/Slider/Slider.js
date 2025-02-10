import React from "react";
import Slider from "react-slick";
import { Container, Typography, Box } from "@mui/material";

// import coma from '../../Assets/Images/coma.png'; // Comma image import
import { Star } from "@mui/icons-material"; // Import Star icon
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: " Industry expertise :",

    message:
      " Our instructors have years of experience in automation and are experts in their field."

  },
  {
    name: "Hands-on training : ",

    message:
      "Our courses include hands-on training and practical exercises to help our students gain real-world experience",
  },
  {
    name: "- Flexible learning options :",

    message:
      "We offer flexible learning options, including online and in-person training, to fit our students' busy schedules.
",
  },
];

const TestimonialCard = ({ name, title, message, image, rating }) => {
  const cardStyle = {
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "1200px",
    padding: "50px",
    textAlign: "left",
    transition: "transform 0.3s ease",
    margin: "5px",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    justifyContent: "space-between", // Ensures the comma is on the opposite side of the image
  };

  const imageStyle = {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    marginRight: "5px",
  };

  const nameStyle = {
    color: "#644222", // Color value should be a string
    fontSize: "20px", // Use camelCase for CSS property names
    fontWeight: 700, // fontWeight is a number, no quotes
    // marginBottom: '5px', // Use camelCase and string values
    // marginTop: '5px', // Same here
  };

  const titleStyle = {
    //color: "#644222", // Color value should be a string

    fontSize: "1rem",
    marginTop: "5px",
  };

  const comaImageStyle = {
    width: "30px",
    height: "30px",
    marginLeft: "10px",
  };

  const messageStyle = {
    color: "#555",
    marginTop: "20px",
    padding: "2px",
  };

  const ratingStyle = {
    marginBottom: "10px",
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        
        <div>
          {/* Client Name and Title */}
          <h3 style={nameStyle}>{name}</h3>
          <p style={titleStyle}>{title}</p>
        </div>
        {/* Comma image placed on the right */}
        {/* <img src={coma} alt="comma" style={comaImageStyle} /> */}
      </div>

      {/* Rating above the message */}
      

      {/* Review Message */}
      <p style={messageStyle}>"{message}"</p>
    </div>
  );
};

const Testimonials = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at once
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
    <Box
      sx={{
        py: 10,
        //backgroundImage: `url(${testimonial})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            color: "#101010",
            fontFamily: "Jost, sans-serif",
            fontStyle: "normal",
            fontWeight: 600,
            marginTop: 0,
            textTransform: "normal",
            marginBottom: "15px",
          }}
        >
          Why Choose Us ?
        </Typography>
        {/*  
        <Typography
          variant="body1"
          align="center"
          paragraph
          sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
        >
          Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel.
        </Typography> */}

        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;
