import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/pages/App/index';
import ContextContainer from './components/context/index';
import ErrorBoundary from './components/errorBoundary/index';
import 'antd-mobile/es/global';

ReactDOM.render(
  <ErrorBoundary>
    <ContextContainer>
      <App />
    </ContextContainer>
  </ErrorBoundary>,
  document.getElementById('root')
);
