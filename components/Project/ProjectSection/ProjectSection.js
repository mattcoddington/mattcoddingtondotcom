import styled from "styled-components";

import ProjectAside from "./ProjectAside";

const Container = styled.section`
  margin: 110px auto 142px auto;
  max-width: 1400px;
  display: flex;
`;

const ProjectSection = (props) => (
  <Container>
    <ProjectAside {...props}>Aye! ProjectAside!</ProjectAside>ProjectSection!
  </Container>
);

ProjectSection.defaultProps = {
  heading: false,
};

export default ProjectSection;
