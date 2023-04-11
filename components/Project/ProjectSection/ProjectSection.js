import styled from "styled-components";

import ProjectAside from "./ProjectAside";

const OuterContainer = styled.div`
  margin: 0 48px 0 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a0a0a;
`;

const Container = styled.section`
  margin: 72px auto 72px auto;
  max-width: 1200px;
  display: flex;
  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 40px;
  color: #c2c2c2;
  p {
    margin-top: 0px;
  }
  strong {
    color: #fff;
  }

  @media (max-width: 1350px) {
    font-size: 18px;
  }
`;

const ProjectSection = ({ content }) =>
  content.map((section, idx) => (
    <OuterContainer {...section} key={idx}>
      <Container>
        {section.aside && <ProjectAside heading={idx === 0} {...section} />}
        <ContentContainer>{section.sectionContent}</ContentContainer>
      </Container>
    </OuterContainer>
  ));

ProjectSection.defaultProps = {
  content: [
    {
      aside: true,
      heading: false,
      sectionTitle: "Lorem",
      sectionSubTitle: "Dolor",
      sectionContent: "Ipsum",
    },
  ],
};

export default ProjectSection;
