const router = require("express").Router();
const logger = require("../middleware/logger");
const extractToken = require("../middleware/extractToken");
const authController = require("../controller/authController");

/**
 * @api {GET} /verify - Verify token if valid
 *
 * @param {String} [token]
 */
router.get("/verify", [logger, extractToken], authController.verifyToken);

/**
 * @api {GET} /user/:userZuid - Fetch user account
 *
 * @param {String} [userZuid]
 */
router.get("/user/:userZuid", [logger, extractToken], authController.getUser);

module.exports = router;
