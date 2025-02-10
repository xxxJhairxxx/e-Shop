import { Component, EventEmitter, Output, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@shared/models/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ RouterLink],
  template: `

<div
     
     class="max-w-smcursor-pointer bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
   >
     <a  [routerLink]="['/product', product().id]" class="h-[20rem] block">
       <img class="object-cover w-full h-full rounded-t-lg" [src]="product().image" alt="" />
     </a>
     <div class="p-5">
       <a href="#">
         <h5
           class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
         >
           {{ product().title }}
         </h5>
       </a>
       <p class="mb-3 font-normal h-[4rem] truncate-multiline text-gray-700 dark:text-gray-400">
         {{ product().description }}
       </p>
       <div class="flex items-center w-full justify-between">
         <h3 class="text-2xl">$ {{ product().price }}</h3>
         <button
          (click)="onAddToCart()"
           class="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         >
           Add to cart
         </button>
       </div>
     </div>
   </div>
  `,
})
export class CardComponent {
  product = input.required<Product>();
  @Output() addToCartEvent = new EventEmitter<Product>();

  onAddToCart(): void {
    this.addToCartEvent.emit(this.product());
  }
}
