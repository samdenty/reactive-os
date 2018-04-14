import React from 'react'
import { Container } from './elements'
import { Menu, Action } from '../../Components/ContextMenu'
import API from './API'

class Wrapper extends React.PureComponent {
  api

  componentWillMount() {
    this.api = new API(this)
  }

  render() {
    return (
      <Container>
        <Menu
          items={
            <React.Fragment>
              <Action>GLOBAL</Action>
            </React.Fragment>
          }>
          {this.props.children(this.api)}
        </Menu>
      </Container>
    )
  }
}

export default Wrapper
