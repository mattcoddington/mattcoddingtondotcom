import styled from "styled-components";

import Image from "next/image";

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  > :first-child {
    margin-bottom: 32px;
  }
`;

const ContactInfo = () => (
  <Container>
    <Image
      src="/images/contact-email.svg"
      alt="mattcoddington [at] gmail [dot] com"
      width={445}
      height={106}
    />
    <Image
      src="/images/contact-phone.svg"
      alt="864 [dot] 684 [dot] 6587"
      width={290}
      height={106}
    />
  </Container>
);

export default ContactInfo;
