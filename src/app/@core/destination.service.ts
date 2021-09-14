import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  BASE_URL = 'https://devapi.luckytrip.co.uk/api/2.0/top_five/destination';

  constructor(private http: HttpClient) { }


  searchByCityAndCountry(searchTerm: string) {
    let params = new HttpParams();
    params = params.append("search_type", "city_or_country");
    params = params.append("search_value", searchTerm);
    return this.http.get(`${this.BASE_URL}s`, { params: params })
  }

  searchByCity(searchTerm: string) {
    let params = new HttpParams();
    params = params.append("search_type", "city");
    params = params.append("search_value", searchTerm);
    return this.http.get(`${this.BASE_URL}s`, { params: params })
  }

  getAllDestinations() {
    return this.http.get(`${this.BASE_URL}s`);
  }

  getDestinationDetail(id: number) {
    let params = new HttpParams();
    params = params.append("id", id);
    return this.http.get(this.BASE_URL, { params: params })
  }


}
