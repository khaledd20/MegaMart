export interface Product {
  id: number; // Assuming id is a number
  title: string;
  price: number;
  description: string;
  image: string; // URL for product image
  category: string; // e.g., "electronics", "jewelery", etc.
  quantity?: number; // Optional quantity property
}
