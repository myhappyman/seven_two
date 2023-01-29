import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  top: 450px;
  left: -1300px;
  width: 200%;
  height: 100%;
`;

const ColorWrap = styled(motion.div)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(225deg);
`;
const Color = styled(motion.div)<{ bgColor: string }>`
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  height: 20%;
  background-color: ${(props) => props.bgColor};
`;

const wrapVariants = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const colorVariants = {
  start: {
    width: 0,
  },
  end: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
  exit: {
    // width: "0%",
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);
  return (
    <Wrapper>
      {show ? (
        <ColorWrap
          variants={wrapVariants}
          initial="start"
          animate="end"
          exit="exit"
        >
          <AnimatePresence>
            <Color variants={colorVariants} bgColor="#e74c3c" />
            <Color variants={colorVariants} bgColor="#e67e22" />
            <Color variants={colorVariants} bgColor="#f1c40f" />
            <Color variants={colorVariants} bgColor="#2ecc71" />
            <Color variants={colorVariants} bgColor="#1abc9c" />
            <Color variants={colorVariants} bgColor="#3498db" />
            <Color variants={colorVariants} bgColor="#9b59b6" />
            <Color variants={colorVariants} bgColor="#e74c3c" />
            <Color variants={colorVariants} bgColor="#e67e22" />
            <Color variants={colorVariants} bgColor="#f1c40f" />
            <Color variants={colorVariants} bgColor="#2ecc71" />
          </AnimatePresence>
        </ColorWrap>
      ) : null}
    </Wrapper>
  );
}

export default Loader;
