import styled from "styled-components";

import ProjectTitle from "./ProjectTitle";
import ProjectSection from "./ProjectSection";

const Project = ({ backgroundColor, image, content }) => (
  <div>
    <ProjectTitle backgroundColor={backgroundColor} image={image} />
    <ProjectSection content={content} />
  </div>
);

export default Project;
