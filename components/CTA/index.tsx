import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import styles from '../../styles/Intro.module.css';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const CoverWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: 100,
  paddingBottom: 120,
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    textAlign: 'left'
  },
}));

const Intro = (props: any) => {
  return (
    <Box>
      <CssBaseline />
      <img src="/cta-overlay.svg" alt="overlay" width={1440} height={560} className={styles.overlay} />
      <Container maxWidth="xl" sx={{pl: {sm: 10}, pr: {sm: 10}}} disableGutters>
        <Grid container>
          <Grid item xs={12} md={5}>
            <CoverWrapper>
              <Typography variant='h6' sx={{color: props.theme.palette.primary.main}}>Get Our Application</Typography>
              <Typography variant='h3' sx={{mt: 3, mb: 2, fontWeight: 700, fontSize: {xs: '2rem', md: '2.5rem', lg: '3rem'}}}>
                You Can Easily Find This App…!
              </Typography>
              <Typography variant='h6' sx={{color: '#656464', mb:4}}>
                I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="text">
                  <Box
                    component="img"
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'scale-down'
                    }}
                    alt="apple store"
                    src="/apple-store.png"
                  />
                </Button>
                <Button variant="text">
                  <Box
                    component="img"
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'scale-down'
                    }}
                    alt="android store"
                    src="/android-store.png"
                  />
                </Button>
              </Stack>
            </CoverWrapper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              component="img"
              sx={{
                display: {xs: 'none', md: 'block'},
                height: '100%',
                width: '100%',
                objectFit: 'scale-down'
              }}
              alt="cover"
              src="/mobile muckup.png"
            />
          </Grid>
        </Grid>
      </Container>
      
      {/* <img src="/im1.svg" alt="overlay" width={644} height={551} className={styles.cover} /> */}
    </Box>
  );
};
export default Intro;
