import {
  Container,
  ContainerImgData,
  ContentData,
  ContainerNameLastName,
  ContainerData,
  ContainerLineTitle,
  ContainerSummary,
  Title,
  Img,
  Name,
  Profession,
  NameLastName,
  Data,
  Answer,
  Line,
  Summary
} from './aboutstyled'
//reusable components
import LetterComponent from '../UI/LetterComponent'

function About() {
  return (
    <>
      <Container>
        <ContainerLineTitle>
          <LetterComponent top='-65px'>A</LetterComponent>
          <Title>
            {"ABOUT".split("").map((letter, index) => (
                <span key={index} style={{ "--index": index }}>{letter}</span>
            ))}
          </Title>
          <Line />
        </ContainerLineTitle>
        <ContainerImgData>
          <Img src='https://res.cloudinary.com/dbotvxyzq/image/upload/v1738673390/stefania_de99fj.webp'/>
          <ContentData>
            <ContainerNameLastName>
              <Name>NOMBRE:</Name><NameLastName>STEFANIA ROSALES</NameLastName>
            </ContainerNameLastName>
            <Profession>developer frontend</Profession>
            <ContainerData>
              <Data>Intereses:</Data>
              <Answer>Diseño UX/UI, lectura, aprendizaje constante de nuevas tecnologías(actualmente explorando Node.js).</Answer>
            </ContainerData>
            <ContainerSummary>
              <Summary>Soy una Desarrolladora frontend con una sólida base en HTML, CSS, JavaScript y React, apasionada
              por crear interfaces de usuario intuitivas y visualmente atractivas.</Summary>
              <Summary>Busco mi primera oportunidad profesional para aplicar mis conocimientos y contribuir en
              proyectos innovadores. </Summary>
              <Summary>Me destaco por mi proactividad, habilidades de comunicación y
              capacidad para trabajar en equipo, con un enfoque constante en el aprendizaje y el
              crecimiento en entornos dinámicos y colaborativos.</Summary>
            </ContainerSummary>
          </ContentData>
        </ContainerImgData>
      </Container>
    </>
  )
}

export default About
