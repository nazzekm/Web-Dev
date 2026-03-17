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
  templateUrl: './app.html',
  styleUrl: './app.css'
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

  getCategoryImage(id: number): string {
    const map: Record<number, string> = {
      1: 'https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg',
      2: 'https://resources.cdn-kaspi.kz/img/m/p/p66/pf4/16710080.jpg',
      3: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg',
      4: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png'
      5: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDC5mnOJTktdDR3u3ykxbtPI4OSM2Mx5-ag&s'
    };
    return map[id] ?? '';
  }
}