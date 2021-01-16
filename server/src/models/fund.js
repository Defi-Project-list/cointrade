import mongoose from 'mongoose';

const fundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  assets: {} ,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Fund = mongoose.model('Fund', fundSchema);

export default Fund;
