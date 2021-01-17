import mongoose from 'mongoose';

import User from './user';
import Fund from './fund';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Fund };

export { connectDb };

export default models;
