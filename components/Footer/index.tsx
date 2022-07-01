import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';

const BackgroundWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#2B2B39',
  padding: '10px 20px',
  [theme.breakpoints.up('md')]: {
    padding: '30px 60px',
  },
}));

const FooterWrapper = styled('div')(({ theme }) => ({
  backgroundColor: '#20202d',
  padding: '10px 20px',
  [theme.breakpoints.up('md')]: {
    padding: '30px 150px',
  },
}));

const Subscribe = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '1px solid #fff',
  borderRadius: '14px',
  height: '50px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  marginRight: theme.spacing(6),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
  },
}));

const SubscribeButton = styled(Button)(({ theme }) => ({
  height: '100%',
  backgroundColor: '#fff',
  borderRadius: '12px',
  color: '#2b2b39',
  float: 'right',
  '&:hover': {
    backgroundColor: '#fff'
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  fontSize: '14px',
  height: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Footer = (props: any) => {
  return (
    <>
    <BackgroundWrapper>
      <CssBaseline />
      <Container maxWidth="xl" sx={{pl: {sm: 10}, pr: {sm: 10}}} disableGutters>
        <Grid container>
          <Grid item xs={3} md={2}>
            <List
              component="nav"
              subheader={
                <ListSubheader component="div" sx={{backgroundColor: 'transparent', fontSize: '18px', color: '#fff'}}>
                  Home
                </ListSubheader>
              }
            >
              <ListItemButton sx={{color: '#e7e7e7'}}>Home</ListItemButton>
              <ListItemButton sx={{color: '#e7e7e7'}}>Community</ListItemButton>
              <ListItemButton sx={{color: '#e7e7e7'}}>Events</ListItemButton>
              <ListItemButton sx={{color: '#e7e7e7'}}>Contact</ListItemButton>
            </List>
          </Grid>
          <Grid item xs={3} md={2}>
            <List
              component="nav"
              subheader={
                <ListSubheader component="div" sx={{backgroundColor: 'transparent', fontSize: '18px', color: '#fff'}}>
                  Resources
                </ListSubheader>
              }
            >
              <ListItemButton sx={{color: '#e7e7e7'}}>Blog</ListItemButton>
              <ListItemButton sx={{color: '#e7e7e7'}}>News</ListItemButton>
              <ListItemButton sx={{color: '#e7e7e7'}}>Guides</ListItemButton>
              <ListItemButton sx={{color: '#e7e7e7'}}>Help Center</ListItemButton>
            </List>
          </Grid>
          <Grid item xs={3} md={2}>
            <List
              component="nav"
              subheader={
                <ListSubheader component="div" sx={{backgroundColor: 'transparent', fontSize: '18px', color: '#fff'}}>
                  Community
                </ListSubheader>
              }
            >
              <ListItemButton sx={{color: '#e7e7e7'}}>NewsFeed</ListItemButton>
              <ListItemButton sx={{color: '#e7e7e7'}}>Profile</ListItemButton>
              <ListItemButton sx={{color: '#e7e7e7'}}>Friends</ListItemButton>
              <ListItemButton sx={{color: '#e7e7e7'}}>Forums</ListItemButton>
            </List>
          </Grid>
          <Grid item xs={3} md={2}>
            <List
              component="nav"
              subheader={
                <ListSubheader component="div" sx={{backgroundColor: 'transparent', fontSize: '18px', color: '#fff'}}>
                  Main links
                </ListSubheader>
              }
            >
              <ListItemButton sx={{color: '#e7e7e7'}}>Members</ListItemButton>
              <ListItemButton sx={{color: '#e7e7e7'}}>Activity</ListItemButton>
              <ListItemButton sx={{color: '#e7e7e7'}}>Groups</ListItemButton>
              <ListItemButton sx={{color: '#e7e7e7'}}>Private Group</ListItemButton>
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <List
              component="nav"
              subheader={
                <ListSubheader component="div" sx={{backgroundColor: 'transparent', fontSize: '18px', color: '#fff', p: 0}}>
                  Subscribe Cirkle Newsletter
                </ListSubheader>
              }
            >
              <ListItemText sx={{color: '#e7e7e7', mt: '18px', mb: '18px'}} primaryTypographyProps={{fontSize: '16px'}}>Subscribe to be the first one to know about updates. Enter your email</ListItemText>
              <ListItem sx={{color: '#e7e7e7', pl: 0}}>
                <Subscribe>
                  <SubscribeButton>
                    Subscribe
                  </SubscribeButton>
                  <StyledInputBase
                    placeholder="Email Address"
                    inputProps={{ 'aria-label': 'Email' }}
                  />
                </Subscribe>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </BackgroundWrapper>
    <FooterWrapper>
      <Grid container textAlign={'center'}>
        <Grid item xs={12} md={4}>
          <Typography sx={{color: '#f6f6f6', textAlign: {md: 'left'}}}>Besnik Creative Agency</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{color: '#fff'}}>Social Piggies Network</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction='row' spacing={1} sx={{justifyContent: {xs: 'center', md: 'flex-end'}}}>
          <Avatar sx={{bgcolor: '#fff'}}><TwitterIcon sx={{color: "#2b2b39"}}/></Avatar>
          <Avatar sx={{bgcolor: '#fff'}}><InstagramIcon sx={{color: "#2b2b39"}}/></Avatar>
          <Avatar sx={{bgcolor: '#fff'}}><FacebookIcon sx={{color: "#2b2b39"}}/></Avatar>
          <Avatar sx={{bgcolor: '#fff'}}><LinkedInIcon sx={{color: "#2b2b39"}}/></Avatar>
          </Stack>
        </Grid>
      </Grid>
    </FooterWrapper>
    </>
  );
};
export default Footer;
