const router = require("express").Router();
const logger = require("../middleware/logger");
const extractToken = require("../middleware/extractToken");
const mediaController = require("../controller/mediaController");

/**
 * @api {GET} /file/:fileZuid - Fetch specific media file
 *
 * @param {String} [fileZuid]
 */
router.get("/file/:fileZuid", [logger, extractToken], mediaController.getFile);

/**
 * @api {GET} /bin/:binZuid - Fetch media bin files
 *
 * @param {String} [binZuid]
 */
router.get(
  "/bin/:binZuid/files",
  [logger, extractToken],
  mediaController.getFiles
);

/**
 * @api {GET} /group/:groupZuid - Fetch media data of specific group
 *
 * @param {String} [groupZuid]
 */
router.get(
  "/group/:groupZuid",
  [logger, extractToken],
  mediaController.getMediaGroup
);

/**
 * @api {GET} /groups/:binZuid - Fetch media folders/groups
 *
 * @param {String} [binZuid]
 */
router.get(
  "/groups/:binZuid",
  [logger, extractToken],
  mediaController.getMediaGroups
);

/**
 * @api {POST} /file/:binZuid/create - Create or upload new file
 *
 * @param {String} [binZuid]
 */
router.post(
  "/file/:binZuid/create",
  [logger, extractToken],
  mediaController.createFile
);

module.exports = router;
