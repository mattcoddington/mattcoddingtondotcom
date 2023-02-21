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
  width: 270px;
  font-family: "Roboto";
  font-style: italic;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #8c8c8c;
`;

const RegularText = styled.p`
  padding: 0;
  margin: 0;
  width: 270px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 56px;
  color: #ffffff;
`;

const asideType = (heading, sectionTitle) =>
  heading ? (
    <HeadingText>
      {sectionTitle}
      <HeadingPeriod>.</HeadingPeriod>
    </HeadingText>
  ) : (
    <RegularText>{sectionTitle}</RegularText>
  );

const ProjectAside = ({ heading, sectionTitle, sectionSubTitle }) => (
  <Container>
    {asideType(heading, sectionTitle)}
    <HeadingSubtext>{sectionSubTitle}</HeadingSubtext>
  </Container>
);

ProjectAside.defaultProps = {
  heading: false,
  sectionTitle: "Default Title",
  sectionSubTitle: "Default Sub Title",
};

export default ProjectAside;
