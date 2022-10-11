import styled from "styled-components";
import cssvariables from "../cssvariables";
import { BlackSection, GreenButton } from "./intro.style";
import { PurpleBlueHeader } from "./about.style";

const ProjectsBackground = styled(BlackSection)`
  background: ${cssvariables.colors.backgroundBlack};
  height: auto;
  width: auto;
  padding-bottom: 10vh;
`;
const ProjectsHeader = styled(PurpleBlueHeader)`
  background: #99efd7;
  background: -webkit-linear-gradient(to right, #99efd7 0%, #75c1f2 69%);
  background: -moz-linear-gradient(to right, #99efd7 0%, #75c1f2 69%);
  background: linear-gradient(to right, #99efd7 0%, #75c1f2 69%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15vh;
`;

const MultipleProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25vh;
  color: ${cssvariables.colors.mainWhite};
`;

const ProjectContainer = styled.div`
  position: relative;
`;
const ProjectOverlay = styled.div`
  background-color: rgba(10, 15, 37, 0.8);
  width: 50%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
`;
const ProjectName = styled.h3`
  font-size: 21px;
  font-weight: 700;
  margin: 2vh 2vw;
  align-self: start;
  @media (min-width: 801px) {
    font-size: 26px;
  } ;
`;
const ProjectDescription = styled.p`
  align-self: start;
  font-size: 14px;
  margin: 10% 2vw;
  @media (min-width: 801px) {
    font-size: 14px;
    margin-bottom: 20%;
  } ;
`;
const RepositoryButton = styled(GreenButton)`
  margin: 0;
  padding: 10px 0px;
  width: 120px;
  margin-bottom: 15%;
  font-size: 16px;
  height: 6vh;
  @media (min-width: 801px) {
    width: 200px;

    margin-bottom: 30px;
  }
`;
const LivePreviewButton = styled(RepositoryButton)``;

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
  ProjectOverlay,
  ProjectName,
  ProjectDescription,
  RepositoryButton,
  LivePreviewButton,
};
