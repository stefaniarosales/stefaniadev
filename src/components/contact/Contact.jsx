import React from 'react'


import Form from './Form'
import { ContainerLineTitle, Title, Line} from '../about/aboutstyled'
import LetterComponent from '../UI/LetterComponent'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { GitHub } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';



import {
  Container,
  SubContainer,
  ContainerIconsRedesSociales,
  ContainerData,
  Data,
  ContainerDataIcons,
  ContainerIcon,
}
from './contactstyled'

function Contact() {
  return (
    <>
      <Container>
        <ContainerLineTitle>
          <LetterComponent top='-60px'>C</LetterComponent>
          <Title>
            {"CONTACT".split("").map((letter, index) => (
              <span key={index} style={{ "--index": index }}>{letter}</span>
            ))}
          </Title>
          <Line />
        </ContainerLineTitle>
        <SubContainer>
          <ContainerDataIcons>
            <ContainerData>
              <Data>stefaniarosales@live.com</Data>
              <Data>+54 11 2697 7959</Data>
              <Data>Argentina, Buenos Aires</Data>
            </ContainerData>
            <ContainerIconsRedesSociales>
                <ContainerIcon
                  href="https://github.com/stefaniarosales"
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  <GitHub style={{ fontSize: '30px' }}/>
                </ContainerIcon>
                <ContainerIcon
                  href="https://www.instagram.com/stefisua/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram style={{ fontSize: '30px' }}/>
                </ContainerIcon>
                <ContainerIcon
                  href="https://www.linkedin.com/in/stefaniarosales/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn style={{ fontSize: '30px' }}/>
                </ContainerIcon>
            </ContainerIconsRedesSociales>
          </ContainerDataIcons>
          <Form/>
        </SubContainer>
      </Container>
    </>
  )
}

export default Contact
