import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Department } from '../models/Department';

@Injectable({
  providedIn: 'root'
})
export class WashingtonAPIService {

  constructor(private http: HttpClient) { }

  getAllDepartments() {
    return this.http.get<Department []>("https://localhost:44366/api/RawData/GetAllDepartments");
  }
}
