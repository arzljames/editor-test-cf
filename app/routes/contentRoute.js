const router = require("express").Router();
const logger = require("../middleware/logger");
const extractToken = require("../middleware/extractToken");
const contentController = require("../controller/contentController");

/**
 * @api {GET} /item/:modelZuid/:itemZuid - Fetch content item data
 *
 * @param {String} [modelZuid]
 * @param {String} [itemZuid]
 */
router.get(
  "/item/:modelZuid/:itemZuid",
  [logger, extractToken],
  contentController.getContentItem
);

/**
 * @api {POST} /item/:modelZuid/create - Create new content item
 *
 * @param {String} [modelZuid]
 * @param {Object} [payload]
 */
router.post(
  "/item/:modelZuid/create",
  [logger, extractToken],
  contentController.createContentItem
);

/**
 * @api {PUT} /item/:modelZuid/:itemZuid/update - Update content item
 *
 * @param {String} [modelZuid]
 * @param {String} [itemZuid]
 * @param {Object} [payload]
 */
router.put(
  "/item/:modelZuid/:itemZuid/update",
  [logger, extractToken],
  contentController.updateContentItem
);

/**
 * @api {POST} /item/:modelZuid/:itemZuid/publish - Publish content item
 *
 * @param {String} [modelZuid]
 * @param {String} [itemZuid]
 * @param {Object} [payload]
 */
router.post(
  "/item/:modelZuid/:itemZuid/publish",
  [logger, extractToken],
  contentController.publishContentItem
);

/**
 * @api {DELETE} /item/:modelZuid/:itemZuid/unpublish - Unpublish content item
 *
 * @param {String} [modelZuid]
 * @param {String} [itemZuid]
 * @param {Object} [payload]
 */
router.delete(
  "/item/:modelZuid/:itemZuid/unpublish",
  [logger, extractToken],
  contentController.unpublishContentItem
);

/**
 * @api {GET} /item/search - Search items with query
 *
 */
router.get(
  "/item/search",
  [logger, extractToken],
  contentController.searchItem
);

/**
 * @api {GET} /item/:modelZuid/:itemZuid/publishings - Fetch content item publishings
 *
 * @param {String} [modelZuid]
 * @param {String} [itemZuid]
 */
router.get(
  "/item/:modelZuid/:itemZuid/publishings",
  [logger, extractToken],
  contentController.getPublishings
);

/**
 * @api {GET} /model/:modelZuid - Fetch content model
 *
 * @param {String} [modelZuid]
 */
router.get(
  "/model/:modelZuid/",
  [logger, extractToken],
  contentController.getModel
);

/**
 * @api {GET} /model/:modelZuid/fields - Fetch content model fields
 *
 * @param {String} [modelZuid]
 */
router.get(
  "/model/:modelZuid/fields",
  [logger, extractToken],
  contentController.getModelFields
);

/**
 * @api {GET} /item/:modelZuid/:itemZuid/versions - Fetch content item model
 *
 * @param {String} [modelZuid]
 * @param {String} [itemZuid]
 */
router.get(
  "/item/:modelZuid/:itemZuid/versions",
  [logger, extractToken],
  contentController.getContentItemVersions
);

module.exports = router;
