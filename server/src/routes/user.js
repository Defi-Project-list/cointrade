import { Router } from 'express';
import Binance from 'binance-api-node';

const router = Router();

/*
 * Gets all users
 * Query Params: None
 * GET /user/
 */
router.get('/', async (req, res) => {
  const users = await req.context.models.User.find();
  return res.send(users);
});

/*
 * Retrieves user info for one user
 * Query Params: None
 * GET /user/testuser1
 */
router.get('/:username', async (req, res) => {

  const user = await req.context.models.User.findOne({
    username: req.params.username,
  });
  if (!user) {
    console.error(`no username: ${req.params.username} found`)
    return res.status(400).send(null)
  }
  const ret = {
    id: user.id,
    username: user.username,
    balance: user.balance,
  }
  return res.send(ret);
});

/*
 * Creates a user user
 * Query Params: None
 * POST /user/testuser1/create
 */
router.post('/:username/create', async (req, res) => {
  const user = new req.context.models.User({
    username: req.params.username,
    binance: {
      apiKey: req.body.apiKey,
      apiSecret: req.body.apiSecret,
    },
    balance: 0,
  });
  const binance = new Binance({
    apiKey: user.binance.apiKey,
    apiSecret: user.binance.apiSecret,
  })
  const accountInfo = await binance.accountInfo()

  accountInfo.balances.forEach(balance => {
    if (balance.asset === 'USDT') {
      user.balance = balance.free
    }
  })

  try {
    await user.save()
    return res.send(user);
  } catch (e) {
    return res.status(400).send(e)
  }
});

/*
 * Sets api key for one user
 * Query Params: api-key, api-secret
 * POST /user/testuser1/setkey?api-key=<apikey>&api-secret=<secretkey>
 */
router.post('/:username/setkey', async (req, res) => {
  const apiKey = req.query['api-key'];
  const apiSecret = req.query['api-secret'];
  const user = await req.context.models.User.findOne({
    username: req.params.username,
  });
  if (!user) {
    console.error(`no username: ${req.params.username} found`)
    return res.status(400).send(null)
  }

  user.binance = {
    apiKey,
    apiSecret
  }

  await user.save()
  return res.send(user)
});


/*
 * Invests in a fund
 * Query Params: quantity, fund
 * POST /user/testuser1/invest?quantity=100&fund=fund1
 */
router.post('/:username/invest', async (req, res) => {
  // Query Params
  const quantity = req.query.quantity;
  const fundName = req.query.fund;

  const user = await req.context.models.User.findOne({
    username: req.params.username,
  });
  const fund = await req.context.models.Fund.findOne({name:fundName});
  console.log(user, user.binance)
  // Fail conditions, this could be a lot cleaner sorry
  if (!user) {
    return res.status(400).send(`User ${req.params.username} not found`);
  } else if (user.binance.apiKey === undefined) {
    return res.status(400).send(`User ${req.params.username} has not set api keys`);
  } else if (!fund) {
    return res.status(400).send(`Fund ${req.query.fund} not found`);
  } else if (quantity > user.balance) {
    return res.status(400).send(`Not enough USDT in account`);
  }

  const binance = new Binance({
    apiKey: user.binance.apiKey,
    apiSecret: user.binance.apiSecret,
  })
  try {
    for (const [coin, share] of Object.entries(fund.assets)) {
      const order = {
        symbol: coin + 'USDT',
        side: 'BUY',
        type: 'MARKET',
        quoteOrderQty: quantity * share,
      }
      console.log(order)
      await binance.order(order)
    }
    user.balance -= quantity
    await user.save()
  } catch (e) {
    console.error(e);
    return res.status(400).send(e)
  }

  let ret = "Transaction Succeeded"
  return res.send(ret);

});

export default router;
