const Reserve = require('../models/Reserve.model.js');

module.exports = {
  async createReserve(req, res) {
    try {
      const { date, hour, clientId, tableId } = req.body;
      const existsReserve = await Reserve.findOne({ where: 
        {
          date,
          hour,
          clientId,
          tableId,
        }
      });

      if (existsReserve) {
        res.status(401).json({ message: "Already existing reserve !" });
      } else {
        const reserve = Reserve.create({date, hour, clientId, tableId});
        res.status(200).json({ client, message: "Confirmed reserve !" })
      }
    } catch (e) {
      res.status(400).json({ message: e })
    }
  },
  async listReserves(req, res) {
    try {
      const reserves = Reserve.findAll();
      if(reserves.length === 0) {
        res.status(401).json({ message: "No reserve found !" });
      } else {
        res.status(200).json({ reserves });
      }
    } catch (e) {
      res.status(400).json({ message: e })
    }
  },
  async deleteReserve(req, res) {
    try {
      const { id } = req.params;
      const reserve = Reserve.findOne({ where: id});

      if (!reserve) {
        res.status(401).json({ message: "Reserve not found !" })
      } else {
        await Reserve.destroy({ where: { id } });
        res.status(200).json({ message: "Reserva removed !" });
      }
    } catch (e) {
      res.status(400).json({ message: e });
    }
  }
}