import { HttpClient } from '@angular/common/http';
import {
  EnvironmentInjector,
  Injectable,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { environment } from '@envs/environment';
import { Product } from '@shared/models/product.interface';
import { map, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  public products = signal<Product[]>([]);
  public categories = signal<string[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;
  private readonly _injector = inject(EnvironmentInjector);

  constructor() {
    this.getProducts();
    this.getCategories()
  }

  public getProducts(): void {
    this._http
      .get<Product[]>(`${this._endPoint}/products`)
      .pipe(
        map((products: Product[]) =>
          products.map((product: Product) => ({ ...product, qty: 1 }))
        ),
        tap((products: Product[]) => this.products.set(products))
      )
      .subscribe();
  }

  public getProductById(id: number) {
    return runInInjectionContext(this._injector, () =>
      toSignal<Product>(
        this._http.get<Product>(`${this._endPoint}/products/${id}`)
      )
    );
  }

  public getProductsByCategory(category: string): void {
    this._http
      .get<Product[]>(`${this._endPoint}/products`)
      .pipe(
        map((products: Product[]) =>
          products
            .filter((product) => product.category === category)
            .map((product) => ({ ...product, qty: 1 }))
        ),
        tap((filteredProducts) => this.products.set(filteredProducts))
      )
      .subscribe();
  }

  public getCategories(): void {
    this._http
      .get<Product[]>(`${this._endPoint}/products`)
      .pipe(
        map((products: Product[]) => 
          [...new Set(products.map((product) => product.category))]
        ),
        tap((uniqueCategories) => this.categories.set(uniqueCategories))
      )
      .subscribe();
  }
  

 
}
