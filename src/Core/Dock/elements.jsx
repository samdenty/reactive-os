import styled from 'react-emotion'

export const Dock = styled('div')`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: fit-content;
  height: 64px;
  background-color: rgba(252, 252, 252, 0.7);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0px -2px 15px 0px rgba(0, 0, 0, 0.16);
`

export const Icon = styled('div')`
  position: relative;
  cursor: pointer;
  width: 55px;
  margin: 0 3px;
  height: 90%;
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
  &::after {
    content: '';
    position: absolute;
    display: block;
    bottom: calc(0px - 10%);
    left: 50%;
    transform: translate(-50%, 0);
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #2a2a2b;
  }
`
