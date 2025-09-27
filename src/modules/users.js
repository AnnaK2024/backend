const fs = require("fs");
const path = require("path");

function getUsers() {
  const filePath = path.join(__dirname, "..", "data", "users.json");
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }
    const data = fs.readFileSync(filePath, "utf8");

    const users = JSON.parse(data);

    return users;
  } catch (err) {
    throw new Error("Error reading users file");
  }
}

module.exports = { getUsers };
