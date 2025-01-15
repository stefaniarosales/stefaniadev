import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #E0B1CB;
  font-size: 1.1rem;
  letter-spacing: 1px;

  @media (max-width: 768px) {
        font-size: 1.3rem;
    }

  div {
    display: inline-block;

  }

  span {
    display: inline-block;
    margin: 0 2px;
  }
`;