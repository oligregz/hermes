const { update } = require('../models/Client.model.js');
const Client = require('../models/Client.model.js');

module.exports = {
  async createClient (req, res) {
    try {
      const { name, telephone } = req.body;
      const existsClient = await Client.findOne({ where: { name, telephone }});
      
      if(existsClient) {
        res.status(401).json({ message: "Customer already registered !" })
      } else {
        const client = await Client.create({name, telephone});
        res.status(200).json({ client, message: "Client registered !" })
      }
      } catch (e) {
      res.status(400).json({ message: e })
    }
  },
  async updateClient(req, res) {
    try {
      const { id } = req.params;
      const { name, telephone } = req.body;
      const existsClient = await Client.findOne({ where: { id }});
      
      if(!existsClient) {
        res.status(401).json({ message: "No client found!" })
      } else {
        const client = await Client.update(
          { name, telephone },
          { where: { id } }
        );
        res.status(200).json({ client, messahe: "Client updated !" })
      }
    } catch (e) {
      res.status(400).json({ message: e })
    }
  }
}
