import styled from "styled-components";

import ProjectAside from "./ProjectAside";

const Container = styled.section`
  margin: 110px auto 142px auto;
  max-width: 1200px;
  display: flex;
`;

const ContentContainer = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 40px;
  color: #dcdcdc;
  p {
    margin-top: 0px;
  }
`;

const ProjectSection = ({ content }) =>
  content.map((section, idx) => (
    <Container key={idx}>
      <ProjectAside {...section} />
      <ContentContainer>{section.sectionContent}</ContentContainer>
    </Container>
  ));

ProjectSection.defaultProps = {
  content: [
    {
      sectionTitle: "Lorem",
      sectionSubTitle: "Dolor",
      sectionContent: "Ipsum",
    },
  ],
};

export default ProjectSection;
