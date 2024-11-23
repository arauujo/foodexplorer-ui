import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  margin-top: -6rem;
  width: 100vw;
  padding: 0 3.91rem 0 5.41rem;
  display: flex;
  gap: 6.1rem;
  flex-direction: column;

  > .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.88rem;

    img {
      width: 3.6rem;
      height: 3.6rem;
    }

    h1 {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD.fontFamily};
      font-size: 3.1rem;
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD.fontWeight};
      line-height: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD.lineHeight};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: -3rem;
    padding: 0 6.75rem 0 9.62rem;
    flex-direction: row;
    justify-content: space-between;

    > .logo-container {
      margin-top: 0;

      h1 {
        font-size: ${({ theme }) => theme.FONTS.ROBOTO_GIANT_BOLD.fontSize};
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  .desktop-only {
    display: none;
  }

  > h2 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontFamily};
    font-size: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontSize};
    font-weight: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontWeight};
    line-height: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.lineHeight};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 4rem;
    border-radius: 1rem;
    width: 29.75rem;

    .desktop-only {
      display: block;
      text-align: center;
    }
  }
`;
