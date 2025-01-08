
import React from 'react';
import { Container, ContainerName, SubTitle } from './startstyled';
import AnimatedText from './AnimatedText';
import LetterComponent from '../UI/LetterComponent';

import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';



function Start() {
  return (
    <Container>
        <ContainerName>
          <SubTitle>Hola! soy</SubTitle>
          <ContainerLineTitle>
          <LetterComponent color='#afa7a7' fontSize='300px' top='-150px' left='-134px'>S</LetterComponent>
            <Title>STEFANIA</Title>
            <Line/>
          </ContainerLineTitle>
          <AnimatedText/>
        </ContainerName>
    </Container>
  );
}

export default Start;
