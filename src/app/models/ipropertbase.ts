export interface IPropertyBase {
    Id: number | undefined;
    SellRent: number | undefined;
    Name: string | undefined;
    FType: string | undefined;
    PType: string | undefined;
    Price: number | undefined;
    BHK: number;
    BuiltArea: number;
    City: string;
    RTM: number;
    Image?: string;
}