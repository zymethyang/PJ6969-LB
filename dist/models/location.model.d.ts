import { Entity } from '@loopback/repository';
export declare class Location extends Entity {
    id?: string;
    city?: string;
    country?: string;
    district?: string;
    img?: string;
    owner_id?: string;
    street_name?: string;
    ward?: string;
    [prop: string]: any;
    constructor(data?: Partial<Location>);
}
export interface LocationRelations {
}
export declare type LocationWithRelations = Location & LocationRelations;
