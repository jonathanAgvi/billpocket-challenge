import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from '../../../../services/shopping-cart.service';
import { ShoppingCartItem } from '../../../../model/shopping-car-item';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-product-description',
	templateUrl: './product-description.component.html',
	styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit, OnDestroy {
	private subscription: Subscription;
	public product: Product;
	public quantity: number;

	constructor(
		public productsService: ProductsService, 
		public router: ActivatedRoute, 
		public shoppingCart: ShoppingCartService,
		private _snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.quantity = 1;
		this.subscription = this.router.params.subscribe(async (params) => {
			await this.productsService.initProducts();
			this.product = this.productsService.products.find((product) => {
				return product.id == params.id
			});
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	public addShoppingCart() {
		let item = new ShoppingCartItem();
		item.quantity = this.quantity;
		item.total = this.quantity * this.product.price;
		item.productId = this.product.id;
		item.product = this.product;
		if(this.shoppingCart.totalItems + item.quantity <= 10) {
			this.shoppingCart.addItem(item);
			this._snackBar.open('Producto agregado al carrito.', '', {
				duration: 2000,
				horizontalPosition: 'center',
				verticalPosition: 'top',
				panelClass: ['bg-success']
			});
		} else {
			this._snackBar.open('Solo se pueden agregar 10 productos a tu carrito.', '', {
				duration: 2000,
				horizontalPosition: 'center',
				verticalPosition: 'top'
			});
		}
	}

}
