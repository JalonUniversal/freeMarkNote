import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/pages/App/index';
import ErrorBoundary from './components/errorBoundary/index';
import 'antd-mobile/es/global';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
