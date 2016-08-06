import mongoose from 'mongoose';
import mockgoose from 'mockgoose';

export function connectDB(t, done) {
  mockgoose(mongoose).then(() => {
    mongoose.createConnection('mongodb://localhost:27017/fantasy-football', err => {
      if (err) t.fail('Unable to connect to fantasy-football database');
      done();
    });
  });
}

export function dropDB(t) {
  mockgoose.reset(err => {
    if (err) t.fail('Unable to reset fantasy-football database');
  });
}
