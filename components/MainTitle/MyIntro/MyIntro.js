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
`;

const NamePitchContainer = styled.div`
  width: 1108px;
  display: flex;
  align-items: center;
  > * {
    margin-right: 40px;
  }
  > :last-child {
    margin-right: 0px;
  }
`;

const Divider = styled.div`
  width: 64px;
  height: 0px;
  border: 1px solid rgba(28, 21, 37, 0.2);
  transform: rotate(90deg);
`;

const MyName = styled.div`
  white-space: nowrap;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 75px;
  color: #1c1525;
`;

const ElevatorPitch = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #50475b;
`;

const MyIntro = () => (
  <Container>
    <HiThere>Hi there, I'm</HiThere>
    <NamePitchContainer>
      <MyName>Matt Coddington</MyName>
      <Divider />
      <ElevatorPitch>
        I'm a Senior UX/UI Designer with 12 years of experience making sweet
        apps for web and mobile
      </ElevatorPitch>
    </NamePitchContainer>
  </Container>
);

export default MyIntro;
