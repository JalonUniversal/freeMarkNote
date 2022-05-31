import React from 'react';
import { SafeArea } from 'antd-mobile';
import './style.less';

const SafeProtection = (position = 'top') => {
  return (
    <div className={`safearea-${position}`}>
      <SafeArea position={position} />
    </div>
  )
}

export default SafeProtection;