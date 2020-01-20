import { PersonalData } from './personal-data';
import { ShippingAdress } from './shipping-adress';
import { Product } from './product';
import { environment } from '../../environments/environment';

export class Order {
    public id: string;
    public date: Date;
    public finished: boolean;
    public paymentMethodType: string;
    public paymentMethod: PaymentMethod;
    public personalData: PersonalData;
    public shippingAdress: ShippingAdress;
    public products: Product[];
    public total: number;

    public static paymentMethodTypeOxxo = 'oxxo';
    public static paymentMethodTypeCard = 'card';
    public static paymentMethodTypeOxxoText = 'Pago referenciado Oxxo';
    public static paymentMethodTypeCardText = 'Tarjeta de crédito o débito';


    constructor(object?: any) {
        this.id = object && object.id ? object.id : null;
        this.date = object && object.date ? object.date : new Date();
        this.finished = object && object.finished ? object.finished : false;
        this.total = object && object.total ? object.total : 0;
        this.personalData = object && object.personalData ? object.personalData : new PersonalData();
        this.shippingAdress = object && object.shippingAdress ? object.shippingAdress : new ShippingAdress();
        this.paymentMethod = object && object.paymentMethod ? object.paymentMethod : this.initPaymentMethod();
        this.paymentMethodType = object && object.paymentMethodType ? object.paymentMethodType : null;
    }

    /**
    * Initialize the payment method 
    *  @return An object type `PaymentMethod`
    */
    public initPaymentMethod(): PaymentMethod {
        return {
            oxxo: {
                reference: null
            },
            debitOrCredit: {
                number: null,
                expiration: null,
                cvv: null,
                cardHolderName: null
            }
        }
    }

   /**
    * Evaluate if the card number matches with any regular expression and returns the class css for the icon
    * @return An `string` of the css class icon
    */
    public getCreditCardIcon(): string {
        if (this.paymentMethod && this.paymentMethod.debitOrCredit) {
            if (environment.CONSTANTS.VISA_REGEX.test(this.paymentMethod.debitOrCredit.number)) { // Visa test
                return 'fab fa-1_5x fa-cc-visa';
            } else if (environment.CONSTANTS.MASTERCARD_REGEX.test(this.paymentMethod.debitOrCredit.number)) { // Mastercard test
                return 'fab fa-1_5x fa-cc-mastercard';
            } else if (environment.CONSTANTS.AMEX_REGEX.test(this.paymentMethod.debitOrCredit.number)) { // American Express test
                return 'fab fa-1_5x fa-cc-amex';
            } else if (environment.CONSTANTS.DINNERS_CLUB_REGEX.test(this.paymentMethod.debitOrCredit.number)) { // Diners Club test
                return 'fab fa-1_5x fa-cc-diners-club';
            } else if (environment.CONSTANTS.DISCOVER_REGEX.test(this.paymentMethod.debitOrCredit.number)) { // Discover test
                return 'fab fa-1_5x fa-cc-discover';
            } if (environment.CONSTANTS.JCB_REGEX.test(this.paymentMethod.debitOrCredit.number)) { // JCB test
                return 'fab fa-1_5x fa-cc-jcb';
            }
        }
        return null;
    }

    /**
     * Returns number card in format **** **** **** 1234
     */
    public getCardTermination(): string  {
        if (this.paymentMethod && this.paymentMethod.debitOrCredit.number) {
            let length = this.paymentMethod.debitOrCredit.number.length;
            return `**** **** **** ${this.paymentMethod.debitOrCredit.number.substr(length - 4)}`;
        }
        return null;
    }

    public isPaymentOxxo() {
        return Order.paymentMethodTypeOxxo == this.paymentMethodType;
    }

    public isPaymentCard() {
        return Order.paymentMethodTypeCard == this.paymentMethodType;
    }
}

export interface PaymentMethod {
    oxxo: {
        reference: number
    },
    debitOrCredit: {
        number: string,
        expiration: string,
        cvv: number,
        cardHolderName: string
    }
}