import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <h2>Categories</h2>

    <div class="cats">
      @for (c of categories; track c.id) {
        <button
          class="cat"
          [class.active]="selectedCategoryId === c.id"
          (click)="selectCategory(c.id)"
        >
          {{ c.name }}
        </button>
      }
    </div>

    @if (selectedCategoryId === null) {
      <p class="hint">Select a category to see products.</p>
    } @else {
      <app-product-list
        [products]="filteredProducts"
        (deleteProduct)="deleteFromCurrent($event)"
      />
    }
  `,
  styles: [`
    .cats { display:flex; gap:10px; flex-wrap:wrap; padding: 10px 0; }
    .cat { padding: 8px 12px; border-radius: 8px; border: 1px solid #ddd; cursor:pointer; background:#fff; }
    .cat.active { background:#1976d2; color:#fff; border-color:#1976d2; }
    .hint { color:#666; padding: 10px 0; }
  `]
})
export class App {
  categories: Category[] = [];
  allProducts: Product[] = [];

  selectedCategoryId: number | null = null;
  filteredProducts: Product[] = [];

  constructor(private ps: ProductService) {
    this.categories = this.ps.getCategories();
    this.allProducts = this.ps.getProducts();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.filteredProducts = this.allProducts.filter(p => p.categoryId === categoryId);
  }

  deleteFromCurrent(productId: number) {
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
    this.filteredProducts = this.filteredProducts.filter(p => p.id !== productId);
  }
}
