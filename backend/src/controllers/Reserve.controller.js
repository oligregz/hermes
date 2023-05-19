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
        const reserve = await Reserve.create({date, hour, clientId, tableId});
        res.status(200).json({ reserve, message: "Confirmed reserve !" })
      }
    } catch (e) {
      console.log("caiu no catch")
      res.status(400).json({ message: e })
    }
  },
  async listReserves(req, res) {
    try {
      const reserves = await Reserve.findAll();
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
      const reserve = await Reserve.findOne({ where: { id } });

      if (!reserve) {
        res.status(401).json({ message: "Reserve not found !" })
      } else {
        await Reserve.destroy({ where: { id } });
        res.status(200).json({ message: "Reserve removed !" });
      }
    } catch (e) {
      res.status(400).json({ message: e });
    }
  },
  async lessThanFifteenReserves(req, res) {
    try {
      const { date } = req.body;
      const reserves = await Reserve.findAll();
  
      if (!reserves) {
        return res.status(401).json({ message: false });
      }
  
      const filteredReserves = reserves.filter((reserve) => {
        return reserve.quantity < 15;
      });
  
      const numberOfReserves = filteredReserves.length;
  
      res.status(200).json({ numberOfReserves, message: true });
    } catch (e) {
      res.status(500).json({ message: e });
    }
  }
}