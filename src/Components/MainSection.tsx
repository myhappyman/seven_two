import styled from "styled-components";
import { useState } from "react";
import Headers from "./Headers";
import useInterval from "../useInterval";
import Works from "./Works";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
`;

const Main = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 100px;
`;

const Slogan = styled.div`
  width: 58%;
  color: #fff;
  font-size: 84px;
  font-weight: 700;
`;

const SelectWorks = styled.div`
  position: absolute;
  top: 700px;
  left: 60%;
  color: #fff;
  font-size: 72px;
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
    "우리는 고객의 꿈을 이루어 드립니다.!@",
    "우리는 고객의 꿈을 이루어 드립니다.^3",
    "우리는 고객의 꿈을 이루어 으닙니자.2@",
    "우리는 고객의 꿈을 이우어 드입니자.2@",
    "우리는 고객의 꿈을 이우러 으입니자.1!",
    "우리는 고객의 꿈을 미우러 드입니자.1@",
    "우리는 고객의 꿈를 미우러 드입니자.2@",
    "우리는 고객의 꿈응 이루러 드립니가.1",
    "우리는 고객의 꿈응 기루러 드입니아.^2",
    "우리는 고개이 꿈를 이우러 으니다.^",
    "우리는 고객으 끌응 이루ㄹㅓ 으립2다.",
    "우리는 고객으 끌으 이으ㅇㅓ 으닙다.^",
    "우리는 고객이 끔응 으이ㅇㅓ 으니다.^",
    "우리는 고객이 끌응 으이ㅇㅓ 으립다.^",
    "우리는 고객니 뜸으 으이이 으립다.^",
    "우리느 고액니 끔을 이으러 그입다.",
    "우기으 오객이 끔을 이루러 그입다.",
    "우니으 오액이 뜸을 이루러 그입다.",
    "우니그 고객니 끔므 이루러 그임3다.",
    "우이으 고객니 끔므 이구러 그임2다.",
    "우이그 고객이 끔므 니누러 그입2다.",
    "우는느 고애이 끔므 니누러 그이다.",
    "우리으 고개이 끔으 니누어 으니다.^",
    "우이그 고애으 쁨으 이우어 니다.^$3",
    "우이그 고애으 쁨으 이우어 니다.^$3",
    "우리ㅡ 고객으 꾸그 니우어 그립다.",
    "우는k 고액이 꾸으 이으어 립니다.^$4",
    "우는k 오액기 꿈으 이우어 으니다.^$3",
    "우으 오액기 꿈으 이우어 스미다.^$3",
    "누으 로랙리 꿈으 이우어 스미마.^$3",
    "누으 모맥이 꿈으 이우어 으미다.^$3",
    "누으 므맥이 꿈으 이우어 마사다.3",
    "구k 므막이 꾸으 이우어 시스다.^",
    "구k 으악이 꾸으 이우어 시시다.!",
    "구k 으익이 구르 이우어 으니다.!@",
    "우k 그익으 구르 이우어 으니다.@#",
    "수k 으이그 구르 이우어 으니다.$@",
    "누리 그기그 구으 이우어 으니다.@3",
    "누k 그기그 구으 이우어 으니다.^$3",
    "ㅇerk 느기의 Dre을 이루어 ㅂ3e이니",
    "ㅇerk 느그기 D을 이루어 ㅁA3e이나",
    "ㅇerk 느느니 Dre 이루어 1이**다",
    "e이k 고애니 Dr을 이루어 1이3e기다.",
    "erk 느객의 꾸을 이f34 1#@e다.",
    "erk 느객의 구을 이f어 12#@가.^$%",
    "erk 느객의 구을 Co루어 니다.^$%",
    "erk r객@Vw#의 그@#$을 루어 12다.aB.",
    "Rerk rh@#의 드@#$을 이!루어 12A3eB...",
    "rer.k는 rhror의 뜨f 이루BFf어 12e니.",
    "Qerk는 rhro..rd DrfAd 이%#어 1e입.",
    "V는이rk 룰 DㅇeM E으@!# 1e립.^$%",
    "v는리rk 하룰 Dㅇe E이!# 1e립니^$%",
    "v는리rk 개으rfe의 Dre 2루어 12e립니",
    "Verk는 ㄱㅇ...r xF@fAd루dj 12립니!다.",
    "Verk는 ㄱㅇㅡ xF@fAd루dj 12립니!다.",
    "Wew fee 1ro/!ml DREAM el으dj 1&**e립.",
    "V#@D f234e $#ro>l DREAM el루DJ ***^",
    "Werk는 2ro< xf꿈fAd elj Ee립니다.",
    "Werk는 12ㄹㄷo< xRRfAd eDj 13e립니다.",
    "Werk는 fdsro< xf#$Ad el루dj 13e다.",
    "W2 m&ake our cient's Dre5ㄴㅇㄻ#$% CmE true^()!",
    "wE$ 만mㅡake ㄹ$@r lㄹ들s e765루5ㄴ#$% cme ^%$.",
    "wE$ 만aKE @$@#ur Cl&*(+^&s z5ㄴㅇㄻ cme tr^%1.",
    "wE$ 만Bke ㄹ를#ur clRtvfs a$% cme true^%2.",
    "w%$ 만aAke ㄹ$@#ur 43ien^&s d-=ㄴ#$% cme ^%3.",
    "wE$ 만ake ㄹ$@r 곡 d75ㄴ)_($% cme true^%3.",
    "wM adfkE $@#ur clㄹ루ㅡs Ae&&ㅇㄻ#$% e^%3.",
    "w2 M&ake oOur Client's DrEAm ce Te).*$#",
    "w2 N*&ake o@#ur cli9t^'s #$% cme tRue^**()",
    "wE N*&ake o%ur cliAP's a#$% cme True^*2*()",
    "wE n*&ake o@!ur cient^'s #$% cme truE^**()",
    "we *&ake our ㄹ3ient^'s #$% ce ue^45.",
    "we N*&ake o@#UI lㄹ9ient^'s #$% cme true^**",
    "we n*ake o@%ur c먀nt's dre575ㄴ#$% cme tr*3().",
    "we M&AE o cent's d75ㄴㅇ$% cme tue^*1().",
    "we M&Ak! our client's dreAM c0me true.*1#",
    "we m&aE o client's drAmc0me tRue).*$#",
    "we m&aE Pur Client'sBreAm c0me true).*$#",
    "we m&aK pur PLient's ReAMC0me TR.",
    "we make Our blient's DEAMB0me tyi.#",
    "we make our ClieNTC DRAm B0me tue.!",
    "we make our CLieNTC DAM c0me Tru#",
    "we make our BlieNTC dAM c0me Tru#",
    "we make our BlieNTC dRAM Cime Tru#",
    "we make our Clie312 drAM c0me Tru#",
    "we make our Clie312 drAM c0me Tru#",
    "we make our Clie312 dReam P0mE true1#",
    "we make our Clie)(^ dREamb0me true*",
    "we make our clie() drEAmCOMe Tue.!@",
    "we make our clie** dreAm BoMe tRe.!*",
    "we make our cli12& dream C0MTRe.!",
    "we make our cliE1& dream cOe True.!@",
    "we make our cli*& dream coe trUE@",
    "we make our Cli2Ee dream ome true*(",
    "we make our c1ie*& dream cOMe tRuE.!@",
    "we make our cLie*& dream ComEtrue.!@",
    "we make our clie*& dream come TRue.!@",
    "we make our cl1e*& d'ream come tR..uE.!@",
    "we make our cl1e*& 'dream come tR..u!@",
    "we make our cl1e*& 'dream come tr.u!@",
    "we make our cl1E*&' dream come tru!@",
    "we make our cl1E*&' dream come true!.@",
    "we make our cl1E*&' dream come true(.",
    "we make our cl1E*&' dream come true().",
    "we make our cl1E*&'o dream come true.)",
    "we make our clie*&'o dream come true.",
    "we make our clLe*'o dream come true.",
    "we make our clle2'o dream come true.",
    "we make our clIe*t'e dream come true.",
    "we make our cLIe**t'e dream come true.",
    "we make our clIent'e dream come true.",
    "we make our clIunt'e dream come true.",
    "we make our clieNT'e dream come true.",
    "we make our clieNt'e dream come true.",
    "we make our clieNt'e dream come true.",
    "we make our clieNt'e dream come true.",
    "we make our clieNt's dream come true.",
    "we make our cliEnT's dream come true.",
    "we make our cliEnT's dream come true.",
    "we make our clienT's dream come true.",
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
  }, 50);
  return (
    <Wrapper>
      <Headers />
      <Main>
        <Slogan>{slogan}</Slogan>
      </Main>
      <SelectWorks>Selected Works↓</SelectWorks>
      <Works />
    </Wrapper>
  );
}

export default MainSection;
