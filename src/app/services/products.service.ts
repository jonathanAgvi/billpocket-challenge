import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	public products: Product[];

	constructor(private http: HttpClient) {
	}

	public async initProducts() {
		let productList = await this.http.get("./assets/json/products.json").toPromise();
		this.products = (productList as any[]).map((product)=> { return new Product(product) });		
	}

}
