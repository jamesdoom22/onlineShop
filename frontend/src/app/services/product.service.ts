import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductModelServer,ServerResponse } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  getAllProducts(numberOfResults = 10): Observable<ServerResponse>{
    return this.http.get<ServerResponse>(this.SERVER_URL+'/products', {
      params: {
        limit: numberOfResults.toString()
      }
    });
  }

  /*GET SINGLE PRODUCT FROM SERVER*/
  getSingleProduct(id: number): Observable<ProductModelServer>{
    return this.http.get<ProductModelServer>(this.SERVER_URL+'/products/' + id)
  }

  /*GET PRODUCT FROM ONE CATEGORY*/
  getProductsFromCategory(catName: string): Observable<ProductModelServer>{
    return this.http.get<ProductModelServer>(this.SERVER_URL+"/products/category/"+ catName);
  }
}
