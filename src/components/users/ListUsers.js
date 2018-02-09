import React from 'react'
import PropTypes from 'prop-types'
import { List, Avatar } from 'antd'
import UserLink from './UserLink'

const ListUsers = ({users=[]}) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={users}
      renderItem={user => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<UserLink label={user.name} userId={user.id} />}
            description={user.email}
          />
        </List.Item>
      )}
    />
  )
}

ListUsers.propTypes = {
  users: PropTypes.array,
  history: PropTypes.object.isRequired
}

export default ListUsers