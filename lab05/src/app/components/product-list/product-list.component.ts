import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // получаем продукты от родителя
  products = input<Product[]>([]);

  // событие наверх
  deleteProduct = output<number>();

  // просто пробрасываем delete вверх
  onDelete(id: number) {
    this.deleteProduct.emit(id);
  }
}