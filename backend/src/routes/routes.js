const { Router } = require('express');
const ClientController = require('../controllers/Client.controller.js');
const TableController = require('../controllers/Table.controller.js');
const ReserveController = require('../controllers/Reserve.controller.js');

const router = Router();

router.post('/v1/client-post', ClientController.createClient);
router.put('/v1/client-update/:id', ClientController.updateClient);
router.get('/v1/client-getall', ClientController.listClients);
router.delete('/v1/client-delete/:id', ClientController.deleteClient);

router.post('/v1/table-post', TableController.createTable);

router.post('/v1/reserve-post', ReserveController.createReserve);
router.get('/v1/reserve-getall', ReserveController.listReserves);
router.delete('/v1/reserve-delete/:id', ReserveController.deleteReserve);


module.exports = router;