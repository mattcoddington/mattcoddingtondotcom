import styled from "styled-components";

const Container = styled.section`
  margin-bottom: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${(props) => props.image}), #1e1345;
  background-size: cover;
`;

const ProjectTitle = ({ image }) => (
  <Container image={`../../images/${image}`}>HI</Container>
);

export default ProjectTitle;
