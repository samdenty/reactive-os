import styled, { injectGlobal } from 'react-emotion'

export const Container = styled('main')`
  position: relative;
  background-image: url('https://9to5mac.files.wordpress.com/2016/06/sierra.jpg?quality=82&strip=all');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 100%;
  height: 100%;
  & > .react-contextmenu-wrapper {
    width: 100%;
    height: 100%;
  }
  & * {
    box-sizing: border-box;
    user-select: none;
    user-drag: none;
  }
`

injectGlobal`
  @font-face {
    font-family: 'San Francisco';
    font-weight: 500;
    src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff2');
  }
`
