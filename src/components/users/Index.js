import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from '../../actions/users'

import ListUsers from '../../components/users/ListUsers'

class Index extends Component {
    componentDidMount() {
        this.props.dispatch(getAllUsers())
    }
    
    render() { 
        const { users } = this.props
        return (
            <div>
                {users ? (<ListUsers users={users} history={this.props.history} />) : null}
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