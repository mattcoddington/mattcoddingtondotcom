import styled from "styled-components";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Container = styled.section`
  display: flex;
  padding: 130px;
  background: #181723;
`;

const FormContainer = styled.div`
  width: 50%;
  padding: 64px 80px 64px 80px;
  margin-right: 112px;
  background: #222030;
  box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.25);
`;

const FormHeadline = styled.h3`
  padding: 0px;
  margin: 0px 0px 64px 0px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
`;

const Contact = () => (
  <Container>
    <FormContainer>
      <FormHeadline>Drop me a line</FormHeadline>
      <ContactForm />
    </FormContainer>
    <ContactInfo />
  </Container>
);

export default Contact;
