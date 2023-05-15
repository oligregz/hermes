const { Router } = require('express');
const ClientController = require('../controllers/Client.controller.js');

const router = Router();

router.get('/v1/', (req, res) => {
  res.json({Hello: "World !"});
})

router.post('/v1/login', ClientController.createClient);
router.put('/v1/client-update/:id', ClientController.updateClient);

module.exports = router;