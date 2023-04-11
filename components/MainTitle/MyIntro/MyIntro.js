import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HiThere = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #7e6cb2;
  width: 100%;
  @media (max-width: 1250px) {
    text-align: center;
  }
  @media (max-width: 760px) {
    font-size: 24px;
  }
`;

const NamePitchContainer = styled.div`
  width: 1108px;
  display: flex;
  align-items: center;
  @media (min-width: 1250px) {
    > * {
      margin-right: 40px;
    }
    > :last-child {
      margin-right: 0px;
    }
  }
  @media (max-width: 1250px) {
    width: auto;
    margin: 0 48px 0 48px;
    flex-direction: column;
  }
`;

const Divider = styled.div`
  width: 64px;
  height: 0px;
  border: 1px solid #332e69;
  transform: rotate(90deg);
  @media (max-width: 1250px) {
    border: 0px;
    height: 48px;
    transform: rotate(-90deg);
  }
  @media (max-width: 760px) {
    height: 32px;
  }
`;

const MyName = styled.div`
  white-space: nowrap;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 75px;
  color: #fff;
  @media (max-width: 760px) {
    font-size: 48px;
  }
`;

const ElevatorPitch = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #c7baed;
  @media (max-width: 1250px) {
    max-width: 600px;
    text-align: center;
  }
  @media (max-width: 760px) {
    font-size: 18px;
  }
`;

const MyIntro = () => (
  <Container>
    <HiThere>Hi there, I'm</HiThere>
    <NamePitchContainer>
      <MyName>Matt Coddington</MyName>
      <Divider />
      <ElevatorPitch>
        I'm a Senior UX/UI Designer with 16 years of experience making sweet
        apps for web and mobile
      </ElevatorPitch>
    </NamePitchContainer>
  </Container>
);

export default MyIntro;
