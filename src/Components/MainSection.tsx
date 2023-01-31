import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Headers from "./Headers";
import useInterval from "../useInterval";

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

const Slogan = styled.div`
  width: 50%;
  color: #fff;
  font-size: 104px;
`;

function MainSection() {
  const MessageArr = [
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈을 이루어 드립니다.",
    "우리는 고객의 꿈으 이루어 드입니다.1",
    "우리는 고객의 꿈으 이루어 드입니다.1",
    "우리는 고객의 꿈으 이루어 드입니다.^$2",
    "우리는 ㄱrew 꿈으 이우어 으니다.^",
    "우리으 고객의 꿈으 이우어 으니다.^",
    "우는k DRe 꿈으 이우어 으니다.^$3",
    "우는k 고객의 꾸ㅁ으ㄹ 이#어 1니다.^$4",
    "우는리rk 고객 e꾸을 E이루@!# 1e립2다.",
    "우erk ㄱㄲrrfe의 Dre을 이루어 12A3e립니",
    "우erk ㄱㄲrrfe의 꿈을 이루어 12A3e립다",
    "우erk rh객의 꿈을 이f34루어 12A3e립니다.^$%",
    "우erk rh객@vVw#의 꿈@#$을 루어 12다.aB.",
    "우erk rh객의 꿈@#$을 이!루어 12A3e립니다.aB...",
    "우er.k는 rhror의 꿈f 이루BFf어 12A3e니()다.",
    "우erk는 rhro..rd 꿈fAd 이%#어 12A3e립니다.",
    "유는이rk 룰 Dㅇe꾸을 E루@!# 1e립.^$%",
    "는리rk 하허룰 Dㅇe꾸을 E이루@!# 1e립니^$%",
    "는리rk 객의국rfe의 Dre꾸을 2루어 12e립니",
    "Eerk는 12rh...rol xf꿈fAd루dj 12A3e립니!다.",
    "Aew fee 1ro/rdml xf꿈fAd el루dj 12Ae립.",
    "A#@D f234e $#ro>l xf꿈fAd el루dj 12A3e립&%^",
    "Werk는 2ro< xf꿈fAd elj Ee립니다.",
    "Werk는 12ㄹㄷo< xf꿈fAd eDj 13e립니다.",
    "Werk는 fdsro< xf꿈fAd el루dj 13e다.",
    "w#$ 만mㅡake ㄹ$@r lㄹ들s e765루5ㄴ#$% cme ^%$.",
    "w#$ 만aKE @$@#ur Cl&*(+^&s z5ㄴㅇㄻ cme tr^%1.",
    "w#$ 만Bke ㄹ를#ur clRtvfs a$% cme true^%2.",
    "w#$ 만aAke ㄹ$@#ur 43ien^&s d-=ㄴ#$% cme ^%3.",
    "w#$ 만ake ㄹ$@r 곡 d75ㄴ)_($% cme true^%3.",
    "w#$ adfkE $@#ur clㄹ루ㅡs Ae&&ㅇㄻ#$% e^%3.",
    "we m*&ake our ㄹ3ient^'s #$% ce ue^45.",
    "we m*&ake o@#UI lㄹ9ient^'s #$% cme true^**",
    "w2 m*&ake o@#ur cli9t^'s #$% cme tRue^**().",
    "wE m*&ake o@!ur cient^'s #$% cme truE^**().",
    "we m*ake o@%ur c먀nt's dre575ㄴ#$% cme tr*3().",
    "wE m*&ake o%ur cliAP's a#$% cme True^*2*().",
    "we m&ake o cent's d75ㄴㅇ$% cme tue^*1().",
    "W2 m&ake our cient's Dre5ㄴㅇㄻ#$% CmE true^().",
    "we m&ake o client's drAm c0me tRue).*$#",
    "w2 M&ake oOur Client's DrEAm ce Te).*$#",
    "we m&ake our Client's dreAm c0me true).*$#",
    "we m&ake our client's dreAM c0me true.*1#",
    "we make our client's dream come true.#",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
    "we make our client's dreams come true.",
  ];
  const Mlen = MessageArr.length;
  const [reverse, setReverse] = useState(false);
  const [sgIdx, setSgIdx] = useState(0);
  const [slogan, setSlogan] = useState("");
  useInterval(() => {
    setSlogan(MessageArr[sgIdx]);
    if (reverse) {
      setSgIdx((prev) => {
        if (prev - 1 === -1) {
          setReverse(false);
          return prev + 1;
        } else {
          return prev - 1;
        }
      });
    } else {
      setSgIdx((prev) => {
        if (prev + 1 === Mlen) {
          setReverse(true);
          return prev - 1;
        } else {
          return prev + 1;
        }
      });
    }
  }, 80);
  return (
    <Wrapper>
      <Headers />
      <Main>
        <Slogan>{slogan}</Slogan>
      </Main>
    </Wrapper>
  );
}

export default MainSection;
