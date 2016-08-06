import test from 'ava';
import { reducerTest } from 'redux-ava';
import appReducer, { getShowAddKeeper } from '../AppReducer';
import { toggleAddKeeper } from '../AppActions';

test('action for TOGGLE_ADD_KEEPER is working', reducerTest(
  appReducer,
  { showAddKeeper: false },
  toggleAddKeeper(),
  { showAddKeeper: true },
));

test('getShowAddKeeper selector', t => {
  t.is(getShowAddKeeper({
    app: { showAddKeeper: false },
  }), false);
});
