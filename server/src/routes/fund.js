import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const funds = await req.context.models.Fund.find();

  const ret = funds.map(fund => {
    return {
      id: fund.id,
      name: fund.name
    }
  })

  return res.send(ret);
});

router.get('/:fundId', async (req, res) => {
  const fund = await req.context.models.Fund.findById(
    req.params.fundId,
  );
  if (!fund) {
    return res.send(null)
  }
  const ret = {
    id: fund.id,
    name: fund.name,
    assets: fund.assets,
  }
  return res.send(ret);
});

export default router;
