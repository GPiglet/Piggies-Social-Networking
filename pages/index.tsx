import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Aboutus from '../components/Aboutus'
import Features from '../components/Features'
import OurTeam from '../components/OurTeam'
import CTA from '../components/CTA'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#217BF4',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Social Piggies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Intro />
      <Aboutus theme={theme}/>
      <Features theme={theme}/>
      <OurTeam theme={theme} />
      <CTA theme={theme} />
      <Blog theme={theme} />
      <Footer theme={theme} />
    </ThemeProvider >
  )
}

export default Home
