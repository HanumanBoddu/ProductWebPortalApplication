import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { }
  private apiUrl='http://localhost:3000/products';
  getProducts():Observable<any>{
    return this.http.get(this.apiUrl);
  }
  getProduct(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  addReview(productId:any,review:any):Observable<any>{
    return this.http.patch(`${this.apiUrl}/${productId}`,{reviews:review});
  }
}
