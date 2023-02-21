const db = require("../querries");

exports.getUsers = async (req, res, next) => {
  const response = await db.query("SELECT * FROM users ORDER BY id ASC");
  const users = response.rows[0];

  res.status(200).json({
    status: "success",
    rows: response.rowCount,
    data: {
      users,
    },
  });
};
