import React from 'react'
import { Link } from 'react-router-dom'

const UserLink = ({label, userId }) => (
    <Link to={`users/${userId}`}>{label}</Link>
)

export default UserLink