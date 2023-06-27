import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router,private scrollService: ScrollService) {}
  // constructor(private scrollService: ScrollService) {}

 

  navigateTo(routePath: string) {
    this.router.navigate([routePath]);
  }
  images: string[] = [

     'assets/images/fitness.jpg',
    
    'assets/images/fitness2 (2).jpg',
    'assets/images/fitness3 (2).jpg',
    'assets/images/fitness4 (2).jpg',
    'assets/images/fitness5 (2).jpg',
    
    // 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    // 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    // 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    
    // 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    // 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  ];
  currentImage!: string;

  ngOnInit() {
    const storedIndex = localStorage.getItem('imageScrollerIndex');
    const index = storedIndex ? parseInt(storedIndex, 10) : 0;
    this.startImageScroller(index);


    this.scrollService.scrollEvents.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
  
  startImageScroller(startIndex: number) {
    let index = startIndex;
    this.currentImage = this.images[index];
  
    setInterval(() => {
      index = (index + 1) % this.images.length;
      this.currentImage = this.images[index];
      localStorage.setItem('imageScrollerIndex', index.toString());
    }, 2000); // Change the time interval as needed
  }



}
