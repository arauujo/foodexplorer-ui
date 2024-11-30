import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2.11rem 1.98rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-container {
    display: flex;
    align-items: center;
    gap: 0.46rem;

    svg.polygon-logo {
      height: 1.57rem;

      path {
        fill: ${({ theme }) => theme.COLORS.LIGHT_700};
      }
    }

    h2 {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.fontFamily};
      font-size: 1.09rem;
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.fontWeight};
      line-height: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.lineHeight};
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  span {
    font-family: "DM Sans", sans-serif;
    font-size: 0.85rem;
    font-weight: 400;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 1.48rem 7.69rem;

    .logo-container {
      .polygon-logo {
        height: 1.82rem;
      }

      h2 {
        font-size: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.fontSize};
      }
    }

    span {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR.fontFamily};
      font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR.fontSize};
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR.fontWeight};
      line-height: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR.lineHeight};
    }
  }
`;
