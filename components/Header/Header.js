import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";

const Container = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  ${(props) =>
    props.sticky
      ? `
    background: #fff;
    box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.15);
    position: sticky;
    top: 0px;
  `
      : ``}
`;

const Contents = styled.div`
  width: 1432px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({ sticky }) => (
  <Container sticky={sticky}>
    <Contents>
      <Link href="/">
        <Image src="/images/mc.svg" alt="MC Logo" width={52} height={21} />
      </Link>
      <Nav sticky={sticky} />
    </Contents>
  </Container>
);

Header.defaultProps = {
  sticky: false,
};

export default Header;
