import styled from "styled-components";
import locus from "../assets/img/locus.webp";
import hanwhacalendar from "../assets/img/hanwhacalendar.webp";

const Wrapper = styled.div`
  position: relative;
  min-width: 1400px;
`;

const List = styled.ul``;
const Items = styled.li``;

const Item = styled.div`
  width: 100%;

  &::after {
    content: "";
    clear: both;
  }
  .isRight {
    float: right;
  }
  .isLeft {
    float: left;
  }
  .l100 {
    margin-left: 100px;
  }
  .r100 {
    margin-right: 100px;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  width: 600px;
`;
const Name = styled.div`
  font-size: 72px;
  font-weight: 700;
  color: #fff;
`;
const Type = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;
const ImgArea = styled.div`
  float: right;
  width: 800px;
  img {
    width: 100%;
  }
`;

const Clear = styled.div`
  clear: both;
  margin-bottom: 100px;
`;

function Works() {
  return (
    <Wrapper>
      <List>
        <Items>
          <Item>
            <ImgArea className="isRight">
              <img src={locus} alt="locus" />
            </ImgArea>
            <Info className="isRight r100">
              <Name>LOCUS-X</Name>
              <Type>WEBSITE</Type>
            </Info>
          </Item>
          <Clear />
          <Item>
            <ImgArea className="isLeft">
              <img src={hanwhacalendar} alt="lohanwhacalendarcus" />
            </ImgArea>
            <Info className="isLeft l100">
              <Name>한화그룹캘린더 2023</Name>
              <Type>WEBSITE</Type>
            </Info>
          </Item>
        </Items>
      </List>
    </Wrapper>
  );
}

export default Works;
