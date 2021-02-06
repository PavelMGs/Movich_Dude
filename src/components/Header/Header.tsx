import React, { useState } from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router';
import s from './Header.module.scss';

const { SubMenu } = Menu;

const Header = () => {
  const [current, setCurrent] = useState('search');
  const history = useHistory();

  const handleClick = (e: any) => {

    if(e.key == 'search') {
      setCurrent(e.key);
      history.push('/')
    } else if (e.key == 'rated') {
      setCurrent(e.key)
      history.push('/rated');
    }
    
  };

    return (
      <div className={s.root}>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="search" >
            Search
          </Menu.Item>
          <Menu.Item key="rated" >
            Rated
          </Menu.Item>
        </Menu>
      </div>
    );
}

export default Header;