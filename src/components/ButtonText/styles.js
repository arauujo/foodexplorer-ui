import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontFamily};
  font-size: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontSize};
  font-weight: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.fontWeight};
  line-height: ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM.lineHeight};
`;
