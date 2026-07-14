import React from "react";
import {
  Container,
  Typography,
  Grid2 as Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Layout from "../Layout";

const month1 = [
  "HTML5 Basics & Semantic Elements",
  "CSS3 Fundamentals",
  "Flexbox & CSS Grid",
  "Responsive Design using Bootstrap",
];

const month2 = [
  "JavaScript ES6 Fundamentals",
  "DOM Manipulation & Events",
  "React JS Components & Props",
  "Build & Deploy React Project",
];

const learn = [
  "Create responsive websites",
  "Write clean HTML & CSS",
  "JavaScript Programming",
  "Bootstrap Framework",
  "React JS Fundamentals",
  "Real-world Project Development",
];

const WebDevelopmentCourse = () => {
  return (
    <Layout>
      <Box
        sx={{
          background: "linear-gradient(to right,#880e4f,#c2185b)",
          color: "#fff",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold">
            Web Development Course
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Duration : 2 Months
          </Typography>

          <Typography
            sx={{
              maxWidth: 800,
              mx: "auto",
              mt: 3,
              opacity: 0.9,
            }}
          >
            Learn HTML, CSS, JavaScript, Bootstrap and React JS from
            scratch and become a professional Front-End Developer by
            building real-world projects.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Course Syllabus
        </Typography>

        <Grid container spacing={4} mt={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={5}
              sx={{
                height: "100%",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  color="primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  Month 1 - Foundation
                </Typography>

                <List>
                  {month1.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>

                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              elevation={5}
              sx={{
                height: "100%",
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  color="primary"
                  fontWeight="bold"
                  gutterBottom
                >
                  Month 2 - Advanced
                </Typography>

                <List>
                  {month2.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>

                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          What You'll Learn
        </Typography>

        <Grid container spacing={3} mt={2}>
          {learn.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  textAlign: "center",
                  transition: ".3s",
                  "&:hover": {
                    bgcolor: "#fce4ec",
                    transform: "scale(1.03)",
                  },
                }}
              >
                <CheckCircleIcon
                  color="success"
                  sx={{ fontSize: 40 }}
                />

                <Typography mt={2}>{item}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Card
          elevation={4}
          sx={{
            borderRadius: 3,
            p: 3,
            bgcolor: "#fafafa",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            fontWeight="bold"
            color="primary"
          >
            Who Can Join?
          </Typography>

          <Typography variant="h6">
            ✔ School Students
          </Typography>

          <Typography variant="h6">
            ✔ Diploma & Engineering Students
          </Typography>

          <Typography variant="h6">
            ✔ Job Seekers
          </Typography>

          <Typography variant="h6">
            ✔ Working Professionals
          </Typography>

          <Typography variant="h6">
            ✔ Anyone Interested in Web Development
          </Typography>
        </Card>
      </Container>
    </Layout>
  );
};

export default WebDevelopmentCourse;
