import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 8px;

  &:has(input:focus) {
    outline: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  > label {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
    font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontSize};
    font-weight: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontWeight};
    line-height: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.lineHeight};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .input-wrapper {
    width: 100%;
    display: flex;
    align-items: center;

    > input {
      width: 100%;
      padding: 16px 14px;
      background: transparent;
      border-radius: 8px;
      font-family: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontFamily};
      font-size: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontSize};
      font-weight: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.fontWeight};
      line-height: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR.lineHeight};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }
`;
