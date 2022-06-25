import React from 'react';
import { Button } from 'antd-mobile';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  // eslint-disable-next-line no-unused-vars
  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log('capture error:', error);
    console.log('capture errorInfo:', errorInfo);
  }
  handleRefresh = () => {
    window.location.reload();
  };
  render() {
    if (this.state.hasError) {
      return (
        <div>
          页面出错了, 刷新一下 <Button onClick={this.handleRefresh}>刷新</Button>
        </div>
      );
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
