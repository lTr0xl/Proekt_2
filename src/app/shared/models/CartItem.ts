import { Food } from "./Food";

export class CartItem{

    constructor(course:Food){
        this.course=course;
    }

    course:Food;
    quantity:number=1;

    get price():number{
        return this.course.price * this.quantity;
    }
}