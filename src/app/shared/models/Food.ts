export class Food{
    
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    tags2?:string[];
    favorite:boolean = false;
    stars:number=0;
    imageUrl!:string;
    description!:string;
    creator!:string[]; 
    language!:string;
    students!:string;
    updated!:string;
}