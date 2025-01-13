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
// Sample data for the cards
const cardData = [
  {
    title: "SCADA Fundamentals and Application Training",
    title2: "Course Overview",
    duration: "1.5 Months",
    keyFeatures: [
      "In-depth knowledge of SCADA systems and their applications",
      "Practical skills in configuring and managing SCADA software",
      "Proficiency in SCADA communication protocols and system integration",
      "Troubleshooting and optimization techniques for SCADA systems",
      "Hands-on project experience in designing and implementing a SCADA solution",
    ],
    description:
      "This 1.5-month course is designed to provide participants with a comprehensive understanding of Programmable Logic Controllers (PLCs). The program covers both the fundamentals and advanced topics in PLC programming, including hardware, configuration, troubleshooting, and system integration. Hands-on practical sessions will equip learners with the skills to design, program, and maintain PLC-based systems used in industrial automation.",
    CourseModules: [
      "Introduction to SCADA Systems -Wonderware Intouch, AB - FactoryTalk View / SIMATIC WinCCS ",
      "SCADA Software and Configuration",
      "SCADA Communication Protocols",
      "Advanced SCADA Features",
      "SCADA System Optimization and Troubleshooting",
      "Final Project and Integration",
    ],
    Eligibility: [
      "Engineers and technicians in the automation industry",
      "Individuals seeking to enter the field of industrial automation and control systems",
      "Those interested in learning about SCADA technology for practical applications",
    ],
    img: scad,
    Certification: "",
  },
  {
    title: "PLC Programming and Automation Essentials",
    title2: "Course Overview",
    duration: "1.5 Months",
    keyFeatures: [],
    description:
      "This 1.5-month course provides a comprehensive introduction to SCADA systems, covering their components, configuration, and communication protocols. Participants will gain hands-on experience in setting up and managing SCADA software, integrating it with PLCs and RTUs, and troubleshooting common issues. The course also explores advanced SCADA features like alarming, trending, and security. By the end of the program, participants will be able to design, implement, and optimize SCADA systems for real-world industrial applications.",
    CourseModules: [
      "Introduction to PLCs - Siemens, Allen Bradley, Mitsubishi / Delta",
      "Advanced PLC Programming Concepts",
      "Troubleshooting and Diagnostic",
      "PLC System Integration and Final Project",
      "Basic Switchgear",
    ],
    Eligibility: [
      "Engineers and technicians interested in industrial automation",
      "Individuals looking to develop practical PLC programming skills",
      "Anyone seeking to advance their knowledge in automation and control systems",
    ],
    img: scad,
    Certification: "",
  },
  {
    title: "Automation Systems with PLC, SCADA & HMI",
    title2: "Course Overview",
    duration: "2 Months",
    keyFeatures: [
      "Project-Oriented Approach",
      "Advanced Automation Techniques",
      "Practical Hands-On Training",
      "Flexible Learning Format",
    ],
    description:
      "This intensive 2-month course is designed for professionals and individuals seeking to enhance their expertise in PLC programming and SCADA system integration. This program includes the study and hands-on experience of 1 Programmable Logic Controller (PLC), 1 Supervisory Control and Data Acquisition (SCADA) system, 1 Human-Machine Interface (HMI), and Project Integration (PI). Additionally, the candidate works on a practical project that integrates these technologies. The program is designed to provide a comprehensive understanding of industrial automation, control systems, and their integration in real-world applications.",
    CourseModules: [
      "Introduction to Advanced PLC Programming -Siemens, Allen Bradley, Mitsubishi / Delta",
      "SCADA System Design and Architecture -Wonderware Intouch, AB - FactoryTalk view / SIMATIC WinCCS",
      "HMI - Delta, Siemens",
      "PLC and SCADA Integration",
      "HMI Development and Integration",
      "Advanced Control Strategies",
      "Project Integration (PI)",
      "Hands-On Project",
      "Troubleshooting and Optimization",
      "Final Assessment",
    ],
    Eligibility: [
      "Bachelor’s Degree in Engineering or Technology (Electrical, Electronics, Mechatronics, Instrumentation, Control Systems, or related fields).",
      "Diploma in Engineering (Electrical, Electronics, Instrumentation, or Mechanical).",
      "Other Technical Qualifications: Candidates with relevant technical or vocational training in automation or industrial control systems are also welcome.",
    ],
    img: SCADA,
    Certification: "",
  },
  {
    title: "Advanced Automation Control Systems & Robotics Fundamentals",
    title2: "Course Overview",
    duration: "3 Months",
    keyFeatures: [
      "Comprehensive Curriculum",
      "Hands-On Training",
      "Industry-Relevant Skills",
      "Practical Exposure",
      "In-Depth Knowledge",
      "Placement Assistance",
    ],
    description:
      "The course encompasses all aspects of Industrial Automation, from basic principles to advanced programming, equipping candidates with the skills needed to meet the evolving demands of the industry. Additionally, upon successful completion, the program provides placement assistance to help candidates secure job opportunities. ",
    CourseModules: [
      "Introduction to Industrial Automation",
      "PLC Programming - Siemens, Allen Bradley, Mitsubishi / Delta",
      "SCADA - Wonderware Intouch, AB - FactoryTalk view / SIMATIC WinCCS",
      "HMI - Delta, Siemens",
      "Advanced Control Techniques",
      "Robotics and IoT in Automation",
      "VFD Programming & Configuration",
      "Autocad",
      "Industrial Cybersecurity and Safety Standards",
      "Troubleshooting and System Optimization",
    ],
    Eligibility: [
      "Bachelor’s Degree in Engineering or Technology (Electrical, Electronics, Mechatronics, Instrumentation, Control Systems, or related fields).",
      "Diploma in Engineering (Electrical, Electronics, Instrumentation, or Mechanical).",
      "Other Technical Qualifications: Candidates with relevant technical or vocational training in automation or industrial control systems are also welcome",
    ],
    Certification:
      "Upon Completion: Candidates will receive a certification in Industrial Automation and Control Systems.",
    img: SCADA,
  },
];

export const CourseMainCard = () => {
  return (
    <Layout>
      <Grid
        size={{
          xs: 12,
          md: 12,
        }}
      >
        <Typography variant="h5" sx={{ color: "black", mt: 3, ml: 5 }}>
          {" "}
          <b>Our Courses: </b>
        </Typography>

        <br />
      </Grid>
      <Grid container sx={{ p: 3 }} spacing={4}>
        {cardData?.map((card, index) => (
          <Grid size={{ xs: 12, md: 3 }}>
            <Card
              sx={{
                height:"500px"
                border:'1px solid red',
                ":hover": { transform: "scale(1.0.1)" },
                transition: "transform 0.5s",
              }}
            >
              <CardMedia
                component="img"
                height="194"
                image={card.img}
                alt={card.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: "black" }}>
                  {" "}
                  <b>Course Name:</b> {card.title}
                </Typography>
                <br />
                <Typography variant="h6" sx={{ color: "black" }}>
                  {" "}
                  <b>Course Duration:</b> {card.duration}
                </Typography>
                <Button
                  component={Link}
                  to="/course-details"
                  state={{ card }} // Pass the card data to the next page
                  variant="contained"
                  color="primary"
                >
                  MORE DETAILS
                </Button>
                {console.log("card", card)}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

     
    </Layout>
  );
};
