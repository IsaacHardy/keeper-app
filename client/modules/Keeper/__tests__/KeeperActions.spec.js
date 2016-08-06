import test from 'ava';
import { actionTest } from 'redux-ava';

import {
  ADD_KEEPER,
  DELETE_KEEPER,
  ADD_KEEPERS,
  addKeeper,
  deleteKeeper,
  addKeepers,
} from '../KeeperActions';

const keeper = { name: 'Prashant', round: '3', cuid: 'f34gb2bh24b24b2', _id: 1 };

test('should return the correct type for addKeeper', actionTest(
  addKeeper,
  keeper,
  { type: ADD_KEEPER, keeper },
));

test('should return the correct type for deleteKeeper', actionTest(
  deleteKeeper,
  keeper.cuid,
  { type: DELETE_KEEPER, cuid: keeper.cuid },
));

test('should return the correct type for addKeepers', actionTest(
  addKeepers,
  [keeper],
  { type: ADD_KEEPERS, keepers: [keeper] },
));
