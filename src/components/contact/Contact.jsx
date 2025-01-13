import React from 'react'

import { ContainerLineTitle, Title, Line} from '../about/aboutstyled'
import LetterComponent from '../UI/LetterComponent'

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
        <ContainerData>

        </ContainerData>
      </Container>
    </>
  )
}

export default Contact
