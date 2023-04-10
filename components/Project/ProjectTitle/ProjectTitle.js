import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 820px;
  background: url(${(props) => props.image}),
    ${(props) => props.backgroundColor};
  background-size: cover;
`;

const ProjectTitle = ({ backgroundColor, image }) => (
  <Container
    backgroundColor={backgroundColor}
    image={`../../images/${image}`}
  />
);

export default ProjectTitle;
