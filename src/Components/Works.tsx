import styled from "styled-components";
import locus from "../assets/img/locus.webp";
import hanwhacalendar from "../assets/img/hanwhacalendar.webp";
import capture from "../assets/img/capture.webp";
import ryuPizza from "../assets/img/ryupizza.webp";
import hanwhacalendar2022 from "../assets/img/hanwhacalendar2022.webp";
import blash from "../assets/img/blash.webp";
import aftersales from "../assets/img/aftersales.webp";
import lgchem from "../assets/img/lgchem.webp";
import mbc from "../assets/img/mbc.webp";
import sdw from "../assets/img/sdw.webp";

const Wrapper = styled.div`
  position: relative;
  min-width: 1400px;
`;

const List = styled.ul``;
const Items = styled.li``;
const Item = styled.div`
  &:after {
    content: "";
    display: block;
    clear: both;
    margin-bottom: 100px;
  }
`;

const Box = styled.div<{ isRight: boolean }>`
  display: flex;
  align-items: center;
  float: ${(props) => (props.isRight ? "right" : "left")};
`;

const Text = styled.span<{ isRight: boolean }>`
  font-weight: 700;
  color: #fff;
  text-align: ${(props) => (props.isRight ? "right" : "left")};
  margin-right: ${(props) => (props.isRight ? "100px" : "0")};
  margin-left: ${(props) => (props.isRight ? "0" : "100px")};
`;

const Title = styled.div`
  font-size: 64px;
`;

const Type = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

const ImgArea = styled.div`
  width: 900px;
  transition: all 0.3s;
  img {
    width: 100%;
    transition: all 0.3s ease;
  }
  &:hover {
    img {
      transform: scale(0.9);
    }
  }
`;

function Works() {
  return (
    <Wrapper>
      <List>
        <Items>
          <Item>
            <Box isRight={true}>
              <Text isRight={true}>
                <Title>LOCUS-X</Title>
                <Type>WEBSITE</Type>
              </Text>
              <ImgArea>
                <img src={locus} alt="locus" />
              </ImgArea>
            </Box>
          </Item>
          <Item>
            <Box isRight={false}>
              <ImgArea>
                <img src={hanwhacalendar} alt="lohanwhacalendarcus" />
              </ImgArea>
              <Text isRight={false}>
                <Title>한화그룹캘린더 2023</Title>
                <Type>WEBSITE</Type>
              </Text>
            </Box>
          </Item>
          <Item>
            <Box isRight={true}>
              <Text isRight={true}>
                <Title>CAPTURE</Title>
                <Type>WEBSITE</Type>
              </Text>
              <ImgArea>
                <img src={capture} alt="capture" />
              </ImgArea>
            </Box>
          </Item>
          <Item>
            <Box isRight={false}>
              <ImgArea>
                <img src={ryuPizza} alt="ryuPizza" />
              </ImgArea>
              <Text isRight={false}>
                <Title>RYU PIZZA </Title>
                <Type>BRANDING / GRAPHIC / WEBSITE</Type>
              </Text>
            </Box>
          </Item>
          <Item>
            <Box isRight={true}>
              <Text isRight={true}>
                <Title>한화그룹캘린더 2022</Title>
                <Type>WEBSITE</Type>
              </Text>
              <ImgArea>
                <img src={hanwhacalendar2022} alt="hanwhacalendar2022" />
              </ImgArea>
            </Box>
          </Item>
          <Item>
            <Box isRight={false}>
              <ImgArea>
                <img src={blash} alt="blash" />
              </ImgArea>
              <Text isRight={false}>
                <Title>블래쉬 자산운용</Title>
                <Type>BRANDING / GRAPHIC / WEBSITE</Type>
              </Text>
            </Box>
          </Item>
          <Item>
            <Box isRight={true}>
              <Text isRight={true}>
                <Title>MINI 보증 연증 캠페인 2020</Title>
                <Type>WEBSITE / CAMPAIGN</Type>
              </Text>
              <ImgArea>
                <img src={aftersales} alt="aftersales" />
              </ImgArea>
            </Box>
          </Item>
          <Item>
            <Box isRight={false}>
              <ImgArea>
                <img src={lgchem} alt="lgchem" />
              </ImgArea>
              <Text isRight={false}>
                <Title>LG화학 카탈로그 2020</Title>
                <Type>GRAPHIC</Type>
              </Text>
            </Box>
          </Item>
          <Item>
            <Box isRight={true}>
              <Text isRight={true}>
                <Title>MBC Announcer 31</Title>
                <Type>BRANDING / GRAPHIC</Type>
              </Text>
              <ImgArea>
                <img src={mbc} alt="mbc" />
              </ImgArea>
            </Box>
          </Item>
          <Item>
            <Box isRight={false}>
              <ImgArea>
                <img src={sdw} alt="sdw" />
              </ImgArea>
              <Text isRight={false}>
                <Title>Seoul Design Week</Title>
                <Type>WEBSITE</Type>
              </Text>
            </Box>
          </Item>
        </Items>
      </List>
    </Wrapper>
  );
}

export default Works;
