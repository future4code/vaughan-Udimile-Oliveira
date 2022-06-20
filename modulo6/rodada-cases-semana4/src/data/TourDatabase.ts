import { GetTourOutput, Tour } from "../model/Tour";
import { BaseDatabase } from "./BaseDatabase";

export class TourDatabase extends BaseDatabase {
    private TABLE_NAME: string = "dog_walking"

    public insertTour = async (input: Tour): Promise<void> => {
        try{
            await BaseDatabase.connection(this.TABLE_NAME)
            .insert({
                id: input.getId,
                schedulingDate: input.getSchedulingDate,
                latitude: input.getLatitude,
                longitude: input.getLongitude,
                pets: input.getPets,
                startTime: input.getStartTime,
                endTime: input.getEndTime
                
            })
        } catch (error: any ) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getTimeDifference = async (id: string): Promise<any> => {
        try{
            const result = await BaseDatabase.connection(this.TABLE_NAME)
            .select(
                "start_time as startTime",
                "end_time as endTime",
            ).where({id: id})

            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }

    public getPrice = async (id: string)
}