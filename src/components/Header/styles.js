import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  width: 100%;
  padding: 4rem 2rem 1.71rem 2rem;
  position: relative;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  > .logo-container {
    display: flex;
    align-items: center;
    justify-self: center;
    gap: 10px;

    svg.polygon-logo {
      height: 1.79rem;
    }

    h1 {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.fontFamily};
      font-size: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.fontSize};
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.fontWeight};
      line-height: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.lineHeight};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      white-space: nowrap;
    }

    span {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR.fontFamily};
      font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR.fontSize};
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR.fontWeight};
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    gap: 32px;
    padding: 1.75rem 7.69rem;

    > .desktop-only {
      display: flex;
    }

    > .mobile-only {
      display: none;
    }

    > .logo-container {
      @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        align-items: center;
        gap: 0;
        cursor: pointer;

        svg.polygon-logo {
          height: 1.87rem;
          margin-right: 10px;
        }

        span {
          grid-column: 2;
          justify-self: end;
        }
      }
    }

    .input-wrapper {
      justify-content: center;

      input {
        width: 17.5rem;
      }
    }
  }
`;

export const Menu = styled.button`
  background: none;
  display: flex;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const OrdersButton = styled.button`
  background-color: transparent;
  position: relative;
  display: flex;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const OrderQuantity = styled.div`
  position: absolute;
  z-index: 1;
  top: -4px;
  right: -6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontFamily};
  font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontSize};
  font-weight: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontWeight};
`;

export const Logout = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
