import test from 'ava';
import { reducerTest } from 'redux-ava';
import keeperReducer, { getKeeper, getKeepers } from '../KeeperReducer';
import { addKeeper, deleteKeeper, addKeepers } from '../KeeperActions';

test('action for ADD_KEEPER is working', reducerTest(
  keeperReducer,
  { data: ['foo'] },
  addKeeper({
    name: 'prank',
    title: 'first keeper',
    content: 'Hello world!',
    _id: null,
    cuid: null,
    slug: 'first-keeper',
  }),
  { data: [{
    name: 'prank',
    title: 'first keeper',
    content: 'Hello world!',
    _id: null,
    cuid: null,
    slug: 'first-keeper',
  }, 'foo'] },
));

test('action for DELETE_KEEPER is working', reducerTest(
  keeperReducer,
  { data: [{
    name: 'prank',
    title: 'first keeper',
    content: 'Hello world!',
    cuid: 'abc',
    _id: 1,
    slug: 'first-keeper',
  }] },
  deleteKeeper('abc'),
  { data: [] },
));

test('action for ADD_KEEPERS is working', reducerTest(
  keeperReducer,
  { data: [] },
  addKeepers([
    {
      name: 'prank',
      title: 'first keeper',
      content: 'Hello world!',
      _id: null,
      cuid: null,
      slug: 'first-keeper',
    },
  ]),
  { data: [{
    name: 'prank',
    title: 'first keeper',
    content: 'Hello world!',
    _id: null,
    cuid: null,
    slug: 'first-keeper',
  }] },
));

test('getKeepers selector', t => {
  t.deepEqual(
    getKeepers({
      keepers: { data: ['foo'] },
    }),
    ['foo']
  );
});

test('getKeeper selector', t => {
  t.deepEqual(
    getKeeper({
      keepers: { data: [{ cuid: '123' }] },
    }, '123'),
    { cuid: '123' }
  );
});

