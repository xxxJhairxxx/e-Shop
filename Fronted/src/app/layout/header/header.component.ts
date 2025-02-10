import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartStore } from '@shared/store/shopping-cart.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  cartStore = inject(CartStore);
  showModal: boolean = false;
  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  removeItem(id: number): void {
    this.cartStore.removeFromCart(id);
  }

  onIncrease(id:number){
    this.cartStore.incrementQty(id);}

    onDecrease(id:number){
      this.cartStore.decrementQty(id)
    }
}
