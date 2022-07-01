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
  paddingTop: 220,
  paddingBottom: 120,
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    textAlign: 'left'
  },
}));

const Intro = () => {
  return (
    <Box>
      <CssBaseline />
      <img src="/overlay.svg" alt="overlay" width={1440} height={746} className={styles.overlay} />
      <Container maxWidth="xl" sx={{pl: {sm: 10}, pr: {sm: 10}}} disableGutters>
        <Grid container>
          <Grid item xs={12} md={5}>
            <CoverWrapper>
              <Chip label="Netbook community" sx={{p: 2, color: 'rgb(33, 123, 244)', bgcolor: 'rgba(33, 123, 244, 0.1)', borderRadius: '8px'}}/>
              <Typography variant='h3' sx={{mt: 3, mb: 2, fontWeight: 700, fontSize: {xs: '2rem', md: '2.5rem', lg: '3rem'}}}>
                Your Solutions For Community!
              </Typography>
              <Typography variant='h6' sx={{color: '#656464', mb:4}}>
                More than 2 billion people in over countries use socibook to stay in touch with friends & family.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" sx={{textTransform: 'none', padding: '18px 48px', borderRadius: '12px'}} >
                  About More
                </Button>
                <Button variant="outlined" sx={{textTransform: 'none', padding: '18px 48px', borderRadius: '12px'}}>
                  Invite Friend
                </Button>
              </Stack>
            </CoverWrapper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              component="img"
              sx={{
                display: {xs: 'none', md: 'block'},
                marginTop: '30px',
                height: '100%',
                width: '100%',
                objectFit: 'scale-down'
              }}
              alt="cover"
              src="/cover.png"
            />
          </Grid>
        </Grid>
      </Container>
      
      {/* <img src="/im1.svg" alt="overlay" width={644} height={551} className={styles.cover} /> */}
    </Box>
  );
};
export default Intro;
