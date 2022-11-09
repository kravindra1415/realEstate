import { IPropertyBase } from "./ipropertbase";

export class Property implements IPropertyBase {
    // Id: number | undefined;
    // SellRent: number | undefined;
    // Name: string | undefined;
    // FType: string | undefined;
    // PType: string | undefined;
    // Price: number | undefined;
    // BHK: number;
    // BuiltArea: number;
    // City: string;
    // RTM: number;
    // Image?: string | undefined;

    id: number;
    sellRent: number;
    name: string | undefined;
    propertyType: string;
    bhk: number;
    furnishingType: string;
    price: number;
    builtArea: number;
    CarpetArea?: number;
    //Image
    Address: string;
    Address2?: string;
    //Address3
    city: string;
    Description?: string;
    FloorNo?: string;
    TotalFloor?: string;
    readyToMove: number;
    AOP?: string;
    //Bathrooms
    MainEntrance?: string;
    Gated?: number;
    Security?: number;
    Maintenance?: number;
    Posession?: string;
    image: string;
    PostedOn: string;
}

        // "Id": 1,
        // "SellRent": 2,
        // "Name": "Birla House",
        // "PType": "House",
        // "BHK": 2,
        // "FType": "Fully",
        // "Price": 12000,
        // "BuiltArea": 1200,
        // "CarpetArea": 900,
        // "Image": "one",
        // "Address": "6 Street",
        // "Address2": "Golf Course Road",
        // "Address3": "Near Bank of America",
        // "City": "Atlanta",
        // "Description": "Well Maintained builder floor available for rent at prime location. # property features- - 5 mins away from metro station - Gated community - 24*7 security. # property includes- - Big rooms (Cross ventilation & proper sunlight) - Drawing and dining area - Washrooms - Balcony - Modular kitchen - Near gym, market, temple and park - Easy commuting to major destination. Feel free to call With Query.",
        // "FloorNo": "3",
        // "TotalFloor": "3",
        // "AOP": 10,
        // "Bathrooms": 2,
        // "MainEntrance": "East",
        // "Gated": 1,
        // "Security": 0,
        // "Maintenance": 300,
        // "Posession": "Ready to move",
        // "PostedOn": "01-Jan-2019"