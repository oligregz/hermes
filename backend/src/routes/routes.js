const { Router } = require('express');
const Client = require('../models/Client.model.js');

const router = Router();

router.get('/', (req, res) => {
  res.json({Hello: "World !"});
})

router.post('/client', async (req, res) => {
  const { name, telephone } = req.body;
  console.log(req.body);
  const client = await Client.create({name, telephone});

  res.json({client});
});

module.exports = router;