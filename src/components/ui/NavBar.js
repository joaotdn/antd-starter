import React from 'react'
import { Menu } from 'antd'

const NavBar = ({history}) => (
    <Menu
        mode="horizontal"
        theme="dark"
        style={{
            lineHeight: '64px'
        }}
    >
        <Menu.Item key="home">
            <a onClick={() => history.push('/')}>Home</a>
        </Menu.Item>

        <Menu.Item key="users">
            <a onClick={() => history.push('/users')}>Users</a>
        </Menu.Item>
    </Menu>
)

export default NavBar