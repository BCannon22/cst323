import { Router } from 'express';
import * as DrumsetsController from './drumsets.controller';

const router = Router();
router
    .route('/drumsets')
    .get(DrumsetsController.readDrumsets);


router
    .route('/drumsets/:drumsetId')
    .put(DrumsetsController.updateDrumset);


router
    .route('/drumsets')
    .post(DrumsetsController.createDrumset);


router
    .route('/drumsets/:drumsetId')
    .delete(DrumsetsController.deleteDrumset);


export default router;