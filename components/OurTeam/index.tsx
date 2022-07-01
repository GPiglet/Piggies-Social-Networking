import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import styles from '../../styles/Intro.module.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const CoverWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: '50px',
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '100px',
  },
}));

const TabWrapper = styled('div')(({ theme }) => ({
  background: alpha(theme.palette.primary.main, 0.06),
  borderRadius: '14px',
  padding: 10,
}));

const OurTeam = (props: any) => {
  return (
    <Box>
      <CssBaseline />
      <Container maxWidth="xl" sx={{pl: {sm: 10}, pr: {sm: 10}}} disableGutters>
        <CoverWrapper>
          <Typography variant='h6' sx={{color: props.theme.palette.primary.main}}>Valuable Team</Typography>
          <Typography variant='h5' sx={{mb: 2, fontWeight: 700, fontSize: {xs: '2rem', md: '2.5rem', lg: '3rem'}}}>
            Our Active Members
          </Typography>
          <Typography variant='h6' sx={{color: '#656464', mb:4}}>
            when an unknown printer took a galley of type and meeting fari scrambled it.
          </Typography>
          <TabWrapper>
            <Button variant="text" sx={{p: '12px 50px', color: 'rgba(47, 44, 74, 0.8)', fontSize: '1rem', fontWeight: 700, textTransform: 'none'}}>Newest</Button>
            <Button variant="text" sx={{p: '12px 50px', color: 'rgba(47, 44, 74, 0.8)', fontSize: '1rem', fontWeight: 700, textTransform: 'none'}}>Popular</Button>
            <Button variant="contained" sx={{p: '12px 50px', fontSize: '1rem', fontWeight: 700, textTransform: 'none', borderRadius: '14px'}}>Active</Button>
          </TabWrapper>
        </CoverWrapper>
        <Grid container  spacing={4} sx={{p: '15px 0', mt: '10px', mb: '100px'}}>
            <Grid item xs={12} sm={6} md={3}>
            <Card sx={{boxShadow: '0px 34px 68px rgba(116, 115, 128, 0.1)', borderRadius: 3, height: '100%', padding: 1}}>
              <CardContent>
                <Stack alignItems={'center'} spacing={1}>
                  <Avatar alt="Fahim Rahman" src="/member1.png" 
                    sx ={{
                      width: '70%',
                      height: '70%',
                      backgroundImage: 'url(/member-overlay.svg)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      marginBottom: '16px'
                    }}
                    imgProps={{style:{padding: '16px', borderRadius: '50%'}}}
                  />
                  <Typography variant="h6">
                    Fahim Rahman
                  </Typography>
                  <Typography sx={{color: '#656464'}}>
                    @Rahman
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
            <Card sx={{border: '2px solid rgba(243, 243, 243, 0.5)', borderRadius: 3, height: '100%', padding: 1}}>
              <CardContent>
                <Stack alignItems={'center'} spacing={1}>
                  <Avatar alt="Kazi Rahman" src="/member2.png" 
                    sx ={{
                      width: '70%',
                      height: '70%',
                      backgroundImage: 'url(/member-overlay.svg)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      marginBottom: '16px'
                    }}
                    imgProps={{style:{padding: '16px', borderRadius: '50%'}}}
                  />
                  <Typography variant="h6">
                    Kazi Rahman
                  </Typography>
                  <Typography sx={{color: '#656464'}}>
                    @Rahman
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <Card sx={{border: '2px solid rgba(243, 243, 243, 0.5)', borderRadius: 3, height: '100%', padding: 1}}>
              <CardContent>
                <Stack alignItems={'center'} spacing={1}>
                  <Avatar alt="Masterero Ali" src="/member3.png" 
                    sx ={{
                      width: '70%',
                      height: '70%',
                      backgroundImage: 'url(/member-overlay.svg)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      marginBottom: '16px'
                    }}
                    imgProps={{style:{padding: '16px', borderRadius: '50%'}}}
                  />
                  <Typography variant="h6">
                    Masterero Ali
                  </Typography>
                  <Typography sx={{color: '#656464'}}>
                    @Master
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <Card sx={{border: '2px solid rgba(243, 243, 243, 0.5)', borderRadius: 3, height: '100%', padding: 1}}>
              <CardContent>
                <Stack alignItems={'center'} spacing={1}>
                  <Avatar alt="Alia Karon" src="/member4.png" 
                    sx ={{
                      width: '70%',
                      height: '70%',
                      backgroundImage: 'url(/member-overlay.svg)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      marginBottom: '16px'
                    }}
                    imgProps={{style:{padding: '16px', borderRadius: '50%'}}}
                  />
                  <Typography variant="h6">
                    Alia Karon
                  </Typography>
                  <Typography sx={{color: '#656464'}}>
                    @Alia
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
            </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default OurTeam;
