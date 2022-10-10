import React, { useState, useEffect } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, lazyload } from "@cloudinary/react";
import {
  ProjectsBackground,
  ProjectsHeader,
  MultipleProjectsContainer,
  ProjectContainer,
  ProjectGif,
  ProjectOverlay,
  ProjectName,
  ProjectDescription,
  RepositoryButton,
  LivePreviewButton,
} from "./projects.style";
import projectsAssets from "./projectAssets";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function Projects() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const gifWidth = windowSize.innerWidth / 1.1;
  let overlayAdjust = (gifWidth - 600) / 4;
  if (gifWidth < 600) {
    overlayAdjust = 0;
  }
  if (overlayAdjust > 150) {
    overlayAdjust = 150;
  }

  function overlayStyle(index) {
    if ((index + 1) % 2 !== 0) {
      return { left: `-${overlayAdjust}px` };
    }
    return { right: `-${overlayAdjust}px` };
  }
  function gifStyle(index) {
    if ((index + 1) % 2 !== 0) {
      return {
        maxWidth: "600px",
        right: `-${overlayAdjust}px`,
        position: "relative",
      };
    }
    return {
      maxWidth: "600px",
      left: `-${overlayAdjust}px`,
      position: "relative",
    };
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dzuspsqed",
    },
  });

  return (
    <ProjectsBackground>
      <ProjectsHeader>Projects</ProjectsHeader>
      <MultipleProjectsContainer>
        {projectsAssets.map((project, index) => {
          return (
            <ProjectContainer key={project.gif}>
              <ProjectOverlay style={overlayStyle(index)}>
                <ProjectName>{project.name}</ProjectName>
                <ProjectDescription>{project.description}</ProjectDescription>
                <a href={project.repository}>
                  <RepositoryButton>Repository</RepositoryButton>
                </a>
                <a href={project.livePreview}>
                  <LivePreviewButton>Live Preview</LivePreviewButton>
                </a>
              </ProjectOverlay>
              <AdvancedImage
                cldImg={cld.image(project.gif)}
                plugins={[
                  lazyload({
                    rootMargin: "10px 20px 10px 30px",
                    threshold: 0.25,
                  }),
                  responsive({ steps: 100 }),
                ]}
                width={gifWidth}
                style={gifStyle(index)}
              />
            </ProjectContainer>
          );
        })}
      </MultipleProjectsContainer>
    </ProjectsBackground>
  );
}

export default Projects;
