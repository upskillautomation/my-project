import React from "react";
import Layout from "../Layout";
import {
  Button,
  Grid2 as Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import scad from "../Images/scad.png";
import SCADA from "../Images/scada-security.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Course = () => {
  const location = useLocation();
  const { card } = location.state || {};
  return (
    <Layout>
      <Container maxWidth="md">
        <Grid
          size={{
            xs: 12,
            md: 12,
          }}
        >
          <Typography variant="h5" sx={{ color: "black", mt: 3, ml: 5 }}>
            {" "}
            <b>Course Details: </b>
          </Typography>

          <br />
        </Grid>
        <Grid
          container
          spacing={3}
          sx={{
            //backgroundImage:
            //  "url(https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?cs=srgb&dl=pexels-nickcollins-1293120.jpg&fm=jpg)", // Replace with your image URL
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
            <Card
              elevation={5}
              sx={{
                maxWidth: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "1px solid blue",
              }}
            >
              <CardMedia
                component="img"
                height="350"
                image={card.img}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <b> {card.title}</b>
                </Typography>
                <Typography gutterBottom variant="h6" component="div" >
                 <b> {card.title2}</b>
                </Typography>
                <Typography variant="body2" >
                  {card.description}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ mt: 2 }}
                >
                  <b>Duration : 
                  {card.duration}</b>
                </Typography>
                {card?.keyFeatures.length ? (
                  <Typography gutterBottom variant="h6" component="div">
                   <b> Key Features: </b>
                  </Typography>
                ) : null}

                {card?.keyFeatures?.map((keyFeature, index) => (
                  <>
                    <ul>
                      <li>{keyFeature}</li>
                    </ul>
                  </>
                ))}

                <Typography gutterBottom variant="h6" component="div">
                  <b> Course Modules : </b>
                </Typography>
                {card?.CourseModules?.map((keyFeature, index) => (
                  <>
                    <ul>
                      <li>{keyFeature}</li>
                    </ul>
                  </>
                ))}

                <Typography gutterBottom variant="h6" component="div">
                  <b> Eligibility : </b>
                </Typography>
                {card?.Eligibility?.map((keyFeature, index) => (
                  <>
                    <ul>
                      <li>{keyFeature}</li>
                    </ul>
                  </>
                ))}

                {card?.keyFeatures.length ? (
                  <Typography gutterBottom variant="h6" component="div">
                    <b>Certification:</b> {card?.Certification}
                  </Typography>
                ) : null}
              </CardContent>
              <Grid container sx={{ p: 3 }} spacing={3}>
          <Grid
            size={{ xs: 12, md: 12 }}
            sx={{ display: "flex", justifyContent: "end", mt: -1,  }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/course"
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
          </Grid>
        </Grid>
            </Card>

            
          </Grid>
        </Grid>
        
      </Container>
    </Layout>
  );
};
