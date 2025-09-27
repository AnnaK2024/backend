const fs = require("fs");
const puth = require("path");

const getUsers = () => {
  const filePuth = puth.join(__dirname, "../data/users.json");
  return fs.readFileSync(filePuth);
};

module.exports = getUsers;
