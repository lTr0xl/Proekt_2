import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { RouterLink } from '@angular/router';
import { Tags2Component } from '../tags2/tags2.component';
import { FooterComponent } from '../footer/footer.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SearchComponent,TagsComponent,RouterLink,Tags2Component,FooterComponent,StarRatingComponent,NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  courses:Food[]=[];
  constructor(private foodService:FoodService, private route:ActivatedRoute){
  }
  ngOnInit():void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.courses = this.foodService.getAllCoursesBySearchTerm(params['searchTerm']);
      }else if(params['tag2']){
        this.courses=this.foodService.getAllCoursesByTag2(params['tag2']);
      }else{
        this.courses=this.foodService.getAll().filter(course=> course.tags2?.includes('popular'));
      }
    });

    
  }

}