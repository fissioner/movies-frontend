import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import MenuLayout from './containers/Layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuLayout>

        </MenuLayout>
      </header>
    </div>
  );
}

export default App;
