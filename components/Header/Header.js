import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";

const Container = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  ${(props) =>
    props.separated
      ? `
    background: #fff;
    box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.15);
    top: 0px;
  `
      : ``}
`;

const Contents = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 48px 0 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ separated }) => (
  <Container separated={separated}>
    <Contents>
      <Link href="/">
        <Image src="/images/mc.svg" alt="MC Logo" width={52} height={21} />
      </Link>
      <Nav separated={separated} />
    </Contents>
  </Container>
);

Header.defaultProps = {
  separated: false,
};

export default Header;
