import { Box, Chip, css, styled } from '@mui/material'
import { transientProps } from 'utils/transientProps'
import { appColors } from 'utils/colors'
export const LayoutWrapperStyled = styled(Box)(
  ({ theme }) => css`
    width: 50%;
    padding: ${theme.spacing(2)};
    margin: auto;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
)

export const InputWrapperStyled = styled(Box)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
  `
)

export const WrapperChipsStyled = styled(
  Box,
  transientProps
)<{ $hasBackground?: boolean }>(
  ({ theme, $hasBackground }) => css`
    display: flex;
    gap: ${theme.spacing(2)};
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    ${$hasBackground &&
    css`
      background: ${appColors.lightGray};
      padding: ${theme.spacing(2)};
      border-radius: ${theme.shape.borderRadius * 2}px;
    `}
  `
)

export const ChipStyled = styled(
  Chip,
  transientProps
)<{ $bgColor?: string }>(
  ({ $bgColor }) => css`
    text-transform: capitalize;
    color: ${appColors.white};
    ${$bgColor &&
    css`
      background-color: ${$bgColor};
      &:hover {
        background-color: ${$bgColor};
      }
    `};
  `
)
