import { Component, OnInit, ViewChild } from '@angular/core';
import { SepomexService } from 'src/app/services/sepomex.service';
import { NgxBarcodeComponent } from 'ngx-barcode';
import { Order } from 'src/app/model/order';
import { ShoppingCartService } from '../../../../services/shopping-cart.service';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
@Component({
	selector: 'app-check-out',
	templateUrl: './check-out.component.html',
	styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
	@ViewChild('barcodeOxxo', { static: false }) barcodeOxxo: NgxBarcodeComponent;
	public emailPattern: RegExp;
	public order: Order;
	public suburbs: string[];
	public paymentMethod: string;
	public urlBarcode: any;
	public customExpDatePattern = {
		"m": {
			pattern: new RegExp(/[0-1]/)
		},
		"M": {
			pattern: new RegExp(/[1-9]/)
		},
		"y": {
			pattern: new RegExp(/[2-9]/)
		},
		"Y": {
			pattern: new RegExp(/[0-9]/)
		}
	};
	public loading: boolean;

	constructor(
		public sepomexService: SepomexService,
		public shoppingCart: ShoppingCartService,
		public router: Router
	) { }

	ngOnInit() {
		this.emailPattern = environment.CONSTANTS.EMAIL_REGEX;
		this.order = new Order();
	}

	/**
	 * Call the sepomexService service when the zip code changes and assigns the values returned by the service.
	 */
	async zipCodeChange() {
		if (this.order.shippingAdress.zipCode.length == 5) {
			try {
				this.sepomexService.getInfoZipCode(this.order.shippingAdress.zipCode).subscribe((responseInfoZipCode) => {
					if (!responseInfoZipCode.error) {
						this.order.shippingAdress.city = responseInfoZipCode.response.ciudad;
						this.order.shippingAdress.state = responseInfoZipCode.response.estado;
						this.order.shippingAdress.suburb = responseInfoZipCode.response.asentamiento[0];
						this.suburbs = responseInfoZipCode.response.asentamiento;
					}
				});

			} catch (error) {
				console.log('Error al obtener informacion');
			}
		}
	}

	/**
	 * Generate a new OXXO payment reference or clear the payment method form fields when payment method changes.
	 */
	public paymentMethodChange() {
		if (this.order.isPaymentOxxo()) {
			this.order.paymentMethod.oxxo.reference = Math.floor(1000000000 + Math.random() * 9000000000);
			setTimeout(() => {
				this.urlBarcode = this.barcodeOxxo.bcElement.nativeElement.children[0].toDataURL('image/jpeg');
			});
		} else {
			this.order.initPaymentMethod();
		}
	}

	/**
	 * Finish the purchase and redirect to thank you page
	 */
	public finishOrder() {
		this.loading = true;
		this.order.total = this.shoppingCart.paymentTotal;
		this.order.finished = true;
		this.order.products = this.shoppingCart.shoppingCartList.map((item) => { return item.product });
		this.order.date = new Date();
		setTimeout(() => {
			this.loading = false;

			this.router.navigateByUrl('/app/shopping-cart/thank-you');
			this.shoppingCart.initShoppingCart();
		}, 1500);
	}

}
