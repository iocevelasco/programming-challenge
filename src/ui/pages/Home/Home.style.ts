import { Box, styled, css } from '@mui/material'

export const LadingPageWrapper = styled(Box)(
  ({ theme }) => css`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-top: ${theme.spacing(1)};
  `
)
