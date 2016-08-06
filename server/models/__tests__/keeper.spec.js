import test from 'ava';
import request from 'supertest';
import app from '../../server';
import Keeper from '../keeper';
import { connectDB, dropDB } from '../../util/test-helpers';

// Initial keepers added into test db
const keepers = [
  new Keeper({ name: 'Alex Blain', round: '4', cuid: 'f34gb2bh24b24b2' }),
  new Keeper({ name: 'Isaac Hardy', round: '3', cuid: 'f34gb2bh24b24b3' }),
];

test.beforeEach('connect and add two keeper entries', t => {
  connectDB(t, () => {
    Keeper.create(keepers, err => {
      if (err) t.fail('Unable to create keepers');
    });
  });
});

test.afterEach.always(t => {
  dropDB(t);
});

// test.serial('Should correctly give number of Keepers', async t => {
//   t.plan(2);

//   const res = await request(app)
//     .get('/api/keepers')
//     .set('Accept', 'application/json');

//   t.is(res.status, 200);
//   t.deepEqual(keepers.length, res.keepers.length);
// });

// test.serial('Should send correct data when queried against a cuid', async t => {
//   t.plan(2);

//   const keeper = new Keeper({ name: 'Isaac Hardy', round: '3', cuid: 'f34gb2bh24b24b2' });
//   keeper.save();

//   const res = await request(app)
//     .get('/api/keepers/f34gb2bh24b24b2')
//     .set('Accept', 'application/json');

//   t.is(res.status, 200);
//   t.is(res.body.keeper.name, keeper.name);
// });

test.serial('Should correctly add a keeper', async t => {
  t.plan(2);

  const res = await request(app)
    .post('/api/keepers')
    .send({ keeper: { name: 'Isaac Hardy', round: '4' } })
    .set('Accept', 'application/json');

  t.is(res.status, 200);

  const savedKeeper = await Keeper.findOne({ round: '4' }).exec();
  t.is(savedKeeper.name, 'Alex Blain');
});

// test.serial('Should correctly delete a keeper', async t => {
//   t.plan();

//   const keeper = new Keeper({ name: 'isaac hardy', round: '4', cuid: 'f34gb2bh24b24b2' });
//   keeper.save();

//   const res = await request(app)
//     .delete(`/api/keepers/${keeper.cuid}`)
//     .set('Accept', 'application/json');

//   t.is(res.status, 200);

//   const queriedKeeper = await Keeper.findOne({ cuid: keeper.cuid }).exec();
//   t.is(queriedKeeper, null);
// });

