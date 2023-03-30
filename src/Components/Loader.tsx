import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  top: 450px;
  left: -1300px;
  width: 200%;
  height: 100%;
  z-index: 99;
`;

const ColorWrap = styled(motion.div)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(225deg);
`;
const Color = styled(motion.div)<{ bgcolor: string }>`
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  height: 20%;
  background-color: ${(props) => props.bgcolor};
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
    width: "0%",
    transition: {
      duration: 1,
    },
  },
};

function Loader() {
  return (
    <Wrapper>
      <ColorWrap
        variants={wrapVariants}
        initial="start"
        animate="end"
        exit="exit"
      >
        <Color variants={colorVariants} bgcolor="#e74c3c" />
        <Color variants={colorVariants} bgcolor="#e67e22" />
        <Color variants={colorVariants} bgcolor="#f1c40f" />
        <Color variants={colorVariants} bgcolor="#2ecc71" />
        <Color variants={colorVariants} bgcolor="#1abc9c" />
        <Color variants={colorVariants} bgcolor="#3498db" />
        <Color variants={colorVariants} bgcolor="#9b59b6" />
        <Color variants={colorVariants} bgcolor="#e74c3c" />
        <Color variants={colorVariants} bgcolor="#e67e22" />
        <Color variants={colorVariants} bgcolor="#f1c40f" />
        <Color variants={colorVariants} bgcolor="#2ecc71" />
      </ColorWrap>
    </Wrapper>
  );
}

export default Loader;
