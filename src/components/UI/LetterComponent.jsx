import styled from 'styled-components';

const Letter = styled.div`
    position:absolute;
    left: ${({ left }) => left || '0'};
    top: ${({ top }) => top || '-100px'};
    font-size: ${({ fontSize }) => fontSize || '200px'};
    font-weight: bolder;
    margin-top: ${({ margin}) => margin || '0'};
    color: ${({ color }) => color || '#B7B7B7'};
    opacity: ${({ opacity }) => opacity || 0.2};
    @media (max-width: 768px) {
        font-size: ${({ fontSize }) => fontSize || '150px'};
        margin:  ${({margin }) => margin || '0'};
        left: ${({ left }) => left || '150px'};
        top: ${({ top }) => top || '-50px'};
    }`;


function LetterComponent( {children,top,left,fontSize,margin,color,opacity, position}) {


    return (
        <>
        <Letter top={top} left={left} fontSize={fontSize} color={color} opacity={opacity}margin={margin} position={position}>
            {children}
        </Letter>
    </>
    )
}

export default LetterComponent
