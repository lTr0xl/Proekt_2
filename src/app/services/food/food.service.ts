import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getCourseById(id:number): Food{
    return this.getAll().find(course => course.id==id)!;

  }

  getAllTags():Tag[]{
    return [
      { name: 'Adobe Photoshop', count:14},
      { name: 'Blender', count:4},
      { name: 'Angular', count:2},
      { name: 'Unity', count:3},
      { name: 'React', count:2},
      { name: 'Javascript', count:1},
      { name: 'Java', count:1},
      { name: 'MySQL', count:0},

    ];
  }

  getAllCoursesBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(course => course.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllCoursesByTag(tag: string):Food[]{
    return this.getAll().filter(course => course.tags?.includes(tag));
  }

  getAllCoursesByTag2(tag2: string):Food[]{
    return this.getAll().filter(course => course.tags2?.includes(tag2));
  }

  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Adobe Photoshop CC- Basic Photoshop training',
        price: 13.99,
        favorite: false,
        creator: ['Yassin Marco'],
        stars: 4.5,
        imageUrl: '/assets/images/photoshop/1.jpg',
        description:"Learn the Basics of Adobe Photoshop CC 2020 No Prior Knowledge Required",
        tags: ['Adobe Photoshop'],
        tags2:['popular','new'],
        language:"English",
        students:"194,163",
        updated:"02/2024",
      },
      {
        id: 2,
        name: 'Ultimate Photoshop Training: From Beginner to Pro 2024 + AI',
        price: 74.99,
        favorite: true,
        creator: ['Cristian Doru Barin'],
        stars: 4.7,
        imageUrl: '/assets/images/photoshop/2.jpg',
        description:"Master Adobe Photoshop CC 2024 without any previous knowledge. Learn the newest AI tricks to get fast results like a pro",
        tags: ['Adobe Photoshop'],
        tags2:['favorite','popular','new'],
        language:"English",
        students:"165,376",
        updated:"12/2023",
      },
      {
        id: 3,
        name: 'Essential Photoshop Course Beginner to Intermediate',
        price: 19.99,
        favorite: false,
        creator: ['Daniel Walter Scott'],
        stars: 3.5,
        imageUrl: '/assets/images/photoshop/3.jpg',
        description:"Learn the many tools in Adobe Photoshop with in-depth lectures that explain the tool uses, options + modes in Photoshop.",
        tags: ['Adobe Photoshop'],
        tags2:['popular'],
        language:"English",
        students:"194,163",
        updated:"12/2023",
      },
      {
        id: 4,
        name: 'Adobe Photoshop CC – Advanced Training Course',
        price: 34.99,
        favorite: true,
        creator: ['Toshe Nikolov'],
        stars: 3.3,
        imageUrl: '/assets/images/photoshop/4.jpg',
        description:"Learn Photoshop quickly & easily. Master beginning Adobe Photoshop - from basics to advanced levels (PC, Mac, CS6, CC)",
        tags: ['Adobe Photoshop'],
        tags2:['favorite'],
        language:"English",
        students:"194,163",
        updated:"10/2023",
      },
      {
        id: 5,
        name: 'Adobe Photoshop CC - Essentials Training Course',
        price: 13.99,
        favorite: false,
        creator: ['Daniel Walter Scott'],
        stars: 3.0,
        imageUrl: '/assets/images/photoshop/5.jpg',
        description:"This Adobe Photoshop Essentials course will teach you Photoshop Retouching as well as Photoshop for graphic design.",
        tags: ['Adobe Photoshop'],
        tags2: ['new','popular','favorite'],
        language:"English",
        students:"194,163",
        updated:"11/2023",
      },
      {
        id: 6,
        name: 'Complete Blender Creator: Learn 3D Modelling for Beginners',
        price: 23.99,
        favorite: true,
        creator: ['Grady Walington'],
        stars: 4.0,
        imageUrl: '/assets/images/blender/1.jpg',
        description:"Use Blender to Create Beautiful 3D models for Video Games, 3D Printing & More. Beginners Level Course",
        tags: ['Blender'],
        tags2:['favorite','popular'],
        language:"English",
        students:"194,163",
        updated:"01/2024",
      },
      {
        id: 7,
        name: 'Blender Character Creator for Video Games Design',
        price: 24.99,
        favorite: false,
        creator: ['Stigi Mpigi'],
        stars: 4.2,
        imageUrl: '/assets/images/blender/2.jpg',
        description:"Model Video Game Characters. Use The Sculpt Tool To Shape, Add Texture, Rig & Animate Video Game Characters",
        tags: ['Blender'],
        language:"English",
        students:"194,163",
        updated:"01/2024",
      },
      {
        id: 8,
        name: 'Complete Blender Megacourse: Beginner to Expert',
        price: 13.99,
        favorite: false,
        creator: ['Ompega Armegando'],
        stars: 3.4,
        imageUrl: '/assets/images/blender/3.jpg',
        description:"Learn Blender 3.2, explore Geometry Nodes and create wonderful 3D environments",
        tags: ['Blender'],
        language:"English",
        students:"194,163",
        updated:"02/2024",
      },
      {
        id: 9,
        name: 'The 2024 Blender Primer: 3D Modeling, Animation & Rendering',
        price: 13.99,
        favorite: true,
        creator: ['Silici Opici'],
        stars: 4.5,
        imageUrl: '/assets/images/blender/4.jpg',
        description:"Use Blender to Create Beautiful 3D models for Video Games, 3D Printing & More. Beginners Level Course",
        tags: ['Blender'],
        tags2:['popular','new','favorite'],
        language:"English",
        students:"194,163",
        updated:"07/2023",
      },
      {
        id: 10,
        name: 'Become a Material Guru in Blender',
        price: 24.99,
        favorite: false,
        creator: ['Guardro Americano'],
        stars: 4.5,
        imageUrl: '/assets/images/blender/5.jpg',
        description:"Create your own customisable procedural materials & spectacular textures for any Blender project.",
        tags: ['Blender'],
        tags2:['popular'],
        language:"English",
        students:"194,163",
        updated:"02/2024",
      },
      {
        id: 11,
        name: 'Photoshop Master Course: From Beginner to Photoshop Pro',
        price: 119.99,
        favorite: true,
        creator: ['Silici Opici'],
        stars: 4.5,
        imageUrl: '/assets/images/photoshop/6.jpg',
        description:"This Adobe Photoshop Beginner Course will teach a Beginner Photoshop user all essentials of Adobe Photoshop CC",
        tags: ['Adobe Photoshop'],
        tags2:['popular','new','favorite'],
        language:"English",
        students:"194,163",
        updated:"01/2024",
      },
      {
        id: 12,
        name: 'Professional Adobe Photoshop CC Course With Advance Training',
        price: 73.99,
        favorite: false,
        creator: ['Guardro Americano'],
        stars: 4.5,
        imageUrl: '/assets/images/photoshop/7.jpg',
        description:"Learn Adobe Photoshop and use it to create amazing website designs and create a high, stable income. No coding needed!",
        tags: ['Adobe Photoshop'],
        tags2:['popular'],
        language:"English",
        students:"194,163",
        updated:"08/2023",
      },
      {
        id: 13,
        name: 'Learn Photoshop, Web Design & Profitable Freelancing 2024',
        price: 43.99,
        favorite: true,
        creator: ['Silici Opici'],
        stars: 4.5,
        imageUrl: '/assets/images/photoshop/8.jpg',
        description:"Master the Art of Digital Design: Learn Image Manipulation, Graphic Design, Typography, and More with Adobe Photoshop",
        tags: ['Adobe Photoshop'],
        tags2:['popular','new','favorite'],
        language:"English",
        students:"194,163",
        updated:"01/2024",
      },
      {
        id: 14,
        name: 'Become a Material Guru in Blender',
        price: 24.99,
        favorite: false,
        creator: ['Guardro Americano'],
        stars: 4.5,
        imageUrl: '/assets/images/blender/6.jpg',
        description:"Learn to Create or Edit Props, Design Levels, Apply Material and Simple Animations using Blender 3D for Unity Developers",
        tags: ['Blender'],
        tags2:['popular'],
        language:"English",
        students:"194,163",
        updated:"02/2024",
      },
      {
        id: 15,
        name: 'Become a Material Guru in Blender',
        price: 54.99,
        favorite: false,
        creator: ['Guardro Americano'],
        stars: 4.5,
        imageUrl: '/assets/images/blender/7.jpg',
        description:"Blender Basics to Pro: Deep Dive, No Experience? No Problem! Start from Scratch, Get Deeply Skilled!",
        tags: ['Blender'],
        tags2:['popular','favorite'],
        language:"English",
        students:"194,163",
        updated:"10/2023",
      },
      {
        id: 16,
        name: 'Become a Material Guru in Blender',
        price: 84.99,
        favorite: false,
        creator: ['Guardro Americano'],
        stars: 4.5,
        imageUrl: '/assets/images/blender/8.jpg',
        description:"Learn To Rig & Animate Models & Characters In Blender, For All Skill Levels. Blender 4 Compatible. EARLY ACCESS!",
        tags: ['Blender'],
        tags2:['popular','favorite'],
        language:"English",
        students:"194,163",
        updated:"02/2023",
      },
    ];

  }

} 
