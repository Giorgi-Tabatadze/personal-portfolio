/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";
import cssvariables from "../cssvariables";

const fadeInUpAnimation = keyframes`${fadeInDown}`;

const BlackSection = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(0, 45, 103);
  background: -moz-linear-gradient(
    141deg,
    rgba(0, 45, 103, 1) 0%,
    rgba(5, 25, 58, 1) 11%,
    rgba(8, 15, 36, 1) 19%,
    rgba(9, 15, 37, 1) 34%,
    rgba(12, 16, 38, 1) 71%,
    rgba(57, 29, 66, 1) 100%
  );
  background: -webkit-linear-gradient(
    141deg,
    rgba(0, 45, 103, 1) 0%,
    rgba(5, 25, 58, 1) 11%,
    rgba(8, 15, 36, 1) 19%,
    rgba(9, 15, 37, 1) 34%,
    rgba(12, 16, 38, 1) 71%,
    rgba(57, 29, 66, 1) 100%
  );
  background: linear-gradient(
    141deg,
    rgba(0, 45, 103, 1) 0%,
    rgba(5, 25, 58, 1) 11%,
    rgba(8, 15, 36, 1) 19%,
    rgba(9, 15, 37, 1) 34%,
    rgba(12, 16, 38, 1) 71%,
    rgba(57, 29, 66, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#002d67",endColorstr="#391d42",GradientType=1);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const HeaderWhite = styled.h1`
  color: ${cssvariables.colors.mainWhite};
  text-align: center;
  font-size: 3.5vh;
  font-weight: 500;
  margin-top: 40vh;
  margin-bottom: 2vh;
`;
const HeaderGray = styled.h2`
  color: ${cssvariables.colors.mainGray};
  text-align: center;
  font-size: 2.5vh;
`;

const GreenButton = styled.button`
  padding: 0vh 25vw;
  background-color: ${cssvariables.colors.buttonsGreen};
  color: ${cssvariables.colors.mainWhite};
  border: 0;
  margin-top: 15vh;
  border-radius: 10px;
  font-size: 2vh;
  &:hover {
    cursor: pointer;
  }
  box-sizing: border-box;
  &:active {
    box-shadow: 0px 0px 0px 20px ${cssvariables.colors.backgroundBlack} inset;
    border: 2px solid ${cssvariables.colors.buttonsGreen};
    box-sizing: border-box;
  }
  span {
    display: flex;
    align-items: center;
    gap: 2vw;
  }
  height: 5vh;
  @media (min-width: 801px) {
    padding: 0vh 10vw;
    span {
      gap: 1vw;
    }
  }
`;

export { BlackSection, HeaderWhite, HeaderGray, GreenButton };
