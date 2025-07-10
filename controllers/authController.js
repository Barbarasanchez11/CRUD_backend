const Task = require("../models/Task");
const { baseHtml } = require("../public/utils/index");

const authController = {
  async showNewTask(req, res) {
    try {
      const html = baseHtml();
      res.send(html);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error showing the tasks" });
    }
  },
};

module.exports = authController;
