
import { Injectable } from "@angular/core";
import { Product } from "@shared/models/product.interface";
import { Observable, of } from "rxjs";
@Injectable({providedIn: 'root'})
export class StorageService{
    loadProducts(): Observable<Product[]>{
        const rawProducts =localStorage.getItem('products');
        return of(rawProducts ? JSON.parse(rawProducts):[]);
    }
    saveProducts(products:Product[]):void{
        localStorage.setItem('products',JSON.stringify(products));
    }
}