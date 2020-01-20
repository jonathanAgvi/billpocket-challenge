export class Product {
    public id: string;
    public name: string;
    public photoUrl: string;
    public price: number;
    public description: string;
    public quantities: number[];

    constructor(object?: any) {
        this.id = object && object.id ? object.id : null;
        this.name = object && object.name ? object.name : null;
        this.photoUrl = object && object.photoUrl ? object.photoUrl : null;
        this.price = object && object.price ? object.price : null;
        this.description = object && object.description ? object.description : null;
        this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    get routeProductDescription() {
        return `/app/product/description/${this.id}`
    }
}