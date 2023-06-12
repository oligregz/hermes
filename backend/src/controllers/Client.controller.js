const { update } = require("../models/Client.model.js");
const Client = require("../models/Client.model.js");

module.exports = {
  async createClient(req, res) {
    try {
      const { name, email, password, cpf, telephone } = req.body;
      const existsClient = await Client.findOne({
        where: {
          name,
          email,
          password,
          cpf,
          telephone,
        },
      });

      if (existsClient) {
        res.status(401).json({ message: "Customer already registered !" });
      } else {
        const client = await Client.create({
          name,
          email,
          password,
          cpf,
          telephone,
        });
        res.status(200).json({ client, message: "Client registered !" });
      }
    } catch (e) {
      res.status(400).json({ message: e });
    }
  },
  async updateClient(req, res) {
    try {
      const { id } = req.params;
      const { name, telephone } = req.body;
      const existsClient = await Client.findOne({ where: { id } });

      if (!existsClient) {
        res.status(401).json({ message: "No client found!" });
      } else {
        const client = await Client.update(
          { name, telephone },
          { where: { id } }
        );
        res.status(200).json({ client, messahe: "Client updated !" });
      }
    } catch (e) {
      res.status(400).json({ message: e });
    }
  },
  async findClientById(req, res) {
    try {
      const { id } = req.params;
      const client = await Client.findOne({ where: { id } });

      if (!client) {
        res.status(401).json({ message: "No client found !" });
      } else {
        res.status(200).json({ client });
      }
    } catch (e) {
      res.status(400).json({ message: e });
    }
  },
  async listClients(req, res) {
    try {
      const clients = await Client.findAll();
      if (clients.length === 0) {
        res.status(401).json({ message: "No client found !" });
      } else {
        res.status(200).json({ clients });
      }
    } catch (e) {
      res.status(400).json({ message: e });
    }
  },
  async deleteClient(req, res) {
    try {
      const { id } = req.params;
      const existsClient = await Client.findOne({ where: { id } });
      if (!existsClient) {
        res.status(401).json({ message: "Client not found !" });
      } else {
        await Client.destroy({ where: { id } });
        res.status(200).json({ message: "Client removed !" });
      }
    } catch (e) {
      res.status(400).json({ message: e });
    }
  },
};
