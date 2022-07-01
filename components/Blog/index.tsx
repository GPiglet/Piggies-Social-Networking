import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CoverWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: '100px',
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '50px',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Blog = (props: any) => {
  return (
    <Box>
      <CssBaseline />
      <Container maxWidth="xl" sx={{pl: {sm: 10}, pr: {sm: 10}}} disableGutters>
        <CoverWrapper>
          <Typography variant='h6' sx={{color: props.theme.palette.primary.main}}>Get Our Application</Typography>
          <Typography variant='h5' sx={{mb: 2, fontWeight: 700, fontSize: {xs: '2rem', md: '2.5rem', lg: '3rem'}}}>
            Latest News
          </Typography>
        </CoverWrapper>
        <Grid container  spacing={4} sx={{p: '15px 0', mt: '10px', mb: '100px'}}>
            <Grid item xs={12} md={4}>
              <Stack alignItems={'center'} spacing={1}>
                  <Box
                  component="img"
                  sx={{
                    width: '100%',
                    mb: 2,
                    borderRadius: '14px',
                  }}
                  alt="It Does Not Matter Hows Slowly go as Long"
                  src="/pexels-meruyert-gonullu.png"
                />
                <Typography variant="h6">
                  It Does Not Matter Hows Slowly go as Long
                </Typography>
                <StyledButton variant="text" sx={{color: '#656464'}}>
                  Continue Reading <ArrowForwardIcon fontSize="small" sx={{ml: 1}}/>
                </StyledButton>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Stack alignItems={'center'} spacing={1}>
                  <Box
                  component="img"
                  sx={{
                    width: '100%',
                    mb: 2,
                    borderRadius: '14px',
                  }}
                  alt="Netbook Network Added New Photo Filter"
                  src="/pexels-cottonbro.png"
                />
                <Typography variant="h6">
                  Netbook Network Added New Photo Filter
                </Typography>
                <StyledButton variant="text" sx={{color: '#656464'}}>
                  Continue Reading<ArrowForwardIcon fontSize="small" sx={{ml: 1}}/>
                </StyledButton>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack alignItems={'center'} spacing={1}>
                  <Box
                  component="img"
                  sx={{
                    width: '100%',
                    mb: 2,
                    borderRadius: '14px',
                  }}
                  alt="We Optimised Netbooks Better Navigation"
                  src="/pexels-pixabay.png"
                />
                <Typography variant="h6">
                  We Optimised Netbooks Better Navigation
                </Typography>
                <StyledButton variant="text" sx={{color: '#656464'}}>
                  Continue Reading<ArrowForwardIcon fontSize="small" sx={{ml: 1}}/>
                </StyledButton>
              </Stack>
            </Grid>

        </Grid>
      </Container>
    </Box>
  );
};
export default Blog;
