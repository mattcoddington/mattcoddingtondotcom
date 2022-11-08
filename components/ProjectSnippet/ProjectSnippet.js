import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  height: 488px;
  width: 80%;
  margin: auto;
  margin-bottom: 118px;
  display: flex;
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundColor};
  padding: 60px;
`;

const ProjectSnippet = ({ backgroundColor }) => (
  <Container>
    <Image
      src="/images/project_doxy-me-analytics_thumb.png"
      alt="doxy.me Analytics"
      width={488}
      height={488}
    />
    <ContentContainer backgroundColor={backgroundColor}>
      <div>Headline!</div>
      <div>Role area!</div>
      <hr />
      <div>Summary content~!</div>
      <div>View Project Button!</div>
    </ContentContainer>
  </Container>
);

const defaultProps = {
  backgroundColor: "#000",
};

export default ProjectSnippet;
