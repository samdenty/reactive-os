import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import Reactive from "./Core/Reactive";
import Menu, { MenuItem } from "./Core/Menu";
import Desktop, { DesktopIcon } from "./Core/Desktop";
import Dock, { DockIcon } from "./Core/Dock";
import Window from "./Core/Window";

//

class App extends React.Component {
  render() {
    const config = {};

    return (
      <Reactive config={config}>
        {os => (
          <React.Fragment>
            <Menu>
              <MenuItem
                contextMenu={[
                  {
                    item: "TESTIE",
                    onClick() {
                      console.log("clicked");
                    }
                  }
                ]}
              >
                MENU
              </MenuItem>
            </Menu>
            <Desktop>
              <DesktopIcon
                src="https://upload.wikimedia.org/wikipedia/it/1/12/Icona_Finder.png"
                onClick={() => {
                  console.log("finder clicked");
                }}
                contextMenu={[
                  {
                    item: "remove"
                  }
                ]}
              />
              <DesktopIcon src="http://icons.iconarchive.com/icons/osullivanluke/orb-os-x/512/Settings-icon.png" />
              <DesktopIcon src="http://icons.iconarchive.com/icons/osullivanluke/orb-os-x/512/Settings-icon.png" />
              <DesktopIcon src="http://icons.iconarchive.com/icons/osullivanluke/orb-os-x/512/Settings-icon.png" />
              <DesktopIcon src="http://icons.iconarchive.com/icons/osullivanluke/orb-os-x/512/Settings-icon.png" />
              <DesktopIcon src="http://icons.iconarchive.com/icons/osullivanluke/orb-os-x/512/Settings-icon.png" />
              <DesktopIcon src="http://icons.iconarchive.com/icons/osullivanluke/orb-os-x/512/Settings-icon.png" />
              <DesktopIcon src="http://icons.iconarchive.com/icons/osullivanluke/orb-os-x/512/Settings-icon.png" />
              <DesktopIcon src="http://icons.iconarchive.com/icons/osullivanluke/orb-os-x/512/Settings-icon.png" />
              <DesktopIcon src="http://icons.iconarchive.com/icons/osullivanluke/orb-os-x/512/Settings-icon.png" />
            </Desktop>
            <Dock>
              <DockIcon
                src="https://upload.wikimedia.org/wikipedia/it/1/12/Icona_Finder.png"
                onClick={() => {
                  console.log("finder clicked");
                }}
                contextMenu={[
                  {
                    item: "remove"
                  }
                ]}
              />
              <DockIcon
                src="http://icons.iconarchive.com/icons/osullivanluke/orb-os-x/512/Settings-icon.png"
                onClick={() => {
                  console.log("settings clicked");
                }}
                contextMenu={[
                  {
                    item: "remove"
                  }
                ]}
              />
              <DockIcon
                src="https://www.tonymacx86.com/attachments/200px_imessage_logo-png.127952/"
                onClick={() => {
                  console.log("imessage clicked");
                }}
                contextMenu={[
                  {
                    item: "remove"
                  }
                ]}
              />
              <DockIcon
                src="http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/calendar-icon.png"
                onClick={() => {
                  console.log("calender clicked");
                }}
                contextMenu={[
                  {
                    item: "remove"
                  }
                ]}
              />
            </Dock>
            <Window>HELLO</Window>
          </React.Fragment>
        )}
      </Reactive>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
