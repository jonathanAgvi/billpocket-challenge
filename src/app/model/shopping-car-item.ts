import { Product } from './product';

export class ShoppingCartItem {
    public quantity: number;
    public total: number;
    public product: Product;
    public productId: string;

    constructor(object?: any) {
        this.quantity = object && object.quantitty ? object.quantitty : 0;
        this.total = object && object.total ? object.total : 0;
        this.product =  object && object.products ? new Product(object.product) : new Product();
    }
}