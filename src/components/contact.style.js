import styled from "styled-components";
import cssvariables from "../cssvariables";
import { BlackSection } from "./intro.style";
import { ProjectsHeader, RepositoryButton } from "./projects.style";

const ContactUsBackground = styled(BlackSection)`
  background: ${cssvariables.colors.backgroundBlack};
  width: auto;
  height: auto;
  color: ${cssvariables.colors.mainWhite};
`;

const ContactsHeader = styled(ProjectsHeader)`
  margin-bottom: 7vh;
`;

const ContactDescription = styled.p`
  width: 80vw;
  max-width: 600px;
  margin-bottom: 7vh;
  font-size: 14px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 14px;
`;

const Name = styled.input`
  background-color: #292c35;
  width: 80vw;
  color: ${cssvariables.colors.mainWhite};
  padding: 10px 5px;
  max-width: 600px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;

  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);

    border: 1px solid rgba(81, 203, 238, 1);
  }
`;

const Email = styled(Name)``;

const Message = styled.textarea`
  resize: none;
  background-color: #292c35;
  color: ${cssvariables.colors.mainWhite};
  width: 80vw;
  border: 0;
  padding: 10px 5px;
  max-width: 600px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);

    border: 1px solid rgba(81, 203, 238, 1);
  }
`;

const SubmitContainer = styled.div`
  width: 80vw;

  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 600px;
`;

const ContactSubmit = styled(RepositoryButton)`
  margin-left: auto;
  background-color: ${(props) =>
    props.loading
      ? `${cssvariables.colors.mainGray}`
      : `${cssvariables.colors.buttonsGreen}`};
`;

const ResponceMessage = styled.span`
  font-size: 12px;
  color: ${cssvariables.colors.buttonsGreen};
`;

export {
  ContactUsBackground,
  ContactsHeader,
  ContactDescription,
  ContactForm,
  Name,
  Email,
  Message,
  SubmitContainer,
  ContactSubmit,
  ResponceMessage,
};
