import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin-top: -22%;
  padding: 0 3.91rem 0 5.41rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > .logo-container {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.88rem;

    img {
      width: 3.6rem;
      height: 3.6rem;
    }

    h1 {
      font-size: 3.1rem;
    }
  }
`;

export const Form = styled.form`
  margin-top: 6.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;
