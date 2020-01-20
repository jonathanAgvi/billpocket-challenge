export class ShippingAdress {
    public street: string;
    public intNum: number;
    public extNum: string;
    public zipCode: string;
    public suburb: string;
    public city: string;
    public state: string;
    public reference: string;

    constructor(object?: any) {
        this.street = object && object.street ? object.street : null;
        this.intNum = object && object.intNum ? object.intNum : null;
        this.extNum = object && object.extNum ? object.extNum : null;
        this.suburb = object && object.suburb ? object.suburb : null;
        this.city = object && object.city ? object.city : null;
        this.state = object && object.state ? object.state : null;
        this.reference = object && object.reference ? object.state : null;
    }

    get streetAndNum() {
        let streetAndNum = `${this.street} ${this.extNum}`;
        streetAndNum += this.intNum ?  `, Int. ${this.intNum}.` : '.' ;
        return streetAndNum;
    }

    get cityAndState() {
        return `${this.city}, ${this.state}.`;
    }
}