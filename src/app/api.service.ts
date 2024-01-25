import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) { 

  }

  // link API
  apiURL() {
    return "http://localhost/api";
  }

  getBuku(){
    return this.http.get(this.apiURL()+'/tampil.php');
  }

  
}
