import React from "react";
import { Container, Typography, Box, Grid2 as Grid, Card, CardContent, List, ListItem, ListItemText, Divider } from "@mui/material";
import Layout from "../Layout";
const WebDevelopmentCourse = () => {
  return (
    <Layout>
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{color:"#880e4f", fontWeight:500}}>
        Web Development Course
      </Typography>

      <Typography variant="h4" gutterBottom>
        Duration: 2 Months
      </Typography>
      <Typography variant="h6" paragraph>
        This course is designed for absolute beginners to help them gain foundational knowledge in modern web development. By the end of the program, students will be able to build responsive and interactive websites using HTML, CSS, JavaScript, and React.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom>
        Course Syllabus
      </Typography>

      <Grid container spacing={4}>
        <Grid size={{xs:12, md:6}}>
          <Card variant="outlined" sx={{backgroundColor:'#fff0f5'}}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Month 1: Foundations</Typography>
              <List dense>
                <ListItem><ListItemText primary="Week 1: HTML Basics & Structure" /></ListItem>
                <ListItem><ListItemText primary="Week 2: CSS Fundamentals & Styling" /></ListItem>
                <ListItem><ListItemText primary="Week 3: Responsive Design with Bootstrap" /></ListItem>
                <ListItem><ListItemText primary="Week 4: Intro to JavaScript" /></ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{xs:12, md:6}} sx={{backgroundColor:'#fff0f5'}}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>Month 2: Advanced Topics</Typography>
              <List dense>
                <ListItem><ListItemText primary="Week 5: DOM Manipulation & Events" /></ListItem>
                <ListItem><ListItemText primary="Week 6: JavaScript Projects" /></ListItem>
                <ListItem><ListItemText primary="Week 7: React JS Basics" /></ListItem>
                <ListItem><ListItemText primary="Week 8: Building a React Project" /></ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom>
        What You'll Learn
      </Typography>
      <List dense>
        <ListItem><ListItemText primary="How to structure websites using semantic HTML" /></ListItem>
        <ListItem><ListItemText primary="How to style with CSS and modern layout systems (Flexbox, Grid)" /></ListItem>
        <ListItem><ListItemText primary="How to make websites mobile responsive using Bootstrap" /></ListItem>
        <ListItem><ListItemText primary="How to write interactive features using JavaScript" /></ListItem>
        <ListItem><ListItemText primary="How to build reusable components in React JS" /></ListItem>
      </List>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" gutterBottom>
        Who Can Join?
      </Typography>
      <Typography variant="h6" paragraph>
        This course is perfect for school/college students, job seekers, working professionals, and anyone interested in learning how to build websites from scratch.
      </Typography>

      
      
    </Container>
    </Layout>
  );
};

export default WebDevelopmentCourse;
