import { Box, css, styled } from '@mui/material'

export const LayoutWrapperStyled = styled(Box)(
  ({ theme }) => css`
    width: 50%;
    padding: ${theme.spacing(2)};
    margin: auto;
    height: fit-content;
    display: flex;
    flex-direction: column;
  `
)

export const InputWrapperStyled = styled(Box)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
  `
)

export const WrapperChipsStyled = styled(Box)(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(2)};
    flex-wrap: wrap;
  `
)
