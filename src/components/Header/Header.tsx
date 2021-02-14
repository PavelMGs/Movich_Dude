import React, { useState } from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router';
import s from './Header.module.scss';

const Header = () => {
  const [current, setCurrent] = useState('search');
  const history = useHistory();

  if (current === 'search' && history.location.pathname !== '/') history.push('/');

  const handleClick = (e: any) => {
    if (e.key === 'search') {
      setCurrent(e.key);
      history.push('/');
    } else if (e.key === 'rated') {
      setCurrent(e.key);
      history.push('/rated');
    }
  };

  return (
    <div className={s.root}>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className={s.menu}>
        <Menu.Item key="search">Search</Menu.Item>
        <Menu.Item key="rated">Rated</Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
