import React, { Suspense, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Particle from "../Particle";
import projectsData from "../../data/projectsData.json";

// Import all project images
import tastyBites from "../../Assets/Projects/tastyBites.png";
import carouselAnimation from "../../Assets/Projects/carouselAnimation.png";
import jordanShoes from "../../Assets/Projects/jordanShoes.png";
import mentorPlus from "../../Assets/Projects/mentorPlus.png";
import apolloHospital from "../../Assets/Projects/apolloHospital.png";
import hawkstack from "../../Assets/Projects/hawkstack.png";
import jrjewels from "../../Assets/Projects/jrjewels.png";
import testimonialDesign from "../../Assets/Projects/testimonialDesign.png";
import iphoneDesign from "../../Assets/Projects/iphoneDesign.png";
import airpodsDesign from "../../Assets/Projects/airpodsDesign.png";
import airConditioning from "../../Assets/Projects/airConditioning.png";
import edullem from "../../Assets/Projects/edullem.png";
const ProjectCard = React.lazy(() => import("./ProjectCards"));

// Map image names to their imports
const imageMap = {
  tastyBites,
  carouselAnimation,
  jordanShoes,
  mentorPlus,
  apolloHospital,
  hawkstack,
  jrjewels,
  testimonialDesign,
  iphoneDesign,
  airpodsDesign,
  airConditioning,
  edullem
};

function Projects() {
  const [tabValue, setTabValue] = useState("1");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Box
          sx={{
            width: "100%",
            mt: 3,
            "& .MuiTabs-root": {
              borderBottom: "2px solid rgba(200, 100, 255, 0.3)",
            },
            "& .MuiTab-root": {
              color: "white",
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "capitalize",
              "&.Mui-selected": {
                color: "#c770f0",
              },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#c770f0",
            },
          }}
        >
          <TabContext value={tabValue}>
            <TabList onChange={handleTabChange} aria-label="Project categories">
              {projectsData.tabs.map((tab) => (
                <Tab key={tab.id} label={tab.label} value={tab.id} />
              ))}
            </TabList>

            {projectsData.tabs.map((tab) => {
              const tabProjects = projectsData.projects.filter(
                (project) => project.tabId === tab.id
              );
              return (
                <TabPanel key={tab.id} value={tab.id} sx={{ p: 3 }}>
                  <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {tabProjects.map((project) => (
                      <Col key={project.id} md={4} className="project-card">
                        <Suspense fallback={<div>Loading...</div>}>
                          <ProjectCard
                            imgPath={imageMap[project.imgPath]}
                            isBlog={project.isBlog}
                            title={project.title}
                            description={project.description}
                            demoLink={project.demoLink}
                          />
                        </Suspense>
                      </Col>
                    ))}
                  </Row>
                </TabPanel>
              );
            })}
          </TabContext>
        </Box>
      </Container>
    </Container>
  );
}

export default Projects;
