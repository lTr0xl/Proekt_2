import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private route:ActivatedRoute , private router:Router){}

  searchTerm:String="";

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      if(params['searchTerm']){
        this.searchTerm = params['searchTerm'];
      }
    })
  }

  search():void{
    if(this.searchTerm){
      this.router.navigateByUrl('/search/'+this.searchTerm);
    }
  }

}
