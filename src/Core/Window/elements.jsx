import styled from 'react-emotion'
import Rnd from 'react-rnd'

export const Frame = styled(Rnd)`
  display: flex !important;
  flex-direction: column;
  overflow: hidden;
  background-color: #ececec;
  border-radius: 6px;
  border: 1px solid #868686;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`

export const Content = styled('div')`
  flex-grow: 1;
`

export const Actions = styled('div')`
  display: flex;
  height: 20px;
`

// Buttons

export const Close = styled('div')`
  height: 20px;
  width: 20px;
`

export const Minimize = styled('div')`
  height: 20px;
  width: 20px;
`

export const Zoom = styled('div')`
  height: 20px;
  width: 20px;
`
