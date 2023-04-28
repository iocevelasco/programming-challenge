import { Box, styled, css } from '@mui/material'

export const SectionWrapper = styled(Box)(
  ({ theme }) => css`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing(6, 0, 3, 0)};
    align-items: center;
    gap: ${theme.spacing(5)};
  `
)
