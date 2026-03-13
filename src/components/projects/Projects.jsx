import { motion } from 'framer-motion';
import projectsData from '../data/projects.js';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import { 
  Container,
  ProjectsContainer, 
  ProjectCard, 
  ProjectImage, 
  Overlay, 
  Technologies, 
  TechIcon, 
  ButtonContainer, 
  Button 
} from './projectsstyled.js';

import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';
import LetterComponent from '../UI/LetterComponent';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  },
};

const Projects = () => {
  return (
    <Container> 
      <ContainerLineTitle>
        <LetterComponent >P</LetterComponent>
        <Title>
            {"PROJECTS".split("").map((letter, index) => (
                <span key={index} style={{ "--index": index }}>{letter}</span>
            ))}
        </Title>
        <Line />
      </ContainerLineTitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ProjectsContainer>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} as={motion.div} variants={cardVariants} whileHover={{ y: -10 }}>
              <ProjectImage src={project.image} alt={project.title} />
              <Overlay>
                <h3>{project.title}</h3>
                <Technologies>
                  {project.technologies.map((tech, i) => (
                    <TechIcon key={i} src={`/technologies/${tech.toLowerCase()}.svg`} alt={tech} />
                  ))}
                </Technologies>
                <ButtonContainer>
                  <Button href={project.url} target="_blank" rel="noopener noreferrer">
                    <WebIcon /> Web
                  </Button>
                  <Button href={project.git} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon /> Código
                  </Button>
                </ButtonContainer>
              </Overlay>
            </ProjectCard>
          ))}
        </ProjectsContainer>
      </motion.div>
    </Container>
  );
};

export default Projects;
