import { Injectable } from '@angular/core';
import { ShoppingCartItem } from '../model/shopping-car-item';
import { Product } from '../model/product';

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    public shoppingCartList: ShoppingCartItem[];
    public totalItems: number;
    public paymentTotal: number;

    constructor() { 
        this.initShoppingCart()
    }

    /**
     * Initialize the props
     */
    public initShoppingCart() {
        this.shoppingCartList = [];
        this.totalItems = 0;
        this.paymentTotal = 0;
    }

    /**
     * Add item to shoppingCarList
     * @param item
     */
    public addItem(item: ShoppingCartItem) {
        let itemIndex = this.shoppingCartList.findIndex((_item) => { return _item.productId == item.productId });
        if(itemIndex >= 0){
            this.shoppingCartList[itemIndex].quantity += item.quantity;
            this.shoppingCartList[itemIndex].total = this.shoppingCartList[itemIndex].product.price * this.shoppingCartList[itemIndex].quantity;
        } else {
            this.shoppingCartList.push(item);
        }
        this.calculatePaymentTotal();
    }

    /**
     * when the quantity changes recalculates the totals
     * @param item
     */
    public changeQuantity(item: ShoppingCartItem) {
        if(item.quantity == 0) {
            let itemIndex = this.shoppingCartList.findIndex((_item) => { return _item.productId == item.productId });
            this.shoppingCartList.splice(itemIndex, 1);
        }
        item.total = item.quantity * item.product.price;
        this.calculatePaymentTotal();
    }

    /**
     * Calculate the payment total
     */
    private calculatePaymentTotal() {
        this.paymentTotal = 0;
        this.totalItems = 0;
        this.shoppingCartList.forEach((item)=> {
            this.totalItems += item.quantity;
            this.paymentTotal += item.quantity * item.product.price;
        });
        console.log(this.totalItems);
    }


}
