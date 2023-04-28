import { Box, css, styled } from '@mui/material'
import { appColors } from 'utils/colors'

export const LandingLayoutWrapper = styled(Box)(
  ({ theme }) => css`
    width: 100%;
    height: fit-content;
    display: flex;
    background-color: ${appColors.black};
    flex-direction: column;
  `
)
