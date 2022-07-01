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
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';

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

const Features = (props: any) => {
  return (
    <Box>
      <CssBaseline />
      <img src="/community-overlay.svg" alt="overlay" width={1440} height={1069} className={styles.overlay} />
      <Container maxWidth="xl" sx={{pl: {sm: 10}, pr: {sm: 10}}} disableGutters>
        <CoverWrapper>
          <Typography variant='h6' sx={{color: props.theme.palette.primary.main}}>Our Community</Typography>
          <Typography variant='h5' sx={{mb: 2, fontWeight: 700, fontSize: {xs: '2rem', md: '2.5rem', lg: '3rem'}}}>
            Community Main Feature
          </Typography>
          <Typography variant='h6' sx={{color: '#656464', mb:4}}>
            The wise man therefore always holds in these matters to this principle of selection.
          </Typography>
        </CoverWrapper>
        <Grid container  spacing={4} sx={{p: '15px 0'}}>
            <Grid item xs={12} lg={1}></Grid>
            <Grid item xs={12} lg={5} >
            <Card sx={{boxShadow: '0px 34px 68px rgba(116, 115, 128, 0.1)', borderRadius: 3, height: '100%'}}>
              <CardContent>
              <List>
                <ListItem>
                  <ListItemAvatar sx={{minWidth: 100}}>
                    <Avatar sx={{
                      width: 66, 
                      height: 66, 
                      p: 1.5, 
                      background: 'linear-gradient(154.49deg, #5CA1FE 6.61%, #217BF4 89.72%)',
                      boxShadow: '0px 10px 22px -2px rgba(109, 171, 255, 0.36)',
                      borderRadius: '24px'
                    }}>
                    <Box
                      component="img"
                      sx={{
                        width: '100%',
                      }}
                      alt="cover"
                      src="/icon-friends.svg"
                    />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="Friends" 
                    secondary="Members, Friends Connection ( like followers ), Private Message" 
                    primaryTypographyProps={{fontWeight: 700, fontSize: '1.6rem'}}
                    secondaryTypographyProps={{fontSize: '1rem', marginTop: 1}}
                  />
                </ListItem>
              </List>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} lg={5}>
            <Card sx={{boxShadow: '0px 34px 68px rgba(116, 115, 128, 0.1)', borderRadius: 3, height: '100%'}}>
              <CardContent>
              <List>
                <ListItem>
                <ListItemAvatar sx={{minWidth: 100}}>
                    <Avatar sx={{
                      width: 66, 
                      height: 66, 
                      p: 1.5, 
                      background: 'linear-gradient(154.49deg, #FF858A 6.61%, #F04148 89.72%)',
                      boxShadow: '0px 8px 22px -2px rgba(248, 87, 94, 0.3)',
                      borderRadius: '24px'
                    }}>
                    <Box
                      component="img"
                      sx={{
                        width: '100%',
                      }}
                      alt="cover"
                      src="/icon-groups.svg"
                    />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="Groups" 
                    secondary="Your users can create groups to let other users to join and talk" 
                    primaryTypographyProps={{fontWeight: 700, fontSize: '1.6rem'}}
                    secondaryTypographyProps={{fontSize: '1rem', marginTop: 1}}
                  />
                </ListItem>
              </List>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} lg={1}></Grid>
        </Grid>

        <Grid container  spacing={4} sx={{p: '15px 0'}}>
            <Grid item xs={12} lg={1}></Grid>
            <Grid item xs={12} lg={5} >
            <Card sx={{boxShadow: '0px 34px 68px rgba(116, 115, 128, 0.1)', borderRadius: 3, height: '100%'}}>
              <CardContent>
              <List>
                <ListItem>
                  <ListItemAvatar sx={{minWidth: 100}}>
                    <Avatar sx={{
                      width: 66, 
                      height: 66, 
                      p: 1.5, 
                      background: 'linear-gradient(154.49deg, #FFD085 6.61%, #FFAF2E 89.72%)',
                      boxShadow: '0px 10px 22px -2px rgba(250, 186, 84, 0.3)',
                      borderRadius: '24px'
                    }}>
                    <Box
                      component="img"
                      sx={{
                        width: '100%',
                      }}
                      alt="cover"
                      src="/icon-forum.svg"
                    />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="Forum" 
                    secondary="Forum is ready by BBPress. Your users can make topics and talk." 
                    primaryTypographyProps={{fontWeight: 700, fontSize: '1.6rem'}}
                    secondaryTypographyProps={{fontSize: '1rem', marginTop: 1}}
                  />
                </ListItem>
              </List>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} lg={5}>
            <Card sx={{boxShadow: '0px 34px 68px rgba(116, 115, 128, 0.1)', borderRadius: 3, height: '100%'}}>
              <CardContent>
              <List>
                <ListItem>
                <ListItemAvatar sx={{minWidth: 100}}>
                    <Avatar sx={{
                      width: 66, 
                      height: 66, 
                      p: 1.5, 
                      background: 'linear-gradient(154.49deg, #5CA1FE 6.61%, #217BF4 89.72%)',
                      boxShadow: '0px 10px 22px -2px rgba(109, 171, 255, 0.36)',
                      borderRadius: '24px'
                    }}>
                    <Box
                      component="img"
                      sx={{
                        width: '100%',
                      }}
                      alt="cover"
                      src="/icon-custom-module.svg"
                    />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="Custom Module" 
                    secondary="You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder." 
                    primaryTypographyProps={{fontWeight: 700, fontSize: '1.6rem'}}
                    secondaryTypographyProps={{fontSize: '1rem', marginTop: 1}}
                  />
                </ListItem>
              </List>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} lg={1}></Grid>
        </Grid>

        <Grid container  spacing={4} sx={{p: '15px 0'}}>
            <Grid item xs={12} lg={1}></Grid>
            <Grid item xs={12} lg={5} >
            <Card sx={{boxShadow: '0px 34px 68px rgba(116, 115, 128, 0.1)', borderRadius: 3, height: '100%'}}>
              <CardContent>
              <List>
                <ListItem>
                  <ListItemAvatar sx={{minWidth: 100}}>
                    <Avatar sx={{
                      width: 66, 
                      height: 66, 
                      p: 1.5, 
                      background: 'linear-gradient(154.49deg, #FF858A 6.61%, #F04148 89.72%)',
                      boxShadow: '0px 8px 22px -2px rgba(248, 87, 94, 0.3)',
                      borderRadius: '24px'
                    }}>
                    <Box
                      component="img"
                      sx={{
                        width: '70%',
                      }}
                      alt="cover"
                      src="/icon-list-builder.svg"
                    />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="List Builder" 
                    secondary="Members, Groups list can be modified by drag & drop live builder." 
                    primaryTypographyProps={{fontWeight: 700, fontSize: '1.6rem'}}
                    secondaryTypographyProps={{fontSize: '1rem', marginTop: 1}}
                  />
                </ListItem>
              </List>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} lg={5}>
            <Card sx={{boxShadow: '0px 34px 68px rgba(116, 115, 128, 0.1)', borderRadius: 3, height: '100%'}}>
              <CardContent>
              <List>
                <ListItem>
                <ListItemAvatar sx={{minWidth: 100}}>
                    <Avatar sx={{
                      width: 66, 
                      height: 66, 
                      p: 1.5, 
                      background: 'linear-gradient(154.49deg, #FFD085 6.61%, #FFAF2E 89.72%)',
                      boxShadow: '0px 10px 22px -2px rgba(250, 186, 84, 0.3)',
                      borderRadius: '24px'
                    }}>
                    <Box
                      component="img"
                      sx={{
                        width: '70%',
                      }}
                      alt="cover"
                      src="/icon-list-scroll.svg"
                    />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary="List Scroll Effects" 
                    secondary="8 different scroll effects are ready. You can always change by your tastes." 
                    primaryTypographyProps={{fontWeight: 700, fontSize: '1.6rem'}}
                    secondaryTypographyProps={{fontSize: '1rem', marginTop: 1}}
                  />
                </ListItem>
              </List>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} lg={1}></Grid>
        </Grid>

        
      </Container>
    </Box>
  );
};
export default Features;
