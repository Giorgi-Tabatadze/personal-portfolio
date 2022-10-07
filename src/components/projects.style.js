import styled from "styled-components";
import cssvariables from "../cssvariables";
import { BlackSection } from "./intro.style";
import { PurpleBlueHeader } from "./about.style";

const ProjectsBackground = styled(BlackSection)`
  background: ${cssvariables.colors.backgroundBlack};
  height: auto;
`;
const ProjectsHeader = styled(PurpleBlueHeader)`
  background: #99efd7;
  background: -webkit-linear-gradient(to right, #99efd7 0%, #75c1f2 69%);
  background: -moz-linear-gradient(to right, #99efd7 0%, #75c1f2 69%);
  background: linear-gradient(to right, #99efd7 0%, #75c1f2 69%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MultipleProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectContainer = styled.div`
  position: relative;
`;
const ProjectGif = styled.img`
  width: 50vw;
`;

// eslint-disable-next-line import/prefer-default-export
export {
  ProjectsBackground,
  ProjectsHeader,
  MultipleProjectsContainer,
  ProjectContainer,
  ProjectGif,
};
