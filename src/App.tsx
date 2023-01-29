import styled from "styled-components";
import Loader from "./Components/Loader";
// import NewSpace from "./Components/NewSpace";
import Space from "./Components/Space";

const Wrapper = styled.div``;

function App() {
  return (
    <Wrapper>
      <Loader />
      {/* <NewSpace /> */}
      <Space />
      {/* <Basic /> */}
    </Wrapper>
  );
}

export default App;
