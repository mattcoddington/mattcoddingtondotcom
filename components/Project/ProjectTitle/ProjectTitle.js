import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 820px;
  background: url(${(props) => props.image}),
    ${(props) => props.backgroundColor};
  background-size: 100%;
  background-repeat: no-repeat;
  @media (max-width: 1500px) {
    height: 600px;
  }
  @media (max-width: 1100px) {
    height: 300px;
  }
  @media (max-width: 600px) {
    height: 200px;
  }
`;

const ProjectTitle = ({ backgroundColor, image }) => (
  <Container
    backgroundColor={backgroundColor}
    image={`../../images/${image}`}
  />
);

export default ProjectTitle;
