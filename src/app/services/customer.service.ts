import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from "rxjs";
import { CustomerInfo } from "../interfaces/customer-info";
import { CUSTOMERINFO } from "../mock-data";

@Injectable({
    providedIn: 'root'
})

export class CustomerInfoService {
    constructor(private http: HttpClient) {}
    
    private apiUrl = 'http://localhost:5000/customers';

    getCustomerInfo(): Observable<CustomerInfo[]> {
       return this.http.get<CustomerInfo[]>(this.apiUrl);
    }
}