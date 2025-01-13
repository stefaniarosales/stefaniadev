import React from 'react'


import Form from './Form'
import { ContainerLineTitle, Title, Line} from '../about/aboutstyled'
import LetterComponent from '../UI/LetterComponent'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


import {
  Container,
  SubContainer,
  ContainerDataIcon,
  SubContainerDataIcon,
  ContainerLogoData,
  ContainerLogo,
  Data,
  Icon,
  Logo
}
from './contactstyled'

function Contact() {
  return (
    <>
      <Container>
        <ContainerLineTitle>
            <LetterComponent top='-40px'>C</LetterComponent>
            <Title>CONTACT</Title>
            <Line />
        </ContainerLineTitle>
        <SubContainer>
          <ContainerLogoData>
            <ContainerLogo>
              <Logo src='./img/logo.png'/>
            </ContainerLogo>
            <SubContainerDataIcon>
              <ContainerDataIcon>
                <WhatsAppIcon/>
                <Data>11 26977559</Data>
              </ContainerDataIcon>
              <ContainerDataIcon>
                <EmailIcon/>
                <Data>stefaniarosales@live.com</Data>
                <Data>stefaniarosales0@gmail.com</Data>
              </ContainerDataIcon>
            </SubContainerDataIcon>
          </ContainerLogoData>
          <Form/>
        </SubContainer>
      </Container>
    </>
  )
}

export default Contact
