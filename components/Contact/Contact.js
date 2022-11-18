import styled from "styled-components";

import ContactInfo from "../ContactInfo";

const Container = styled.div`
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

const Contact = () => (
  <Container>
    <FormContainer>
      Drop me a line
      <br />
      <input />
      <br />
      <input />
      <br />
      <textarea />
      <br />
      <button>Send message </button>
    </FormContainer>
    <ContactInfo />
  </Container>
);

export default Contact;
