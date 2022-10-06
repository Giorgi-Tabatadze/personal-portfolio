import { AnimationOnScroll } from "react-animation-on-scroll";
import { useEffect, useState } from "react";
import {
  AboutBackground,
  PurpleBlueHeader,
  GrayText,
  Container,
  TechnologiesContainer,
  Tech,
  Logo,
  LogoText,
  MainContainer,
} from "./about.style";
import techKnowladge from "./techlogos/techIuse";

import "animate.css/animate.min.css";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function About() {
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

  const ShouldBeAnimated =
    windowSize.innerWidth > 801 ? "" : "animate__fadeInLeft";

  const ShouldBeVisible = windowSize.innerWidth > 801;

  return (
    <MainContainer id="GetToKnowMeScroller">
      <PurpleBlueHeader>About</PurpleBlueHeader>
      <Container>
        <AboutBackground>
          <GrayText>
            Starting from a very young age I was drawn to all things electronic
            be it dissesembling and fixing the old nintendo or trying to build
            my own electric motor from scratch. Computers and internet would
            catch the most of my childhood curiosity.
          </GrayText>
          <GrayText>
            It all started when at the age of five I got my first computer. I
            have been spending most of my free time in front of computer, having
            more and more fun as I have been learning.
          </GrayText>
          <GrayText>
            Throught years I have developed a feeling that no computer issue
            exists that I could not find a solution for online.
          </GrayText>
          <GrayText>
            I have taught myself web development and I am learning more and more
            every day! My goal is to build products that are going to be used by
            millions or billions of people around the world. I am sure that this
            personal portfolio will be improving and displaying more than just
            beginner projects.
          </GrayText>
        </AboutBackground>

        <AnimationOnScroll
          animateIn={ShouldBeAnimated}
          animateOnce="true"
          animatePreScroll="true"
          initiallyVisible={ShouldBeVisible}
        >
          <TechnologiesContainer>
            {techKnowladge.map((tech) => {
              return (
                <Tech>
                  <Logo src={tech.logo} />
                  <LogoText>{tech.text}</LogoText>
                </Tech>
              );
            })}
          </TechnologiesContainer>
        </AnimationOnScroll>
      </Container>
    </MainContainer>
  );
}

export default About;
