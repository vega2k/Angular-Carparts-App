export class CarPart {
  id: number;
  name: string;
  description: string;
  inStock: number;
  price: number;
  image: string;
  quantity: number;
  featured: boolean;

  constructor(id: number, name: string, description: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
}
