import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  min-height: 488px;
  width: 80%;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 118px;
  display: flex;
  box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.25);
  @media (max-width: 1140px) {
    width: 488px;
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};
  padding: 60px;
  box-shadow: inset 1px 0px 12px rgba(0, 0, 0, 0.2);
  @media (min-width: 1140px) {
    height: 488px;
  }
`;

const ProjectTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 53px;
  color: #ffffff;
`;

const Role = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.textColor};
`;

const HR = styled.hr`
  width: 100%;
  border-width: 1px;
  border: 1px solid ${(props) => props.hrColor};
`;

const SummaryContainer = styled.div`
  font-size: 20px;
  padding-top: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Summary = styled.div`
  color: ${(props) => props.textColor};
  padding-bottom: 32px;
`;

const ProjectButton = styled.span`
  text-align: right;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
`;

const ProjectSnippet = ({
  backgroundColor,
  imgURL,
  projectTitle,
  projectRole,
  projectURL,
  projectDescription,
  hrColor,
  textColor,
}) => (
  <Link href={`projects/${projectURL}`}>
    <Container>
      <Image
        src={`/images/${imgURL}`}
        alt={projectTitle}
        width={488}
        height={488}
      />
      <ContentContainer backgroundColor={backgroundColor}>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <Role textColor={textColor}>{projectRole}</Role>
        <HR hrColor={hrColor} />
        <SummaryContainer>
          <Summary textColor={textColor}>{projectDescription}</Summary>
          <ProjectButton>View Project</ProjectButton>
        </SummaryContainer>
      </ContentContainer>
    </Container>
  </Link>
);

ProjectSnippet.defaultProps = {
  backgroundColor: "#000",
  imgURL: "project_doxy-me-analytics_thumb.png",
  projectTitle: "Project Title",
  projectRole: "Project Role",
  projectURL: "deal-driver",
  projectDescription: "Lorem Ipsum",
  hrColor: "#fff",
  textColor: "#fff",
};

export default ProjectSnippet;
