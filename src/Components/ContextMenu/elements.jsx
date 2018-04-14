import styled from 'react-emotion'
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu'

export const Menu = styled(ContextMenu)`
  cursor: default;
  border: none;
  padding: 3px 0;
  outline: none;
  z-index: 999999999;
  overflow: hidden;
  max-width: 100%;
  min-width: ${({ dropdown }) => dropdown ? 210 : 270}px;
  transition: opacity 0.1s ease;
  box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.25), 0px 0px 3px rgba(0, 0, 0, 0.4);
  text-align: left;
  user-select: none;
  border-radius: 6px;
  backdrop-filter: initial;
  background-color: #e9e7e9;
  ${({ dropdown }) => dropdown ? `
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  ` : null}

  & .react-contextmenu-item:not(.react-contextmenu-item--divider) {
    color: #000;
    height: 20px;
    display: flex;
    outline: 0;
    padding: 0 25px;
    font-size: 14px;
    transition: transform 0.05s ease;
    line-height: 20px;
    font-family: 'San Francisco';
    &:hover {
      color: #fff;
      background-color: #1f7cf7;
    }
  }

  & .react-contextmenu-item--divider {
    height: 2px;
    margin: 5px 0;
    background: rgba(0, 0, 0, 0.07);
    pointer-events: none;
  }

  & .react-contextmenu-item--disabled {
    color: #a2a2a2 !important;
    pointer-events: none !important;
  }
`

export const Action = styled(MenuItem)``

export const Trigger = styled(ContextMenuTrigger)``
