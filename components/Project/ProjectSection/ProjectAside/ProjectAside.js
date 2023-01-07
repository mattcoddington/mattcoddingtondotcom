import styled from "styled-components";

const Container = styled.aside`
  margin-right: 129px;
  max-width: 303px;
`;

const HeadingText = styled.p`
  padding: 0;
  margin: 0;
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  color: #ffffff;
`;

const HeadingPeriod = styled.span`
  color: #ae0e0a;
`;

const HeadingSubtext = styled.p`
  padding: 0;
  margin: 0;
  margin-top: 32px;
  font-family: "Roboto";
  font-style: italic;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #8c8c8c;
`;

const projectHeading = (
  <div>
    <HeadingText>
      Deal Driver<HeadingPeriod>.</HeadingPeriod>
      <HeadingSubtext>
        Guidelines for a low-tech, energy efficient, and environmentally
        sustainable internet
      </HeadingSubtext>
    </HeadingText>
  </div>
);

const ProjectAside = ({ heading }) => (
  <Container>{heading ? projectHeading : <div>Sup bitches!</div>}</Container>
);

export default ProjectAside;
