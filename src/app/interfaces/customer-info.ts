import { CustomerVehicleInfo } from "./customer-vehicle-info";

export interface CustomerInfo {
    id?: number;
    firstName?: string | undefined;
    lastName?: string | undefined;
    address?: string | undefined;
    zipcode?: number | undefined;
    city?: string;
    state?: string | undefined;
    phoneNumber?: string | undefined;
    vehicleInfo?: CustomerVehicleInfo;
}
