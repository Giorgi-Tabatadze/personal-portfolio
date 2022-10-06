import { mdiArrowDownThick } from "@mdi/js";
import Icon from "@mdi/react";
import ScrollIntoView from "react-scroll-into-view";
import {
  BlackSection,
  GreenButton,
  HeaderGray,
  HeaderWhite,
} from "./intro.style";

function Intro() {
  return (
    <BlackSection>
      <HeaderWhite>
        Hello! <br /> My name is George
      </HeaderWhite>
      <HeaderGray>I am a Front End Developer </HeaderGray>
      <ScrollIntoView selector="#GetToKnowMeScroller">
        <GreenButton>
          <span>
            <span>Get To Know Me</span>
            <Icon path={mdiArrowDownThick} size={1} />
          </span>
        </GreenButton>
      </ScrollIntoView>
    </BlackSection>
  );
}

export default Intro;
