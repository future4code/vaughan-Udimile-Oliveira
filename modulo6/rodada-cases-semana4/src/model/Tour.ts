export class Tour {
    constructor(
        private id: string,
        private status: string,
        private schedulingDate: number,
        private price: number,
        private duration: number,
        private latitude: number,
        private longitude: number,
        private pets: number,
        private startTime: number,
        private endTime: number
    ) { }

    public getId(): string {
        return this.id
    }

    public getStatus(): string {
        return this.status
    }
    public getSchedulingDate(): number {
        return this.schedulingDate
    }
    public getPrice(): number {
        return this.price
    }
    public getDuration(): number {
        return this.duration
    }
    public getLatitude(): number {
        return this.latitude
    }
    public getLongitude(): number {
        return this.longitude
    }
    public getPets(): number {
        return this.pets
    }
    public getStartTime(): number {
        return this.startTime
    }
    public getEndTime(): number {
        return this.endTime
    }
}

export interface RegisterTourInputDTO {
    id: string,
    status: STATUS,
    schedulingDate: number,
    price: number,
    duration: number,
    latitude: number,
    longitude: number,
    pets: number,
    startTime: number,
    endTime: number
}

export enum STATUS {
    FAZER = "A FAZER",
    ANDAMENTO = "EM ANDAMENTO",
    REALIZADO = "REALIZADO"
}

export interface GetTourOutput {
    id: string,
    status: STATUS,
    schedulingDate: number,
    price: number,
    duration: number,
    latitude: number,
    longitude: number,
    pets: number,
    startTime: number,
    endTime: number
}