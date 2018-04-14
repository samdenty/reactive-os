import React from 'react'
import { Container } from './elements'

class Desktop extends React.PureComponent {
  render() {
    return <Container>{this.props.children}</Container>
  }
}

export default Desktop

export { default as DesktopIcon } from './icon'
