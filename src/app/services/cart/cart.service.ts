import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Food } from '../../shared/models/Food';
import { CartItem } from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(course:Food):void{
    let cartItem = this.cart.items.find( item => item.course.id === course.id)

    if(cartItem){
      this.changeQuantity(course.id, cartItem.quantity+1);
      return;
    }

    this.cart.items.push(new CartItem(course));
  };

  removeFromCart(courseId:number):void{
    this.cart.items=this.cart.items.filter(item => item.course.id!=courseId);
  }

  changeQuantity(courseId:number, quantity:number):void{
    let cartItem=this.cart.items.find(item => item.course.id===courseId);
    if(!cartItem) return;
    cartItem.quantity=quantity;
  }

  getCart():Cart{
    return this.cart;
  }


}
