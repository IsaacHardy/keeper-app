import test from 'ava';
import { actionTest } from 'redux-ava';
import { TOGGLE_ADD_KEEPER, toggleAddKeeper } from '../AppActions';

test('should return the correct type for toggleAddKeeper', actionTest(toggleAddKeeper, null, { type: TOGGLE_ADD_KEEPER }));
