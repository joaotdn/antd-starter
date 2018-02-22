import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from '../../actions/users'

class Index extends Component {
    componentDidMount() {
        this.props.dispatch(getAllUsers())
    }
    
    render() { 
        const { users } = this.props
        return (
            <div>
                {users ? (<ul>{users.map(u => (<li key={u.id}>{u.name}</li>))}</ul>) : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return  {
        users: state.users
    }
}
 
export default connect(mapStateToProps)(Index)