import styled from "styled-components";

import ProjectTitle from "./ProjectTitle";
import ProjectSection from "./ProjectSection";

const Project = ({ image }) => (
  <div>
    <ProjectTitle image={image} />
    <ProjectSection heading />
    <ProjectSection />
    <ProjectSection />
    <ProjectSection />
    <ProjectSection />
  </div>
);

export default Project;
