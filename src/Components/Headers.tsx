import { useState, useEffect } from "react";
import { useAnimation, useScroll } from "framer-motion";
import styled from "styled-components";
import logoSvg from "../assets/img/72dot_light.svg";

function Headers() {
  const [isFixed, setIsFixed] = useState(false);
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 120) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });
  }, [navAnimation, scrollY]);

  return (
    <Header isFixed={isFixed}>
      <Inner>
        <Logo>
          <img src={logoSvg} alt="logo" />
          <Burger>
            <div></div>
            <div></div>
          </Burger>
        </Logo>
      </Inner>
    </Header>
  );
}

export default Headers;

const Header = styled.div<{ isFixed: boolean }>`
  position: ${(props) => (props.isFixed ? "fixed" : "relative")};
  top: ${(props) => (props.isFixed ? "0px" : "15px")};
  width: 100%;
  padding: ${(props) => (props.isFixed ? "0px 120px" : "80px 120px 0")};
  mix-blend-mode: difference;
  z-index: 9999;
`;

const Inner = styled.div`
  padding: 0 10rem;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
