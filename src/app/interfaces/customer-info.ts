import { CustomerVehicleInfo } from "./customer-vehicle-info";

export interface CustomerInfo {
    id?: number;
    firstName: string;
    lastName: string;
    address: string;
    zipcode: number | undefined;
    city: string;
    state: string;
    phoneNumber: string;
    vehicleInfo: CustomerVehicleInfo;
}
