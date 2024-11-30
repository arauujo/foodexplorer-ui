import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  margin-top: -5.3rem;
  width: 100vw;
  padding: 0 3.36rem 0 4.64rem;
  display: flex;
  gap: 5.21rem;
  flex-direction: column;

  > .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.77rem;

    img {
      width: 3.1rem;
      height: 3.1rem;
    }

    h1 {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD.fontFamily};
      font-size: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD.fontSize};
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD.fontWeight};
      line-height: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD.lineHeight};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: -2.2rem;
    padding: 0 6.75rem 0 9.62rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  > h2 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontFamily};
    font-size: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontSize};
    font-weight: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontWeight};
    line-height: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.lineHeight};
  }

  > .input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 64px;
    border-radius: 1rem;
    width: 29.75rem;

    .desktop-only {
      display: block;
      text-align: center;
    }
  }
`;
