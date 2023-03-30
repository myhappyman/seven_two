import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Loader from "./Components/Loader";
// import NewSpace from "./Components/NewSpace";
import Space from "./Components/Space";
import MainSection from "./Components/MainSection";
import Works from "./Components/Works";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  min-width: 1400px;
`;

function App() {
  // const [show, setShow] = useState(true);

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setShow(false);
  //   }, 3000);
  //   return clearTimeout(timer);
  // }, []);
  return (
    <Wrapper>
      {/* <AnimatePresence>{show ? <Loader /> : null}</AnimatePresence> */}
      <Space />
      <MainSection />
      <Works />
    </Wrapper>
  );
}

export default App;
