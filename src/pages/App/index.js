import React, { useState } from 'react';
import './index.less';
import { List, Input, Form, Button } from 'antd-mobile';
import 'antd-mobile/es/global';
import SafeProtection from '@/components/safeArea';
import '../../locales';
import { useTranslation } from 'react-i18next';

import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
} from 'antd-mobile-icons';

const iconMap = {
  list: <UnorderedListOutline />,
  asset: <PayCircleOutline />,
  setting: <SetOutline />
}

function App() {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [list, setList] = useState([
    {
      type: "list",
      name: "账单",
      id: 123456
    },
    {
      type: "asset",
      name: "总资产",
      id: 123457
    },
    {
      type: "setting",
      name: "设置",
      id: 123458
    },
  ]);
  const handleInput = (val) => setValue(val);
  const handleCommit = () => {
    if(value.trim().length === 0) return;
    setList(prev => {
      const ret = prev.concat([
        {
          type: "list",
          name: value,
          id: Math.random()
        },
      ]);
      setValue('');
      return ret;
    });
  }

  return (
    <div className='app-container'>
      <SafeProtection position="top" />
      <h1>{t('appName')}</h1>
      <List header={t('title')}>
        {
          list.length > 0 && list.map((item, index) => {
            return (
              <List.Item key={index} prefix={iconMap[item.type]} onClick={() => { }}>
                {item.name}
              </List.Item>
            )
          })
        }
      </List>
      <Form layout='horizontal'>
        <Form.Item
          extra={
            <Button 
              color="primary" 
              fill='outline'
              onClick={handleCommit}
              shape="rectangular"
              disabled={value?.trim().length === 0}
            >
              {t('add')}
            </Button>
          }
        >
          <Input
            placeholder={t('placeholder')}
            value={value}
            clearable
            autoFocus 
            autoComplete="off"
            maxLength={255}
            onChange={handleInput}
            onEnterPress={handleCommit}
          />
        </Form.Item>
      </Form>

      <SafeProtection position="bottom" />
    </div>
  )
}

export default App;
