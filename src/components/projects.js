import React, { useState, useEffect } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, lazyload } from "@cloudinary/react";
import {
  ProjectsBackground,
  ProjectsHeader,
  MultipleProjectsContainer,
  ProjectContainer,
  ProjectGif,
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

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dzuspsqed",
    },
  });

  return (
    <ProjectsBackground>
      <ProjectsHeader>Projects</ProjectsHeader>
      <MultipleProjectsContainer>
        {projectsAssets.map((project) => {
          return (
            <ProjectContainer key={project.gif}>
              <AdvancedImage
                cldImg={cld.image(project.gif)}
                plugins={[
                  lazyload({
                    rootMargin: "10px 20px 10px 30px",
                    threshold: 0.25,
                  }),
                  responsive({ steps: 100 }),
                ]}
                width={windowSize.innerWidth / 2}
                style={{ maxWidth: "600px" }}
              />
            </ProjectContainer>
          );
        })}
      </MultipleProjectsContainer>
    </ProjectsBackground>
  );
}

export default Projects;
