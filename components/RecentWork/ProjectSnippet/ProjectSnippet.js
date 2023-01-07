import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

const Container = styled.div`
  height: 488px;
  width: 80%;
  margin: auto;
  margin-bottom: 118px;
  display: flex;
  box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.25);
`;

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};
  padding: 60px;
  box-shadow: inset 1px 0px 12px rgba(0, 0, 0, 0.2);
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
  padding-top: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Summary = styled.div`
  color: ${(props) => props.textColor};
`;

const ProjectSnippet = ({
  backgroundColor,
  imgURL,
  projectTitle,
  projectRole,
  projectURL,
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
          <Summary textColor={textColor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
            <br />
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Summary>
          <div>View Project Button!</div>
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
  hrColor: "#fff",
  textColor: "#fff",
};

export default ProjectSnippet;
