import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import Reactive from './Core/Reactive'
import Menu, { MenuItem } from './Core/Menu'
import Desktop from './Core/Desktop'
import Dock, { DockItem } from './Core/Dock'

class App extends React.Component {
  render() {
    return (
      <Reactive>
        {(os) => (
          <React.Fragment>
            <Menu>
              <MenuItem
                contextMenu={[
                  {
                    item: 'TESTIE',
                    onClick() {
                      console.log('clicked')
                    }
                  }
                ]}>
                MENU
              </MenuItem>
            </Menu>
            <Desktop />
            <Dock>
              <DockItem>DOCK</DockItem>
            </Dock>
          </React.Fragment>
        )}
      </Reactive>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
