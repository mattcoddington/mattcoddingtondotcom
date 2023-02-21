import styled from "styled-components";

import Link from "next/link";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => (props.separated ? `#1C1525` : `#c7baed`)};

  > * {
    padding-right: 24px;
  }

  > :last-child {
    padding-right: 0px;
  }
`;

const Dot = styled.img``;

const Nav = ({ separated }) => (
  <Container separated={separated}>
    <div>
      <Link href="/#recentWork">work</Link>
    </div>
    <Dot src="/images/nav-dot.svg" alt="dot" />
    <div>
      <Link href="/#contactForm">contact</Link>
    </div>
    <Dot src="/images/nav-dot.svg" alt="dot" />
    <div>
      <Link href="/images/MC_Resume.pdf" target="resume">
        resume
      </Link>
    </div>
  </Container>
);

export default Nav;
