import styled from "styled-components";

import ProjectTitle from "./ProjectTitle";
import ProjectSection from "./ProjectSection";

const Project = ({ image, content }) => (
  <div>
    <ProjectTitle image={image} />
    <ProjectSection content={content} />
  </div>
);

export default Project;
