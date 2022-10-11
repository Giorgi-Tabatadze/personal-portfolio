import styled from "styled-components";
import { BlackSection } from "./intro.style";
import cssvariables from "../cssvariables";

// Change this to white background
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutBackground = styled(BlackSection)`
  background: ${cssvariables.colors.backgroundWhite};
  width: auto;
  height: auto;
`;

const PurpleBlueHeader = styled.h2`
  background: #d148a3;
  background: -webkit-linear-gradient(to right, #d148a3 1%, #3480f5 78%);
  background: -moz-linear-gradient(to right, #d148a3 1%, #3480f5 78%);
  background: linear-gradient(to right, #d148a3 1%, #3480f5 78%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 5vh;
  font-weight: 700;
  margin-top: 4vh;
`;
const GrayText = styled.p`
  color: ${cssvariables.colors.textGray};
  margin: 2vh 10vw;
  text-align: center;
  @media (min-width: 801px) {
    margin: 2vh 50px;
    font-size: 18px;
    text-align: start;
  }
`;
const Container = styled.div`
  @media (min-width: 801px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    animation-duration: 0;
    align-items: center;
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
  overflow-x: hidden;
`;

const TechnologiesContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 100px 100px 100px;
  gap: 3vw;
  margin-top: 3vh;

  @media (min-width: 801px) {
    grid-template-columns: 100px 100px 100px;
    gap: 50px;
    margin-top: 0vh;
  } ;
`;
const Tech = styled.div`
  color: ${cssvariables.colors.textGray};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img`
  width: 10vw;
  @media (min-width: 601px) {
    width: 45px;
  } ;
`;
const LogoText = styled.span`
  text-transform: uppercase;
  font-size: 3vw;
  @media (min-width: 801px) {
    font-size: 18px;
  } ;
`;

// eslint-disable-next-line import/prefer-default-export
export {
  MainContainer,
  AboutBackground,
  PurpleBlueHeader,
  GrayText,
  Container,
  TechnologiesContainer,
  Tech,
  Logo,
  LogoText,
};
