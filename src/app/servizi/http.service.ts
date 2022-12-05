import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "https://e-commerce1-33748-default-rtdb.europe-west1.firebasedatabase.app/"

  constructor(private http: HttpClient) { }

  getProdotto(url:string){
    url = this.url;
    
  }
}
