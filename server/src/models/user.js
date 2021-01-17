import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  binance: {
    apiKey: String,
    apiSecret: String
  },
  freeCoin: Number, // USDT not tied to a fund
  funds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Fund' }],

});

// userSchema.statics.findByLogin = async function(login) {
//   let user = await this.findOne({
//     username: login,
//   });

//   if (!user) {
//     user = await this.findOne({ email: login });
//   }

//   return user;
// };

// userSchema.pre('remove', function(next) {
//   this.model('Message').deleteMany({ user: this._id }, next);
// });

const User = mongoose.model('User', userSchema);

export default User;
