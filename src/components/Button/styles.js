import styled from "styled-components";

export const Container = styled.button`
  font-family: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontFamily};
  font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontSize};
  font-weight: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontWeight};
  line-height: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.lineHeight};
  padding: 12px 24px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: not-allowed;
  }
`;
