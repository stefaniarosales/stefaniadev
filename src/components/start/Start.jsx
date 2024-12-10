// Start.js
import React from 'react';
import { ContainerStyled, ContainerNameStyled, SubTitleStyled, TitleStyled, ContainerImg } from './startstyled';
import AnimatedText from './AnimatedText';


function Start() {
  return (
    <ContainerStyled>
      <ContainerImg>
        <ContainerNameStyled>
          <SubTitleStyled>Hola! soy</SubTitleStyled>
          <TitleStyled>STEFANIA</TitleStyled>
          <AnimatedText/>
        </ContainerNameStyled>
      </ContainerImg>
    </ContainerStyled>
  );
}

export default Start;
