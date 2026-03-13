import { motion } from 'framer-motion';
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
import LetterComponent from '../UI/LetterComponent'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function About() {
  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContainerLineTitle variants={itemVariants}>
          <LetterComponent top='-65px'>A</LetterComponent>
          <Title>
            {"ABOUT".split("").map((letter, index) => (
                <span key={index} style={{ "--index": index }}>{letter}</span>
            ))}
          </Title>
          <Line />
        </ContainerLineTitle>
        <ContainerImgData>
          <motion.div variants={imageVariants}>
            <Img src='https://res.cloudinary.com/dbotvxyzq/image/upload/v1738673390/stefania_de99fj.webp'/>
          </motion.div>
          <ContentData>
            <ContainerNameLastName variants={itemVariants}>
              <Name>NOMBRE:</Name><NameLastName>STEFANIA ROSALES</NameLastName>
            </ContainerNameLastName>
            <Profession variants={itemVariants}>developer frontend</Profession>
            <ContainerData variants={itemVariants}>
              <Data>Intereses:</Data>
              <Answer>Diseño UX/UI, lectura, aprendizaje constante de nuevas tecnologías(actualmente explorando Node.js).</Answer>
            </ContainerData>
            <ContainerSummary variants={itemVariants}>
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
      </motion.div>
    </Container>
  )
}

export default About
