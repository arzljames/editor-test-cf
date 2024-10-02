const router = require("express").Router();
const logger = require("../middleware/logger");
const extractToken = require("../middleware/extractToken");
const instanceController = require("../controller/instanceController");

/**
 * @api {GET} /item/:modelZuid/:itemZuid - Fetch content item data
 *
 * @param {String} [modelZuid]
 * @param {String} [itemZuid]
 */
router.get(
  "/item/:modelZuid/:itemZuid",
  [logger, extractToken],
  instanceController.getContentItem
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
  instanceController.createContentItem
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
  instanceController.updateContentItem
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
  instanceController.publishContentItem
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
  instanceController.unpublishContentItem
);

/**
 * @api {GET} /item/search - Search items with query
 *
 */
router.get(
  "/item/search",
  [logger, extractToken],
  instanceController.searchItem
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
  instanceController.getPublishings
);

/**
 * @api {GET} /model/:modelZuid - Fetch content model
 *
 * @param {String} [modelZuid]
 */
router.get(
  "/model/:modelZuid/",
  [logger, extractToken],
  instanceController.getModel
);

/**
 * @api {GET} /model/:modelZuid/fields - Fetch content model fields
 *
 * @param {String} [modelZuid]
 */
router.get(
  "/model/:modelZuid/fields",
  [logger, extractToken],
  instanceController.getModelFields
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
  instanceController.getContentItemVersions
);

module.exports = router;
