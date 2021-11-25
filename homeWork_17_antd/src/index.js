import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ruRu}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

