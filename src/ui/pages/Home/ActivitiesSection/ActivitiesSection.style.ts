import { Box, styled, css, Typography, Grid } from '@mui/material'
import { transientProps } from 'utils/transientProps'
import { appColors } from 'utils/colors'

export const SectionWrapper = styled(Grid)(
  ({ theme }) => css`
    padding: ${theme.spacing(1, 9, 9, 1)};
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1080px;
    @media only screen and (max-width: 624px) {
      justify-content: space-around;
      gap: 2rem;
    }
  `
)

export const ActivityCard = styled(
  Box,
  transientProps
)<{ $cardImage: string }>(
  ({ theme, $cardImage }) => css`
    margin: ${theme.spacing(2)};
    min-height: 300px;
    display: flex;
    flex-direction: column;
    padding-top: ${theme.spacing(1)};
    background-image: url(${$cardImage});
    border-radius: 20px;
    align-items: center;
    align-content: center;
    text-align: center;
    justify-content: flex-end;
    padding-bottom: ${theme.spacing(7)};
    box-sizing: border-box;
    gap: ${theme.spacing(2)};
    z-index: 1;
    position: relative;
    background-position-y: 30%;
  `
)

export const StyledOverlay = styled(Box)(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${appColors.black} 100%);
    z-index: 2;
  `
)

export const StyledTitle = styled(Typography)(
  ({ theme }) => css`
    z-index: 4;
    font-weight: 600;
  `
)
export const StyledDescription = styled(Typography)(
  ({ theme }) => css`
    font-weight: 600;
    font-size: 1rem;
    z-index: 4;
  `
)

// )
// export const MainActivity = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   width: 100%;
//   height: 24rem;

//   @media only screen and (max-width: 624px) {
//     flex-direction: column;
//     width: 95%;
//     height: 30rem;
//     gap: 0.5rem;
//     padding: 0.3rem;
//     margin-bottom: 0.4rem;
//   }
// `

// export const ActivityIMG2 = styled.img`
//   width: 22rem;
//   border-radius: 0rem 1rem 1rem 0rem;
//   @media only screen and (max-width: 624px) {
//     border-radius: 1rem 1rem 1rem 1rem;
//     position: relative;
//     top: 2rem;
//     z-index: -1;
//   }
// `

// export const MainActInfoDiv = styled.div`
//   display: flex;
//   gap: 2rem;
//   flex-direction: column;
//   width: 30%;
//   border: 3px solid white;
//   padding: 2rem;
//   border-radius: 0.4rem;

//   @media only screen and (max-width: 624px) {
//     background-color: rgba(0, 0, 0, 0.8);
//     padding: 1rem;
//     position: relative;
//     top: 2rem;
//     width: 100%;
//     border-radius: 0.4rem;
//     justify-content: center;
//     align-items: center;
//   }
// `
// export const MainActTitle = styled.h2`
//   color: var(--naranjasuyai);
//   font-size: 3rem;
//   @media only screen and (max-width: 624px) {
//     font-size: 1rem;
//   }
// `
// export const MainInfo = styled.p``
// export const SecondaryInfo = styled.p`
//   color: var(--naranjasuyai);
// `
// export const MainActivity2 = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   width: 100%;
//   height: 24rem;
//   @media only screen and (max-width: 624px) {
//     flex-direction: column-reverse;
//     width: 95%;
//     height: 32rem;
//     gap: 0.5rem;
//     padding: 0.3rem;
//     margin-bottom: 0.4rem;
//   }
// `
