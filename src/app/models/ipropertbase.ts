export interface IPropertyBase {
    id: number | undefined;
    sellRent: number | undefined;
    name: string | undefined;
    furnishingType: string | undefined;
    propertyType: string | undefined;
    price: number | undefined;
    bhk: number;
    builtArea: number;
    city: string;
    readyToMove: number;
    image?: string;
    estPosessionOn?: Date | undefined;
}