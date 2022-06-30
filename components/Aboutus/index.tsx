import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import styles from '../../styles/Intro.module.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const CoverWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    textAlign: 'left'
  },
}));

const Aboutus = (props: any) => {
  return (
    <Box>
      <CssBaseline />
      <Container maxWidth="xl" sx={{pl: {sm: 10}, pr: {sm: 10}}} disableGutters>
        <Grid container spacing={4} sx={{mt: {xs: '200px', md: '100px'}}}>
          <Grid item xs={12} md={5} sx={{display: 'flex', alignItems: 'center'}}>
            <CoverWrapper>
              <Typography variant='h6' sx={{color: props.theme.palette.primary.main}}>
                Whats Piggies?
              </Typography>  
              <Typography variant='h4' sx={{mt: 3, mb: 2, fontWeight: 700, fontSize: {xs: '2rem', md: '2.5rem', lg: '3rem'}}}>
                Why Join to Piggies Social Network?
              </Typography>
              <Typography variant='h6' sx={{color: '#656464', mb:4}}>
                Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.
              </Typography>
              <List dense={true}>
                <ListItem>
                  <ListItemAvatar sx={{minWidth: '30px'}}>
                    <Avatar sx={{width: '20px', height: '20px', bgcolor: 'rgba(33, 123, 244, 0.1)'}}>
                      <CircleIcon sx={{width: '0.5em', height: '0.5em', color: props.theme.palette.primary.main}}/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primaryTypographyProps={{fontSize: '18px'}}>Groups</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar sx={{minWidth: '30px'}}>
                    <Avatar sx={{width: '20px', height: '20px', bgcolor: 'rgba(33, 123, 244, 0.1)'}}>
                      <CircleIcon sx={{width: '0.5em', height: '0.5em', color: props.theme.palette.primary.main}}/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primaryTypographyProps={{fontSize: '18px'}}>Messages</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar sx={{minWidth: '30px'}}>
                    <Avatar sx={{width: '20px', height: '20px', bgcolor: 'rgba(33, 123, 244, 0.1)'}}>
                      <CircleIcon sx={{width: '0.5em', height: '0.5em', color: props.theme.palette.primary.main}}/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primaryTypographyProps={{fontSize: '18px'}}>Share</ListItemText>
                </ListItem>
              </List>
            </CoverWrapper>
          </Grid>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={3} sx={{display: 'flex', alignItems: 'center'}}>
            <Box
              component="img"
              sx={{
                width: '100%',
                borderRadius: '14px',
              }}
              alt="about us"
              src="/about1.png"
            />
          </Grid>
          <Grid item xs={12} md={3} sx={{display: 'flex', alignItems: 'center'}}>
            <Stack spacing={4} sx={{marginLeft: 'auto', marginRight: 'auto'}}>
            <Box
              component="img"
              sx={{
                width: '100%',
                borderRadius: '14px',
              }}
              alt="about us"
              src="/about2.png"
            />
            <Box
              component="img"
              sx={{
                width: '100%',
                borderRadius: '14px',
              }}
              alt="about us"
              src="/about3.png"
            />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Aboutus;
