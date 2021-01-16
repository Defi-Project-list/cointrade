import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { connectDb } from './models';
import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('jerry'),
  };
  next();
});

// * Routes * //

app.use('/user', routes.user);
app.use('/fund', routes.fund);

// * Start * //

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Fund.deleteMany({}),
    ]);

    createUsersWithFunds();
  }

  app.listen(process.env.PORT, () =>
    console.log(`cointrade listening on port ${process.env.PORT}!`),
  );
});

// * Database Seeding * //

const createUsersWithFunds = async () => {
  const user1 = new models.User({
    username: 'jerry',
  });

  const user2 = new models.User({
    username: 'ddavids',
  });

  const fund1 = new models.Fund({
    name: 'fund1',
    assets: {
      BTC: 0.5,
      ETH: 0.5
    },
    users: [user1.id],
  });
  const fund2 = new models.Fund({
    name: 'fund2',
    users: [user1.id],
  });
  const fund3 = new models.Fund({
    name: 'fund3',
    users: [user1.id],
  });

  await fund1.save();
  await fund2.save();
  await fund3.save();

  await user1.save();
  await user2.save();
};
