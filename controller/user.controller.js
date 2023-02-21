const db = require("../querries");

exports.getUsers = async (req, res) => {
  const response = await db.query("SELECT * FROM users ORDER BY id ASC");
  const users = response.rows;

  res.status(200).json({
    status: "success",
    rows: response.rowCount,
    data: {
      users,
    },
  });
};

exports.getUser = async (req, res) => {
  const response = await db.query(
    `SELECT * FROM users WHERE id =${req.params.id}`
  );

  const [user] = response.rows;
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found.",
    });
  }

  res.status(200).json({
    status: "success",
    rows: response.rowCount,
    data: {
      user,
    },
  });
};
