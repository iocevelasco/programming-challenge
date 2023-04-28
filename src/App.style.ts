import { Box, styled, css } from '@mui/material'
import { appColors } from 'utils/colors'

export const AppContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${appColors.whiteSmoke};
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `
)
