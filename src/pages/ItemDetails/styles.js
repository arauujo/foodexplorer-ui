import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "@styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;

  > main {
    padding: 2.61rem 4rem 3.87rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;    

    button.back-button {
      grid-area: back;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;      
      font-family: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD.fontFamily};
      font-size: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD.fontSize};
      font-weight: 500;
      line-height: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD.lineHeight};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      svg {
        height: 32px;
      }
    }

    > img {
      grid-area: img;
      margin: 1.14rem 0;
      width: 18.86rem;
    }

    .details {
      grid-area: details;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.71rem;

      h3 {
        font-family: ${({ theme }) =>
          theme.FONTS.POPPINS_500_MEDIUM.fontFamily};
        font-size: 1.93rem;
        font-weight: ${({ theme }) =>
          theme.FONTS.POPPINS_500_MEDIUM.fontWeight};
        line-height: ${({ theme }) =>
          theme.FONTS.POPPINS_500_MEDIUM.lineHeight};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      p {
        font-family: ${({ theme }) =>
          theme.FONTS.POPPINS_300_REGULAR.fontFamily};
        font-size: 1.16rem;
        font-weight: ${({ theme }) =>
          theme.FONTS.POPPINS_300_REGULAR.fontWeight};
        line-height: ${({ theme }) =>
          theme.FONTS.POPPINS_300_REGULAR.lineHeight};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        text-align: center;
      }

      .ingredients-container {
        display: flex;
        justify-content: center;
        gap: 24px;
        flex-wrap: wrap;

        span {
          padding: 4px 8px;
          background-color: ${({ theme }) => theme.COLORS.DARK_1000};
          border-radius: 5px;
          font-family: ${({ theme }) =>
            theme.FONTS.POPPINS_100_MEDIUM.fontFamily};
          font-size: ${({ theme }) =>
            theme.FONTS.POPPINS_100_MEDIUM.fontSize};
          font-weight: ${({ theme }) =>
            theme.FONTS.POPPINS_100_MEDIUM.fontWeight};
          line-height: ${({ theme }) =>
            theme.FONTS.POPPINS_100_MEDIUM.lineHeight};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      height: 100vh;
      padding: 1.5rem 7.6rem;
      background-color: red;
      display: grid;
      align-items: normal;
      grid-template-columns: auto 2.99rem auto 1fr;
      grid-template-rows: auto 2.62rem auto auto;
      grid-template-areas: 
        "back back back"
        ". . ."
        "img . details"
        "img . actions";
      ;

      > img {
        width: 24.38rem;
      }

      button.back-button {
        justify-self: baseline;
      }

      .details {
        align-items: flex-start;

        h3 {
          font-size: ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM.fontSize};
        }

        p {
          text-align: left;
          font-size: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR.fontSize};
        }
      }
    }
  }
`;

export const Actions = styled.div`
  grid-area: actions;
  margin-top: 3.43rem;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;

  > button.adjust-buttons {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > span {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD.fontFamily};
    font-size: 1.62rem;
    font-weight: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD.fontWeight};
    line-height: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD.lineHeight};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > button.add-button {
    padding: 0.58rem 3.14rem;
    font-size: 0.68rem;
  }

  > button.edit-button {
    width: 100%;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > span {
      font-size: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD.fontSize};
    }

    > button.add-button {
      padding: 0.75rem 1.5rem;
      font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontSize};
    }
  }
`;
