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
  ContainerData,
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
          <ContainerData>

          </ContainerData>
          <Form/>
        </SubContainer>
      </Container>
    </>
  )
}

export default Contact
