import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontSize};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR.fontSize};
    }
  }

  body {
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    -webkit-font-smoothing: antialiased;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &::-webkit-scrollbar {
    width: 0.5rem; 
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb:horizontal:hover {
    cursor: ew-resize;
  }

  &::-webkit-scrollbar-thumb:vertical:hover {
    cursor: n-resize;
  }

  body, input, label, button, textarea {
    font-size: 1rem;
    outline: none;
    border: none;
  }

  body, input, label, textarea {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
  }

  button {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR.fontFamily};
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }

  button:focus, input:focus, textarea:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  }
`;