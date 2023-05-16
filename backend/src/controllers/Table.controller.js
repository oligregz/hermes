const Table = require('../models/Table.model.js');

module.exports = {
  async createTable (req, res) {
    try {
      const { capacity, busy } = req.body;
      const table = await Table.create({capacity, busy});
      res.status(200).json({ table, message: "Table registered !" })
      } catch (e) {
      res.status(400).json({ message: e })
    }
  },
}