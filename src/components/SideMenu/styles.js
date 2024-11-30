import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 2.57rem;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }

  > .side-menu-content {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: baseline;

    .input-wrapper svg {
      margin-left: 14px;
    }

    button {
      padding: 10px;
      font-size: 1.71rem;
      font-weight: 300;
      line-height: 140%;
      text-align: left;
      border-radius: 0;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

      &:first-of-type {
        margin-top: 2.57rem; // Aplicar margem superior apenas no primeiro botão.
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.14rem;
  padding: 4rem 2rem 1.71rem 2rem;
  width: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_700};
`;

export const Button = styled.button`
  display: flex;
  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.fontFamily};
  font-size: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.fontSize};
  font-weight: normal;
  line-height: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_BOLD.lineHeight};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  white-space: nowrap;
`;
