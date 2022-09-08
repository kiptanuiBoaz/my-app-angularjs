

// An interface is a syntactical contract that an entity should conform to
export interface HousingLocation {
    name:string,
    city:string,
    state:string,
    photo:string,
    availableUnits:number,
    wifi:boolean;
    laundry:boolean;
}
