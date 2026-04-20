import { Request, RequestHandler, Response } from 'express';
import * as DrumsetDao from '../drumsets/drumsets.dao';
import { OkPacket } from 'mysql';

export const readDrumsets: RequestHandler = async (req: Request, res: Response) => {
    try {
        let drumsets;
        let drumsetId = parseInt(req.query.drumsetId as string);

        console.log('drumsetId', drumsetId);
        if (Number.isNaN(drumsetId)) {
            drumsets = await DrumsetDao.readDrumsets();
        } else {
            drumsets = await DrumsetDao.readDrumsetsByDrumsetId(drumsetId);
        }
        res.status(200).json(
            drumsets
        );
    } catch (error) {
        console.error('[drumsets.controller][readDrumsets][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching drumsets'
        });
    }
};

export const createDrumset: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await DrumsetDao.createDrumset(req.body);

        console.log('req.body', req.body);
        console.log('drumset', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[drumsets.controller][createDrumset][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing drumsets'
        });
    }
};

export const updateDrumset: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await DrumsetDao.updateDrumset(req.body);

        console.log('req.body', req.body);
        console.log('drumset', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[drumsets.controller][updateDrumset][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating drumset'
        });
    }
};

export const deleteDrumset: RequestHandler = async (req: Request, res: Response) => {
    try {
        let drumsetId = parseInt(req.params.drumsetId as string);
        console.log('drumsetId', drumsetId);

        if (!Number.isNaN(drumsetId)) {
            const response = await DrumsetDao.deleteDrumset(drumsetId);
            res.status(200).json(response);

        } else {
            throw new Error("Integer expected for drumsetId");
        }

    } catch (error) {
        console.error('[drumsets.controller][deleteDrumset][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting drumset'
        });
    }
};