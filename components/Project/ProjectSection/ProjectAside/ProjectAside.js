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
  ${(color) => (color ? color : "color: #fff")};
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

const asideType = (heading, color, sectionTitle) =>
  heading ? (
    <HeadingText>
      {sectionTitle}
      <HeadingPeriod color={color}>.</HeadingPeriod>
    </HeadingText>
  ) : (
    <RegularText>{sectionTitle}</RegularText>
  );

const ProjectAside = ({ heading, dotColor, sectionTitle, sectionSubTitle }) => (
  <Container>
    {asideType(heading, dotColor, sectionTitle)}
    <HeadingSubtext>{sectionSubTitle}</HeadingSubtext>
  </Container>
);

ProjectAside.defaultProps = {
  heading: false,
  dotColor: "#fff",
  sectionTitle: "Default Title",
  sectionSubTitle: "Default Sub Title",
};

export default ProjectAside;
