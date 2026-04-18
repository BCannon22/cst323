import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Drumset } from "./drumsets.model";
import { drumsetQueries } from './drumsets.queries';


export const readDrumsets = async () => {
    return execute<Drumset[]>(drumsetQueries.readDrumsets, []);
};

export const readDrumsetsByDrumsetId = async (drumsetId: number) => {
    return execute<Drumset[]>(drumsetQueries.readDrumsetsByDrumsetId, [drumsetId]);
};

export const createDrumset = async (drumset: Drumset) => {
    return execute<OkPacket>(drumsetQueries.createDrumset,
        [drumset.name, drumset.price, drumset.type, drumset.brand, drumset.imageUrl]);
};

export const updateDrumset = async (drumset: Drumset) => {
    return execute<OkPacket>(drumsetQueries.updateDrumset,
        [drumset.name, drumset.price, drumset.type, drumset.brand, drumset.imageUrl, drumset.drumsetId]);
};

export const deleteDrumset = async (drumsetId: number) => {
    return execute<OkPacket>(drumsetQueries.deleteDrumset, [drumsetId]);
};
