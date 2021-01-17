import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const funds = await req.context.models.Fund.find();
  return res.send(funds);
});

router.get('/:fundId', async (req, res) => {
  const fund = await req.context.models.Fund.findById(
    req.params.fundId,
  );
  return res.send(fund);
});

export default router;
