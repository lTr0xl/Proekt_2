import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tags2',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './tags2.component.html',
  styleUrl: './tags2.component.css'
})
export class Tags2Component {


  tags?:String[];

  constructor(private courseService:FoodService,private route:ActivatedRoute , private router:Router){

  }

  borderStyle1:string = 'border-change';
  borderStyle2:string = 'border-default';
  borderStyle3:string = 'border-default';
  
  border1(){
    this.borderStyle1='border-change';
    this.borderStyle2='border-default';
    this.borderStyle3='border-default';
  }
  border2(){
    this.borderStyle1='border-default';
    this.borderStyle2='border-change';
    this.borderStyle3='border-default';
  }
  border3(){
    this.borderStyle1='border-default';
    this.borderStyle2='border-default';
    this.borderStyle3='border-change';
  }

  ngOnInit():void{
    
  }
}
