import React from 'react';
import Articles from "./Components/Articles"
import { Menu } from 'semantic-ui-react'

const App = () => {
  return (
    <>
    <Menu stackable>
      <Menu.Item></Menu.Item>
      <Menu.Item>
        News On Rails
      </Menu.Item>
      </Menu>
    <div>
      <Articles />
    </div>
    </>
  );
}

export default App;
