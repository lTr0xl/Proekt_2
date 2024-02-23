import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { CoursesHomeComponent } from './courses-home/courses-home.component';
import { SurveyComponent } from './survey/survey.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SearchcompComponent } from './searchcomp/searchcomp.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'search/:searchTerm', component:SearchcompComponent},
    {path:'tag/:tag', component:CoursesHomeComponent},
    {path:'tag2/:tag2', component:HomeComponent},
    {path:'course/:id',component:CoursePageComponent},
    {path:'survey',component:SurveyComponent},
    {path:'cart-page',component:CartPageComponent},
];
