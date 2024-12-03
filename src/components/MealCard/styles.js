import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "@styles/deviceBreakpoints";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.86rem;
  max-width: 15rem;
  height: 20.86rem;
  padding: 0 1.71rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > .favorite-button {
    position: absolute;
    z-index: 1;
    top: 1.14rem;
    right: 1.14rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > img {
    width: 6.29rem;
    height: 6.29rem;
    object-fit: cover;
    border-radius: 50%;
  }

  > span.price {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
    font-size: 1.14rem;
    font-weight: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontWeight};
    line-height: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.lineHeight};
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 1.5rem;
    max-width: 19rem;
    height: 28.87rem;
    gap: 0.94rem;

    > img {
      width: 11rem;
      height: 11rem;
    }

    > p {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR.fontFamily};
      font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR.fontSize};
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR.fontWeight};
      line-height: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR.lineHeight};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      // propriedades para limitar o número de linhas de um texto e truncar o overflow com um ellipsis
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -moz-line-clamp: 2;
      -ms-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      -ms-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }

    > span.price {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST_REGULAR.fontFamily};
      font-size: ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST_REGULAR.fontSize};
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST_REGULAR.fontWeight};
      line-height: ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST_REGULAR.lineHeight};
    }
  }
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  > h3 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontFamily};
    font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontSize};
    font-weight: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontWeight};
    line-height: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.lineHeight};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  > button.details-button {
    display: flex;
    padding-left: 2px;
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    svg {
      width: 0.76rem;
      height: 0.76rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    > h3 {
      font-family: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD.fontFamily};
      font-weight: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD.fontWeight};
      line-height: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD.lineHeight};
      font-size: ${({ theme }) => theme.FONTS.POPPINS_300_BOLD.fontSize};
    }

    > button.details-button {
      svg {
        width: 1.29rem;
        height: 1.29rem;
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 14px;

  > span.quantity {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
    font-size: 1.14rem;
    font-weight: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontWeight};
    line-height: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.lineHeight};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > button.adjust-buttons {
    display: flex;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > button.add-button {
    width: 100%;
    padding: 4px 0;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-wrap: nowrap;

    > span.quantity {
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD.fontFamily};
      font-size: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD.fontSize};
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD.fontWeight};
      line-height: ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD.lineHeight};
    }

    > button.add-button {
      padding: 0.75rem 1.5rem;
    }
  }
`;
