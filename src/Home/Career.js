import React from "react";
import Layout from "../Layout";
import {
  Container,
  Grid2 as Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import img from "../Images/IMG-20250213-WA0001.jpg"
import img2 from "../Images/IMG-20250213-WA0002.jpg"

// Sample data for the cards
const cardData = [
  {
    title: "Automation Engineer",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHatMVN2P514QkUTrNb_NWC1hDDG3adZpOPg&s",
  },
  {
    title: "PLC Programmer",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHatMVN2P514QkUTrNb_NWC1hDDG3adZpOPg&s",
  },
  {
    title: "SCADA Engineer",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHatMVN2P514QkUTrNb_NWC1hDDG3adZpOPg&s",
  },
  {
    title: "SCADA Engineer",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHatMVN2P514QkUTrNb_NWC1hDDG3adZpOPg&s",
  },
  {
    title: "Robotics Engineer / Robotics Systems Integrator",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHatMVN2P514QkUTrNb_NWC1hDDG3adZpOPg&s",
  },
  {
    title: "Control Systems Engineer",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHatMVN2P514QkUTrNb_NWC1hDDG3adZpOPg&s",
  },
  {
    title: "Control Systems Engineer",

    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHatMVN2P514QkUTrNb_NWC1hDDG3adZpOPg&s",
  },
];
export const Career = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

 
  return (
    <Layout>
      <Container
        maxWidth="lg"
        sx={{
          mt: 6,
          mb: 6,
          backgroundColor: "white",
          p: 4,
          color: "blue",
          borderRadius: 2,
          border: 1,
          borderColor: "grey",
        }}
      >
        <Grid container spacing={5}>
          {/* Vision Section */}
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Typography variant="h5"> Career Opportunities: </Typography>
            <Typography>
              Graduates of our program can pursue roles such as:
            </Typography>
            <br />
            <ul>
              <li>
                <Typography variant="h7"> Automation Engineer </Typography>
              </li>
              <li>
                <Typography variant="h7"> PLC Programmer </Typography>
              </li>
              <li>
                <Typography variant="h7"> SCADA Engineer </Typography>
              </li>
              <li>
                <Typography variant="h7">
                  Robotics Engineer / Robotics Systems Integrator
                </Typography>
              </li>
              <li>
                <Typography variant="h7"> Control Systems Engineer </Typography>
              </li>
              <li>
                <Typography variant="h7">
                  Maintenance Engineer(Automation Systems)
                </Typography>
              </li>
              <li>
                <Typography variant="h7">
                  Control Panel Designer(AutoCAD)
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <img
         //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLpZyqWalCZnb0xUGCjWwHvqWyPrCbtkskQ&s"
src={img}
              // width="550px"
              width={isSmallScreen ? "300px" : "550px"}
            />
          </Grid>
        </Grid>
      </Container>

      {/* <Grid
        container
        spacing={3}
        sx={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/5e/cf/6b/5ecf6bd8170f61a20560a7332d8c7b91.jpg)", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: 4,
        }}
      >
        <Grid
          size={{
            xs: 12,
            md: 12,
          }}
        >
          <Typography variant="h4" sx={{color:'white'}}> Career Opportunities: </Typography>
          <Typography sx={{color:'white'}}>
            Graduates of our program can pursue roles such as:
          </Typography>
          <br />
        </Grid>
        {cardData.map((card, index) => (
          <Grid
            size={{
              xs: 12,
              md: 3,
            }}
            key={index}
          >
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={card.img}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}

      <Container
        maxWidth="lg"
        sx={{
          mt: 6,
          mb: 6,
          backgroundColor: "darkBlue",
          p: 4,
          color: "white",
          borderRadius: 2,
        }}
      >
        <Grid container spacing={5}>
          {/* Vision Section */}
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <img
              //src="https://www.haworth.com/content/dam/haworth-com/global/about/careers/intl/haworth-career-group-team-cut.jpg"
              src={img2}
              // width="550px"
              width={isSmallScreen ? "300px" : "550px"}
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Typography variant="h5"> Placement Process: </Typography> <br />
            <ul>
              <li>
                <Typography variant="h7">
                  <b> Skill Development: </b> hands-on experience with
                  industry-standard tools and technologies.
                </Typography>
              </li>
              <li>
                <Typography variant="h7">
                  <b> Personalized Support: </b> From resume building to
                  interview preparation, our placement team offers dedicated
                  support to ensure your success.
                </Typography>
              </li>
              <li>
                <Typography variant="h7">
                  <b> Industry Connections: </b> We connect you directly with
                  top companies looking for skilled professionals in automation.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
