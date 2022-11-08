import styled from "styled-components";

const Heading = styled.h2`
  text-align: center;
  margin-top: 104px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 66px;
  color: #ffffff;
`;

const SectionTitle = ({ children }) => <Heading>{children}</Heading>;

const defaultProps = {
  children: "Section Title",
};

export default SectionTitle;
