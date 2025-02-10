import { Component, inject } from '@angular/core';
import { ProductsService } from '@api/products.service';
import { CardComponent } from '@features/products/card/card.component';
import { Product } from '@shared/models/product.interface';
import { CartStore } from '@shared/store/shopping-cart.store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  template: `
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto text-white">
        <label for="category-filter" class="block mb-2"
          >Filtrar por categoría:</label
        >
        <select
          id="category-filter"
          (change)="filterByCategory($event)"
          class="text-white mb-4 px-4  bg-blue-800 hover:bg-blue-800  font-medium rounded-lg text-sm py-2.5  inline-flex items-center "
        >
          <option
            value="all"
            class="block "
          >
            Todos
          </option>
          @for (category of this.categories(); track $index) {
          <option
            [value]="category"
            class="block  h-[2rem] bg-gray-100 text-black"
          >
            {{ category }}
          </option>
          }
        </select>

        <div class="flex flex-wrap -m-4">
          @for (product of products(); track $index) {
          <app-card
            (addToCartEvent)="onAddToCart($event)"
            class="w-full p-4 lg:w-1/4 md:w-1/2"
            [product]="product"
          />
          }
        </div>
      </div>
    </section>
  `,
})
export default class ProductsComponent {
  private readonly productSvc = inject(ProductsService);
  private readonly cartStore = inject(CartStore);

  products = this.productSvc.products;
  categories = this.productSvc.categories;

  onAddToCart(product: Product): void {
    this.cartStore.addToCart(product);
  }

  filterByCategory(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const category = selectElement.value;

    if (category === 'all') {
      this.productSvc.getProducts(); // Mostrar todos si la opción es "Todos"
    } else {
      this.productSvc.getProductsByCategory(category); // Filtrar por categoría
    }
  }
}
