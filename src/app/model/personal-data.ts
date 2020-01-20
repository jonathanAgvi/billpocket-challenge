export class PersonalData {
    public id: string;
    public firstName: string;
    public lastName: string;
    public cellphone: string;
    public homephone: string;
    public email: string;


    constructor(object?: any) {
        this.id = object && object.id ? object.id : null;
        this.firstName = object && object.firstName ? object.firstName : null;
        this.lastName = object && object.lastName ? object.lastName : null;
        this.cellphone = object && object.cellphone ? object.cellphone : null;
        this.homephone = object && object.homephone ? object.homephone : null;
        this.email = object && object.email ? object.email : null;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}