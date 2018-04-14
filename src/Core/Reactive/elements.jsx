import styled, { injectGlobal } from 'react-emotion'

export const Container = styled('main')`
  position: relative;
  background-image: url('https://www.howtogeek.com/wp-content/uploads/2016/06/Screen-Shot-2016-06-24-at-12.33.54-PM-2_stomped-650x301.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 100%;
  height: 100%;
  & > .react-contextmenu-wrapper {
    width: 100%;
    height: 100%;
  }
`

injectGlobal`
  @font-face {
    font-family: 'San Francisco';
    font-weight: 500;
    src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff2');
  }
`
