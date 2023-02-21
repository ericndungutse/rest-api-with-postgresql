const router = require("express").Router();
const { getUsers, getUser } = require("../controller/user.controller");

router.get("/", getUsers);
router.get("/:id", getUser);

module.exports = router;
