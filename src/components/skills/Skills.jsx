import React from 'react'

import { ContainerLineTitle, Line, Title } from '../about/aboutstyled'
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
} from './skillsstyled'

function Skills() {

return (
    <>
        <Container>
            <ContainerLineTitle>
                <Title>SKILLS</Title>
                <Line/>
            </ContainerLineTitle>
            <ContainerSkills>
                <ContainerTechnicalSkills>
                    <TitleTechnicalSkills>Habilidades técnicas</TitleTechnicalSkills>
                    <SubContainerTechnicalSkills>
                        <ContainerIllustrationTitle>
                            <Illustration src='./public/technologies/html.svg' alt='html'/>
                        </ContainerIllustrationTitle>
                        <ContainerIllustrationTitle>
                            <Illustration src='./public/technologies/css.svg' alt='css'/>
                        </ContainerIllustrationTitle>
                        <ContainerIllustrationTitle>
                            <Illustration src='./public/technologies/javascript.svg' alt='js'/>
                        </ContainerIllustrationTitle>
                        <ContainerIllustrationTitle>
                            <Illustration src='./public/technologies/styled-components.svg' alt='styled-components'/>
                        </ContainerIllustrationTitle>
                        <ContainerIllustrationTitle>
                            <Illustration src='./public/technologies/react.svg' alt='react'/>
                        </ContainerIllustrationTitle>
                        <ContainerIllustrationTitle>
                            <Illustration src='./public/technologies/git.svg' alt='git'/>
                        </ContainerIllustrationTitle>
                        <ContainerIllustrationTitle>
                            <Illustration src='./public/technologies/github.svg' alt='github'/>
                        </ContainerIllustrationTitle>


                    </SubContainerTechnicalSkills>
                </ContainerTechnicalSkills>

                <ContainerSoftSkills>
                    <TitleSoftSkills>Habilidades blandas</TitleSoftSkills>
                    <SubContainerSoftSkills>
                        <ContainerIllustrationTitle>
                            <Illustration src='./public/skills/adaptacion.png' alt='adaptacion'/>
                            <TitleIllustration>ADAPTACIÓN</TitleIllustration>
                        </ContainerIllustrationTitle>
                        <ContainerIllustrationTitle>
                            <Illustration src='./public/skills/resolucion-de-problemas.png' alt='resolucion-de-problemas'/>
                            <TitleIllustration>RESOLUCIÓN DE PROBLEMAS</TitleIllustration>
                        </ContainerIllustrationTitle>
                        <ContainerIllustrationTitle>
                            <Illustration src='./public/skills/trabajo-en-equipo.png' alt='trabajo-en-equipo'/>
                            <TitleIllustration>TRABAJO EN EQUIPO</TitleIllustration>
                        </ContainerIllustrationTitle>
                        <ContainerIllustrationTitle>
                            <Illustration src='./public/skills/creatividad.png' alt='creatividad'/>
                            <TitleIllustration>CREATIVIDAD</TitleIllustration>
                        </ContainerIllustrationTitle>

                    </SubContainerSoftSkills>
                </ContainerSoftSkills>
            </ContainerSkills>
        </Container>
    </>
)
}

export default Skills