import {
    RECEIVE_USERS
} from '../../constants/actions-types'

export default (state=[], action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users
        default:
            return state
    }
}