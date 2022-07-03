import React, { useState, useContext } from 'react';
import './index.less';
import { List, Input, Form, Button } from 'antd-mobile';
import SafeProtection from '@/components/safeArea';
import { Consumer } from '@/model';
import '../../locales';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { generateRandomId } from '@/utils';

import { UnorderedListOutline, PayCircleOutline, SetOutline } from 'antd-mobile-icons';

const iconMap = {
  list: <UnorderedListOutline />,
  asset: <PayCircleOutline />,
  setting: <SetOutline />,
};

// enum ToDoType = {
//   list = "list",
//   asset = "asset",
//   setting = "setting"
// }

// interface ToDoItem {
//   type: ToDoType,
//   name: string,
//   id: number
// }

const App = () => {
  const { t } = useTranslation();
  const { list, updateList } = useContext(Consumer);
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const handleInput = val => setValue(val);
  const handleCommit = () => {
    if (value.trim().length === 0) return;
    updateList(prev => {
      const ret = prev.concat([
        {
          type: 'list',
          name: value,
          id: generateRandomId(),
        },
      ]);
      setValue('');
      return ret;
    });
  };
  const handleOpenRecordDetail = id => {
    navigate(`/record/:${id}`);
  };

  return (
    <div className='app-container'>
      <SafeProtection position='top' />
      <h1>{t('appName')}</h1>
      {list.length > 0 ? (
        <List header={t('title')}>
          {list.map((item, index) => {
            return (
              <List.Item key={index} prefix={iconMap[item.type]} onClick={() => handleOpenRecordDetail(item.id)}>
                {item.name}
              </List.Item>
            );
          })}
        </List>
      ) : (
        <div className='app-title-tips'>{t('titleNoList')}</div>
      )}
      <Form layout='horizontal'>
        <Form.Item
          extra={
            <Button
              color='primary'
              fill='outline'
              onClick={handleCommit}
              shape='rectangular'
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
            autoComplete='off'
            maxLength={255}
            onChange={handleInput}
            onEnterPress={handleCommit}
          />
        </Form.Item>
      </Form>
      <SafeProtection position='bottom' />
    </div>
  );
};

export default React.memo(App);
