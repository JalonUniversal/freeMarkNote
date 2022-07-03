import React from 'react';
import ReactDOM from 'react-dom';
import Main from '@/routes';
import ContextContainer from './components/context/index';
import ErrorBoundary from './components/errorBoundary/index';
import 'antd-mobile/es/global';

ReactDOM.render(
  <ErrorBoundary>
    <ContextContainer>
      <Main />
    </ContextContainer>
  </ErrorBoundary>,
  document.getElementById('root')
);
