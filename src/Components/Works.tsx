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
  /* display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 100px; */
  width: 100%;
  margin-bottom: 100px;
  outline: 1px solid yellow;
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
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;

  width: 600px;

  outline: 1px solid red;
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
  outline: 1px solid blue;
  img {
    width: 100%;
  }
`;

const Clear = styled.div`
  clear: both;
`;

function Works() {
  return (
    <Wrapper>
      <List>
        <Items>
          <Item className="isRight">
            <ImgArea>
              <img src={locus} alt="locus" />
            </ImgArea>
            <Info>
              <Name>LOCUS-X</Name>
              <Type>WEBSITE</Type>
            </Info>
          </Item>
          <Clear />
          <Item className="isLeft">
            <Info>
              <Name>한화그룹캘린더 2023</Name>
              <Type>WEBSITE</Type>
            </Info>
            <ImgArea>
              <img src={hanwhacalendar} alt="lohanwhacalendarcus" />
            </ImgArea>
          </Item>
        </Items>
      </List>
    </Wrapper>
  );
}

export default Works;
