import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const keeperSchema = new Schema({
  name: { type: 'String', required: true },
  round: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Keeper', keeperSchema);