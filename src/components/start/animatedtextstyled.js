import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--lavanda-light);
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
        font-size: 1rem;
        letter-spacing: 2px;
    }
  div {
    display: inline-block;
  }
  span {
    display: inline-block;
    margin: 0 2px;
  }
`;
