import { Router } from 'express';
import * as KeeperController from '../controllers/keeper.controller';
const router = new Router();

// Get all Keepers
router.route('/keepers').get(KeeperController.getKeepers);

// Get one keeper by cuid
router.route('/keepers/:cuid').get(KeeperController.getKeeper);

// Add a new Keeper
router.route('/keepers').post(KeeperController.addKeeper);

// Delete a keeper by cuid
router.route('/keepers/:cuid').delete(KeeperController.deleteKeeper);

export default router;
