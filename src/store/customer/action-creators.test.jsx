import { setCustomer, logOutCustomer } from './action-creators';
import * as actions from './action-types';

describe('Customer action-creator', () => {
  it('setCustomer():should attach customer', () => {
    const expectedAction = {
      type: actions.SET_CUSTOMER,
      payload: { customer: {} }
    };
    expect(setCustomer(expectedAction.payload)).toEqual(expectedAction)
  });

  it('logOutCustomer(): should logOut', () => {
    const expectedAction = {
      type: actions.LOGOUT_CUSTOMER
    };
    expect(logOutCustomer(expectedAction)).toEqual(expectedAction);
  });
})
