import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Loader from "./Components/Loader";
// import NewSpace from "./Components/NewSpace";
import Space from "./Components/Space";
import MainSection from "./Components/MainSection";
import Works from "./Components/Works";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

function App() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);
  return (
    <Wrapper>
      <AnimatePresence>{show ? <Loader /> : null}</AnimatePresence>
      <Space />
      <MainSection />
      <Works />
    </Wrapper>
  );
}

export default App;
