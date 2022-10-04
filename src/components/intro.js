import { mdiArrowDownThick } from "@mdi/js";
import Icon from "@mdi/react";
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
      <GreenButton>
        <span>
          <span>Get To Know Me</span>
          <Icon path={mdiArrowDownThick} size={1} />
        </span>
      </GreenButton>
    </BlackSection>
  );
}

export default Intro;
