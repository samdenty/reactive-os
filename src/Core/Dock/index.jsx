import React from 'react'
import { Dock } from './elements'

class DockBar extends React.PureComponent {
  render() {
    return <Dock>{this.props.children}</Dock>
  }
}

export default DockBar
export { default as DockIcon } from './icon'
