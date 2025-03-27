export class Origin {
    constructor({ year, month, date, hour, minute, second, latitude, longitude, handleUTCDate }?: {
        year?: number;
        month?: number;
        date?: number;
        hour?: number;
        minute?: number;
        second?: number;
        latitude?: number;
        longitude?: number;
        handleUTCDate?: { 
            year?: number; 
            month?: number; 
            date?: number; 
            hour?: number; 
            minute?: number; 
            second?: number; 
        };
    });
    year: any;
    month: any;
    date: any;
    hour: any;
    minute: any;
    latitude: number;
    longitude: number;
    timeObject: {
        year: number;
        month: number;
        date: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
    };
    timezone: any;
    localTime: any;
    localTimeFormatted: any;
    utcTime: any;
    utcTimeFormatted: any;
    julianDate: number;
    localSiderealTime: number;
}
export default Origin;
