import { Box, css, styled } from '@mui/material'
import { appColors } from 'utils/colors'

export const LayoutWrapper = styled(Box)(
  ({ theme }) => css`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
  `
)
