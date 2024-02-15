import { Component } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagsComponent } from '../tags/tags.component';
import { RouterLink } from '@angular/router';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { CartService } from '../services/cart/cart.service';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [FormsModule,CommonModule,TagsComponent,RouterLink, StarRatingComponent,NotFoundComponent],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {
  
  course!: Food;
  
  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService , private cartService:CartService,private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.course= foodService.getCourseById(params['id']);
      }
    })
  }
  
  addToCart(){
    this.cartService.addToCart(this.course);
  }  

}
