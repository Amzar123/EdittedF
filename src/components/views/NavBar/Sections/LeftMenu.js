import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>

      <Menu.Item key="category">
        <a href="/about">Category</a>
      </Menu.Item>
      <Menu.Item key="locations">
        <a href="/about">Locations</a>
      </Menu.Item>
      <Menu.Item key="about">
        <a href="/about">About Us</a>
      </Menu.Item>
      <Menu.Item key="cari">
        <a href="/cari">Cari</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
