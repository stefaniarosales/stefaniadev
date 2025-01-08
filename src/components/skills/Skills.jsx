import React from 'react';
import { 
    Container,
    ContainerSkills,
    ContainerSoftSkills,
    ContainerTechnicalSkills, 
    SubContainerTechnicalSkills,
    SubContainerSoftSkills, 
    TitleSoftSkills, 
    TitleTechnicalSkills,
    ContainerIllustrationTitle,
    Illustration,
    TitleIllustration
} from './skillsstyled';
import { ContainerLineTitle, Line, Title } from '../about/aboutstyled';
import LetterComponent from '../UI/LetterComponent';

function Skills() {
    return (
        <Container>
            <ContainerLineTitle>
                <LetterComponent>S</LetterComponent>
                <Title>SKILLS</Title>
                <Line />
            </ContainerLineTitle>
            <ContainerSkills>
                <ContainerTechnicalSkills>
                    <TitleTechnicalSkills>Habilidades técnicas</TitleTechnicalSkills>
                    <SubContainerTechnicalSkills>
                        {[
                            { src: './technologies/html.svg', alt: 'HTML' },
                            { src: './technologies/css.svg', alt: 'CSS' },
                            { src: './technologies/javascript.svg', alt: 'JavaScript' },
                            { src: './technologies/styled-components.svg', alt: 'Styled Components' },
                            { src: './technologies/tailwind.svg', alt: 'Tailwind' },
                            { src: './technologies/bootstrap.svg', alt: 'Bootstrap' },
                            { src: './technologies/react.svg', alt: 'React' },
                            { src: './technologies/git.svg', alt: 'Git' },
                            { src: './technologies/github.svg', alt: 'GitHub' },
                            { src: './technologies/FIGMA.svg', alt: 'Figma' },
                            { src: './technologies/PS.svg', alt: 'Photoshop' },
                            { src: './technologies/AI.svg', alt: 'Illustrator' }
                        ].map((item, index) => (
                            <ContainerIllustrationTitle key={index}>
                                <Illustration src={item.src} alt={item.alt} />
                            </ContainerIllustrationTitle>
                        ))}
                    </SubContainerTechnicalSkills>
                </ContainerTechnicalSkills>
                <ContainerSoftSkills>
                    <TitleSoftSkills>Habilidades blandas</TitleSoftSkills>
                    <SubContainerSoftSkills>
                        {[
                            { src: './skills/adaptacion.png', title: 'ADAPTACIÓN' },
                            { src: './skills/resolucion-de-problemas.png', title: 'RESOLUCIÓN DE PROBLEMAS' },
                            { src: './skills/trabajo-en-equipo.png', title: 'TRABAJO EN EQUIPO' },
                            { src: './skills/creatividad.png', title: 'CREATIVIDAD' }
                        ].map((item, index) => (
                            <ContainerIllustrationTitle key={index} size="110px" >
                                <Illustration src={item.src} alt={item.title} sizes="90px" />
                                <TitleIllustration>{item.title}</TitleIllustration>
                            </ContainerIllustrationTitle>
                        ))}
                    </SubContainerSoftSkills>
                </ContainerSoftSkills>
            </ContainerSkills>
        </Container>
    );
}

export default Skills;
