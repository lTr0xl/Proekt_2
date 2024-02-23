import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-searchcomp',
  standalone: true,
  imports: [CommonModule,SearchComponent,TagsComponent,RouterLink,FooterComponent,StarRatingComponent,NotFoundComponent],
  templateUrl: './searchcomp.component.html',
  styleUrl: './searchcomp.component.css'
})
export class SearchcompComponent {
  courses:Food[]=[];
  type?:string;

  constructor(private foodService:FoodService, private route:ActivatedRoute){
  }
  
  ngOnInit():void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.courses = this.foodService.getAllCoursesBySearchTerm(params['searchTerm']);
      }else if(params['tag']){
        this.type=params['tag'];
        this.courses=this.foodService.getAllCoursesByTag(params['tag']);
      }
    });

    
  }
}
