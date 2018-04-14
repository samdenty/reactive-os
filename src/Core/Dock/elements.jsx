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
  box-sizing: border-box;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0px -2px 15px 0px rgba(0, 0, 0, 0.16);
`

export const Item = styled('div')`
  padding: 0 10px;
  font-family: 'San Francisco';
  line-height: 24px;
  font-size: 14px;
  user-select: none;
  transition: color 0.1s ease, background-color 0.1s ease;
  cursor: pointer;
  ${({ open }) => (open ? `
    color: #f6f8fe;
    background-color: #3784f7;
  ` : null)}
  &:hover {
    color: #f6f8fe;
    background-color: #3784f7;
  }
`
