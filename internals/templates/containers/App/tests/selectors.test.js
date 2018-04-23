import { fromJS } from 'immutable';

import { makeSelectLocation } from 'containers/Index/selectors';

describe('makeSelectLocation', () => {
  it('should select the location', () => {
    const route = fromJS({
      location: { pathname: '/foo' },
    });
    const mockedState = fromJS({
      route,
    });
    expect(makeSelectLocation()(mockedState)).toEqual(route.get('location').toJS());
  });
});
