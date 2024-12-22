import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "@styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;

export const HeroSection = styled.section`
  margin: 3.14rem 0.87rem 4.42rem 2.57rem;
  padding: 2.57rem 1.57rem 1.57rem 10.93rem;
  border-radius: 0.21rem;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  position: relative;

  > img {
    max-width: 100%;
    position: absolute;
    bottom: 0;
    left: -30px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding-left: 8rem;

    > img {
      max-width: 9.5rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 10.25rem 7.75rem 3.87rem 7.75rem;
    padding: 5.5rem 6.25rem 5.75rem 37.37rem;
    border-radius: 0.5rem;

    > img {
      width: 38rem;
      left: -3.12rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    > img {
      width: 39.5rem;
    }
  }
`;

export const HeroContent = styled.div`
  h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM.fontFamily};
    font-size: 1.29rem;
    font-weight: 600;
    line-height: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM.lineHeight};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    white-space: nowrap;
  }

  p {
    margin-top: 0.21rem;
    font-family: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR.fontFamily};
    font-size: 0.86rem;
    font-weight: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR.fontWeight};
    line-height: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR.lineHeight};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    h1 {
      font-size: 1.57rem;
      font-weight: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM.fontWeight};
    }

    p {
      margin-top: 0.5rem;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
      font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontSize};
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontWeight};
      line-height: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.lineHeight};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.XL}) {
    h1 {
      font-size: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM.fontSize};
    }
  }
`;

export const MealsSection = styled.section`
  padding: 0 0 0 1.71rem;
  position: relative;
  margin-bottom: 1.71rem;

  h2 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontFamily};
    font-size: 1.29rem;
    font-weight: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontWeight};
    line-height: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.lineHeight};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 1.71rem;
  }  

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 0 7.75rem 3rem 7.75rem;
    padding: 0;

    h2 {
      font-size: ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM.fontSize};
      margin-bottom: 1.44rem
    }
  }
`;
