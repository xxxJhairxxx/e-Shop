import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Product } from '@shared/models/product.interface';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from './../services/localStorage.service';

export interface CartStore {
  products: Product[];
  totalAmount: number;
  productsCount: number;
}

const initialState: CartStore = {
  products: [],
  totalAmount: 0,
  productsCount: 0,
};

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ products }) => ({
    productsCount: computed(() => calculateProductCount(products())),
    totalAmount: computed(() => calculateTotalAmount(products())),
  })),
  withMethods(
    (
      { products, ...store },
      toastSvc = inject(ToastrService),
      storageSvc = inject(StorageService)
    ) => {
      // Inicializar el carrito cargando productos guardados
      storageSvc.loadProducts().subscribe((savedProducts) => {
        if (savedProducts.length > 0) {
          patchState(store, { products: savedProducts });
        }
      });

      return {
        addToCart(product: Product) {
          const isProductInCart = products().find(
            (item: Product) => item.id === product.id
          );

          if (isProductInCart) {
            isProductInCart.qty++;
            isProductInCart.subTotal =
              isProductInCart.qty * isProductInCart.price;
            patchState(store, { products: [...products()] });
          } else {
            const newProduct = { ...product, qty: 1, subTotal: product.price };
            patchState(store, { products: [...products(), newProduct] });
          }
          toastSvc.success('Product added', 'E-STORE');
          storageSvc.saveProducts(products());
        },
        removeFromCart(productId: number) {
          const updatedProducts = products().filter(
            (product) => product.id !== productId
          );
          patchState(store, { products: updatedProducts });
          toastSvc.info('Product removed', 'E-STORE');
          storageSvc.saveProducts(updatedProducts);
        },
        incrementQty(productId: number) {
          const updatedProducts = products().map((product) => {
            if (product.id === productId) {
              product.qty++;
              product.subTotal = product.qty * product.price;
            }
            return product;
          });
          patchState(store, { products: updatedProducts });
          storageSvc.saveProducts(updatedProducts);
        },
        decrementQty(productId: number) {
          const updatedProducts = products().map((product) => {
            if (product.id === productId && product.qty > 1) {
              product.qty--;
              product.subTotal = product.qty * product.price;
            }
            return product;
          });
          patchState(store, { products: updatedProducts });
          storageSvc.saveProducts(updatedProducts);
        },
      };
    }
  )
);

function calculateTotalAmount(products: Product[]): number {
  return products.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );
}

function calculateProductCount(products: Product[]): number {
  return products.reduce((acc, product) => acc + product.qty, 0);
}
