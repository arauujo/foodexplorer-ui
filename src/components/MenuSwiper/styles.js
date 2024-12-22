import styled from "styled-components";
import { Swiper } from "swiper/react";
import { DEVICE_BREAKPOINTS } from "@styles/deviceBreakpoints";

export const StyledSwiper = styled(Swiper)`
  width: 100%;

  .swiper-slide {
    width: fit-content;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    .swiper-button-prev,
    .swiper-button-next {
      top: 45%;
      display: flex;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      &::before, &::after {
        font-size: 1.72rem;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 23%;
      height: 100%;
      background: ${({ theme }) => theme.COLORS.GRADIENTS_100_LEFT};
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      width: 23%;
      height: 100%;
      background: ${({ theme }) => theme.COLORS.GRADIENTS_100_RIGHT};
    }
  }
`;
