import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  private products: Product[] = [
    // Smartphones (categoryId: 1) — 5
    { id: 101, name: 'Apple iPhone 15 128GB', price: 399990, description: 'A16, 128GB', categoryId: 1, likes: 0, link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-large', rating: 4},
    { id: 102, name: 'Samsung Galaxy S24 256GB', price: 449990, description: 'AMOLED, 256GB', categoryId: 1, likes: 0, link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-large' , rating: 3},
    { id: 103, name: 'Xiaomi Redmi Note 13 Pro 256GB', price: 169990, description: '256GB, mid-range', categoryId: 1, likes: 0, link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-8-gb-256-gb-chernyi-115911365/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/h09/84917646688286.jpg?format=gallery-large' , rating:2},
    { id: 104, name: 'Google Pixel 8 128GB', price: 359990, description: 'Great camera', categoryId: 1, likes: 0, link: 'https://kaspi.kz/shop/p/google-pixel-8a-8-gb-128-gb-chernyi-119270938/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h8f/85986943762462.jpg?format=gallery-large' , rating: 4},
    { id: 105, name: 'Apple iPhone 17 256GB', price: 299990, description: 'Glyph design', categoryId: 1, likes: 0, link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/?c=750000000', image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/pa5/64165039.png?format=gallery-large', rating: 5},

    // Laptops (categoryId: 2) — 5
    { id: 201, name: 'Apple MacBook Air M2 13"', price: 549990, description: 'M2, 8/256', categoryId: 2, likes: 0, link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large', rating: 4},
    { id: 202, name: 'Lenovo IdeaPad 5', price: 329990, description: 'Work/study laptop', categoryId: 2, likes: 0, link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-5-14irh10r-14-16-gb-ssd-1000-gb-bez-os-83j00019rk-144404702/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/pdb/pa0/59741107.png?format=gallery-large', rating: 4},
    { id: 203, name: 'ASUS TUF Gaming F15', price: 449990, description: 'Gaming series', categoryId: 2, likes: 0, link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-15-6-32-gb-ssd-1000-gb-win-11-pro-fx507zc4-hx145zw-90nr0gw1-m0zbw0-119190572/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h0f/85967875964958.png?format=gallery-large', rating: 3},
    { id: 204, name: 'HP Pavilion 15', price: 319990, description: 'Everyday laptop', categoryId: 2, likes: 0, link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh3007ci-15-6-16-gb-ssd-1024-gb-dos-7p438ea-uuq-111968153/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/hb6/82089377726494.jpg?format=gallery-large', rating: 5},
    { id: 205, name: 'Acer Aspire 5', price: 279990, description: 'Budget laptop', categoryId: 2, likes: 0, link: 'https://kaspi.kz/shop/p/acer-aspire-5-spin-14-14-16-gb-ssd-1000-gb-win-11-pro-nx-khter-002w-143152048/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/p76/p0f/55291864.jpg?format=gallery-large', rating: 5},

    // Headphones (categoryId: 3) — 5
    { id: 301, name: 'Apple AirPods Pro (2)', price: 129990, description: 'ANC, wireless', categoryId: 3, likes: 0, link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=750000000' , image : 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-large', rating: 5},
    { id: 302, name: 'Sony WH-1000XM5', price: 199990, description: 'Top ANC', categoryId: 3, likes: 0, link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-large', rating: 2},
    { id: 303, name: 'JBL Tune 510BT', price: 19990, description: 'Budget wireless', categoryId: 3, likes: 0, link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-belyi-101420096/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h20/64237178093598.jpg?format=gallery-large', rating: 4},
    { id: 304, name: 'Samsung Galaxy Buds2 Pro', price: 89990, description: 'Wireless buds', categoryId: 3, likes: 0, link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-belyi-106128764/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h44/64496879435806.jpg?format=gallery-large', rating: 4},
    { id: 305, name: 'HyperX Cloud II', price: 49990, description: 'Gaming headset', categoryId: 3, likes: 0, link: 'https://kaspi.kz/shop/p/naushniki-hyperx-cloud-ii-belyi-112759869/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h54/83044720771102.jpg?format=gallery-large', rating:3},

    // Tablets (categoryId: 4) — 5
    { id: 401, name: 'Apple iPad 10th Gen 64GB', price: 229990, description: 'Basic iPad', categoryId: 4, likes: 0, link: 'https://kaspi.kz/shop/p/apple-ipad-10th-gen-2024-10-9-djuim-4-gb-256-gb-serebristyi-136504586/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/p5d/p30/30827845.png?format=gallery-large', rating: 5},
    { id: 402, name: 'iPad Air 11 128GB', price: 349990, description: 'M1 chip', categoryId: 4, likes: 0, link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-fioletovyi-138202498/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/pae/pf8/37020299.png?format=gallery-large', rating: 5},
    { id: 403, name: 'Samsung Galaxy Tab S9', price: 399990, description: 'AMOLED tablet', categoryId: 4, likes: 0, link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-large', rating: 3},
    { id: 404, name: 'Xiaomi Pad 6', price: 199990, description: 'Good value', categoryId: 4, likes: 0, link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-large', rating: 4},
    { id: 405, name: 'Lenovo Tab P11', price: 149990, description: 'Media tablet', categoryId: 4, likes: 0, link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-2nd-gen-zabf0065ru-11-5-djuim-4-gb-128-gb-seryi-113734499/?c=750000000' , image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/hdd/84153262080030.jpg?format=gallery-large', rating: 1},
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  likeProduct(productId: number): void {
    const p = this.products.find(x => x.id === productId);
    if (p) p.likes++;
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}