import styled from "styled-components";
import logoSvg from "../assets/img/72dot_light.svg";

const Header = styled.div`
  padding: 80px 120px 0;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
  img {
    height: 80px;
  }
  .burger {
    font-size: 48px;
    color: #fff;
  }
`;

const Burger = styled.div`
  width: 34px;
  height: 34px;
  div {
    border: 1px solid #fff;
  }
  div ~ div {
    margin-top: 7px;
  }
`;

function Headers() {
  return (
    <Header>
      <Logo>
        <img src={logoSvg} alt="logo" />
        <Burger>
          <div></div>
          <div></div>
        </Burger>
      </Logo>
    </Header>
  );
}

export default Headers;
