import styled from 'react-emotion'

export const Container = styled('div')`
  width: 0;
  max-width: 100%;
  height: 100%;
  padding: 34px 16px 74px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const Item = styled('div')`
  cursor: pointer;
  position: relative;
  width: 55px;
  height: 55px;
  padding: 5px;
  & .react-contextmenu-wrapper {
    width: 100%;
    height: 100%;
  }
`

export const Icon = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${({ logo }) => logo});
  transition: filter 0.2s ease;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  &:hover {
    filter: brightness(1.05);
  }
  &:active {
    filter: brightness(0.8);
  }
`
