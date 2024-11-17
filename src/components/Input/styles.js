import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
    font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontSize};
    font-weight: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontWeight};
    line-height: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.lineHeight};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    padding: 16px 14px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
    font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontSize};
    font-weight: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontWeight};
    line-height: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.lineHeight};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border-radius: 8px;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};      
    }
  }
`;
