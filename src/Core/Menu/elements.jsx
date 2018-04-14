import styled from 'react-emotion'

export const Bar = styled('div')`
  display: flex;
  position: absolute;
  padding: 0 24px;
  top: 0;
  left: 0;
  width: 100%;
  height: 24px;
  background-color: rgba(252, 252, 252, 0.95);
  &::after {
    content: '';
    display: block;
    position: absolute;
    border-top: 1px solid rgba(0, 0, 0, 0.32);
    top: 24px;
    left: 0;
    height: 7px;
    width: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.24),
      transparent
    );
  }
  & > .react-contextmenu-wrapper {
    z-index: 1;
  }
`

// prettier-ignore
export const Item = styled('div')`
  padding: 0 10px;
  font-family: 'San Francisco';
  line-height: 24px;
  font-size: 14px;
  user-select: none;
  transition: color 0.1s ease, background-color 0.1s ease;
  cursor: pointer;
  ${({ open }) => open ? `
    color: #f6f8fe;
    background-color: #3784f7;
  ` : null}
  &:hover {
    color: #f6f8fe;
    background-color: #3784f7;
  }
`
