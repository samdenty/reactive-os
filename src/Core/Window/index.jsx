import React from 'react'
import { Frame, Content, Close, Minimize, Zoom } from './elements'
import Actions from './actions'

class Window extends React.PureComponent {
  render() {
    return (
      <Frame
        default={{
          x: 200,
          y: 60,
          width: 320,
          height: 200
        }}>
        <Actions>
          <Close />
          <Minimize />
          <Zoom />
        </Actions>
        <Content>{this.props.children}</Content>
      </Frame>
    )
  }
}

export default Window
