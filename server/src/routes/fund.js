import { Router } from 'express';

const router = Router();

/*
 * Gets all funds
 * Query Params: None
 * GET /fund/
 */
router.get('/', async (req, res) => {
  const funds = await req.context.models.Fund.find();

  const ret = funds.map(fund => {
    return {
      id: fund.id,
      name: fund.name,
      description: fund.description,
      imageUrl: fund.imageUrl,
    }
  })

  return res.send(ret);
});

/*
 * Gets one fund info
 * Query Params: None
 * GET /fund/fund1
 */
router.get('/:fundName', async (req, res) => {
  const fund = await req.context.models.Fund.findOne({
    name: req.params.fundName,
  });
  if (!fund) {
    return res.send(null)
  }
  const ret = {
    id: fund.id,
    name: fund.name,
    assets: fund.assets,
    description: fund.description,
    imageUrl: fund.imageUrl,
  }
  return res.send(ret);
});

/*
 * Creates a fund
 * Query Params: None
 * POST /fund/fund1/create
 */
router.post('/:fundName/create', async (req, res) => {
  const fund = new req.context.models.Fund({
    name: req.params.fundName,
    assets: req.body.assets,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });
  try {
    await fund.save()
    return res.send(fund);
  } catch (e) {
    return res.status(400).send(e)
  }
});


export default router;
