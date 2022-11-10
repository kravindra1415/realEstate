export interface IPropertyBase {
    id: number | undefined;
    sellRent: number | undefined;
    name: string | undefined;
    furnishingType: string | undefined;
    propertyType: string | undefined;
    price: number | any;
    bhk: number | any;
    builtArea: number | any;
    city: string;
    readyToMove: number;
    image?: string;
    estPosessionOn?: Date | any;
}