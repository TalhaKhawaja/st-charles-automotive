import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerReservations as CustomerReservation } from '../interfaces/customer-reservations';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CustomerReservationService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:5000/reservations';

  getCustomerReservations(): Observable<CustomerReservation[]> {
    return this.http.get<CustomerReservation[]>(this.apiUrl);
  }

  addCustomerReservation(
    reservation: CustomerReservation
  ): Observable<CustomerReservation> {
    return this.http.post<CustomerReservation>(
      this.apiUrl,
      reservation,
      httpOptions
    );
  }
}
