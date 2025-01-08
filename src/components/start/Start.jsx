
import React from 'react';
import { Container, ContainerName, SubTitle, DownloadButton } from './startstyled';
import AnimatedText from './AnimatedText';
import LetterComponent from '../UI/LetterComponent';

import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';
import DownloadIcon from '@mui/icons-material/Download';


function Start() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../cv/stefaniacv.pdf';
    link.download = 'stefania_cv.pdf';
    link.click();
  }
  return (
    <Container>
        <ContainerName>
          <SubTitle>Hola! soy</SubTitle>
          <ContainerLineTitle>
            <Title>STEFANIA</Title>
            <Line/>
          </ContainerLineTitle>
          <AnimatedText/>
        </ContainerName>
        <DownloadButton onClick={handleDownload}>
        <DownloadIcon style={{ marginRight: '8px' }} />Descargar CV
        </DownloadButton>
    </Container>
  );
}

export default Start;
