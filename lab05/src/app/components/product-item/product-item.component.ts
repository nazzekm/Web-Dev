import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes++;
  }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.delete.emit(this.product().id);
    }
  }

  shareWhatsApp() {
    const p = this.product();
    const url = encodeURIComponent(p.link);
    const text = encodeURIComponent(p.name);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareTelegram() {
    const p = this.product();
    const url = encodeURIComponent(p.link);
    const text = encodeURIComponent(p.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  stars(): number[] {
    return [1, 2, 3, 4, 5];
  }
}