import React, { Suspense, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleButtonChange = (newValue) => {
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

        <Box sx={{ width: "100%", mt: 3 }}>
          {isMobile ? (
            // Mobile: Button Group View
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <ButtonGroup
                variant="outlined"
                fullWidth
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  "& .MuiButton-root": {
                    flex: "1 1 calc(50% - 8px)",
                    minWidth: "120px",
                    color: "white",
                    borderColor: "rgba(200, 100, 255, 0.5)",
                    textTransform: "capitalize",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "rgba(199, 112, 240, 0.1)",
                      borderColor: "#c770f0",
                    },
                  },
                }}
              >
                {projectsData.tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    onClick={() => handleButtonChange(tab.id)}
                    sx={{
                      backgroundColor:
                        tabValue === tab.id
                          ? "#c770f0"
                          : "rgba(199, 112, 240, 0.05)",
                      borderColor: tabValue === tab.id ? "#c770f0" : "rgba(200, 100, 255, 0.5)",
                      color: tabValue === tab.id ? "white" : "rgba(255, 255, 255, 0.8)",
                      "&:hover": {
                        backgroundColor:
                          tabValue === tab.id ? "#b562db" : "rgba(199, 112, 240, 0.15)",
                      },
                    }}
                  >
                    {tab.label}
                  </Button>
                ))}
              </ButtonGroup>

              {projectsData.tabs.map((tab) => {
                const tabProjects = projectsData.projects.filter(
                  (project) => project.tabId === tab.id
                );
                return (
                  <Box key={tab.id} sx={{ display: tabValue === tab.id ? "block" : "none" }}>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                      {tabProjects.map((project) => (
                        <Col key={project.id} xs={12} className="project-card" sx={{ p: 1 }}>
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
                  </Box>
                );
              })}
            </Box>
          ) : (
            // Desktop: Tab View
            <Box
              sx={{
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
          )}
        </Box>
      </Container>
    </Container>
  );
}

export default Projects;
