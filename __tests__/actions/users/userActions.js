'use strict';

import userActions from '../../../src/actions/users';
import actionsTypes from '../../../src/constants/actions-types';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import fetch from 'cross-fetch';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('user actions', () => {
    let store = [];

    beforeEach(() => {
        store = mockStore({
            users: []
        });
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('receive users', () => {
        const expectedAction = {
            type: actionsTypes.RECEIVE_USERS
        };

        return store.dispatch(userActions.getAllUsers())
            .then(() => {
                expect(store.getActions()).toEqual(expectedAction);
            });
    });
});