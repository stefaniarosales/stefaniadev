
import React from 'react';
import { Container, ContainerName, SubTitle, Img } from './startstyled';
import AnimatedText from './AnimatedText';
import LetterComponent from '../UI/LetterComponent';

import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';



function Start() {
  return (
    <Container>
       {/*  <Img src='../img/stefania.jpg' alt='img' /> */}
        <ContainerName>
          <SubTitle>Hola! soy</SubTitle>
          <ContainerLineTitle>
          <LetterComponent color='#afa7a7' fontSize='500px' top='-180px' left=''>S</LetterComponent>
            <Title>STEFANIA</Title>
            <Line/>
          </ContainerLineTitle>
          <AnimatedText/>
        </ContainerName>
    </Container>
  );
}

export default Start;
