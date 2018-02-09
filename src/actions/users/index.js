import fetch from 'cross-fetch'
import {
    RECEIVE_USERS
} from '../../constants/actions-types'

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

// Get async user list
export const getAllUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => dispatch(receiveUsers(json)))
        .catch(error => console.log('Error: ', error))
}

